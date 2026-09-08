import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialCategories } from '../data/categories';
import { initialProducts } from '../data/products';
import { rwandaDistricts, pickupLocations } from '../data/locations';
import { sellers as initialSellers } from '../data/sellers';
import { translations } from '../data/translations';

const MarketplaceContext = createContext();

export const MarketplaceProvider = ({ children }) => {
  // Navigation & View State
  const [currentView, setCurrentView] = useState('home');
  const [activeRole, setActiveRole] = useState('customer'); // 'customer' | 'seller' | 'admin' | 'investor'
  const [language, setLanguage] = useState('en'); // 'en' | 'rw' | 'fr'
  const [selectedProduct, setSelectedProduct] = useState(initialProducts[0]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);

  // Search & Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilterCategory, setSearchFilterCategory] = useState('all');
  const [filterDistrict, setFilterDistrict] = useState('all');
  const [filterPriceRange, setFilterPriceRange] = useState([0, 2000000]);
  const [filterRating, setFilterRating] = useState(0);

  // Rwanda Logistics
  const [currentDistrict, setCurrentDistrict] = useState(rwandaDistricts[0]); // Gasabo
  const [deliveryMethod, setDeliveryMethod] = useState('standard'); // 'standard' | 'express' | 'pickup'
  const [selectedPickup, setSelectedPickup] = useState(pickupLocations[0]);

  // Catalog State (Dynamic for Admin / Seller changes)
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('hm_categories');
    return saved ? JSON.parse(saved) : initialCategories;
  });

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('hm_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [sellersList, setSellersList] = useState(() => {
    const saved = localStorage.getItem('hm_sellers');
    return saved ? JSON.parse(saved) : initialSellers;
  });

  // Cart State
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('hm_cart');
    return saved ? JSON.parse(saved) : [
      { product: initialProducts[0], quantity: 1 },
      { product: initialProducts[4], quantity: 2 }
    ];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('hm_wishlist');
    return saved ? JSON.parse(saved) : [initialProducts[1].id, initialProducts[8].id];
  });

  // Orders State (Mock persistent order pipeline)
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('hm_orders');
    return saved ? JSON.parse(saved) : [
      {
        id: "ORD-89421",
        date: new Date(Date.now() - 3600000 * 4).toISOString(),
        items: [
          { product: initialProducts[0], quantity: 1 },
          { product: initialProducts[8], quantity: 1 }
        ],
        subtotal: 497000,
        deliveryFee: 1500,
        total: 498500,
        district: "Gasabo, Kigali",
        address: "KG 9 Ave, House 24, Nyarutarama",
        paymentMethod: "MTN Mobile Money (*182#)",
        paymentStatus: "PAID",
        momoPhone: "+250 788 123 456",
        status: "Out for delivery", // Stages: Placed -> Confirmed -> Processing -> Preparing -> Out for delivery -> Delivered
        estimatedDelivery: "Today by 4:30 PM",
        trackingSteps: [
          { label: "Order placed", time: "10:15 AM", completed: true },
          { label: "Payment confirmed", time: "10:16 AM", completed: true },
          { label: "Processing", time: "10:30 AM", completed: true },
          { label: "Preparing order", time: "11:45 AM", completed: true },
          { label: "Out for delivery", time: "01:20 PM", completed: true, current: true },
          { label: "Delivered", time: "Pending", completed: false }
        ]
      }
    ];
  });

  // Toast Notification System
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('hm_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('hm_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('hm_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('hm_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('hm_products', JSON.stringify(products));
  }, [products]);

  // Cart Handlers
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    addToast(`Added "${product.name.slice(0, 32)}..." to cart!`, 'success');
  };

  const updateCartQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    addToast('Item removed from cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist Handlers
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        addToast('Removed from wishlist', 'info');
        return prev.filter((id) => id !== productId);
      } else {
        addToast('Added to wishlist!', 'success');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Cart Calculations
  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  
  const deliveryFee = deliveryMethod === 'pickup' 
    ? 0 
    : (cartSubtotal >= 35000 && currentDistrict.province === 'Kigali City' ? 0 : currentDistrict.deliveryFee);

  const cartTotal = cartSubtotal + deliveryFee;
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Order Placement
  const placeOrder = (orderData) => {
    const newOrder = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString(),
      items: [...cart],
      subtotal: cartSubtotal,
      deliveryFee: deliveryFee,
      total: cartTotal,
      district: currentDistrict.name + ", " + currentDistrict.province,
      address: orderData.address || "Direct District Delivery",
      paymentMethod: orderData.paymentMethod || "MTN Mobile Money",
      paymentStatus: "PAID (Simulated MoMo Escrow)",
      momoPhone: orderData.phone || "+250 788 000 000",
      status: "Payment confirmed",
      estimatedDelivery: currentDistrict.estHours,
      trackingSteps: [
        { label: "Order placed", time: "Just now", completed: true },
        { label: "Payment confirmed", time: "Just now", completed: true, current: true },
        { label: "Processing", time: "Pending", completed: false },
        { label: "Preparing order", time: "Pending", completed: false },
        { label: "Out for delivery", time: "Pending", completed: false },
        { label: "Delivered", time: "Pending", completed: false }
      ]
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  // Product Navigation
  const viewProductDetails = (product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCategory = (cat) => {
    setSelectedCategory(cat);
    setCurrentView('categories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSeller = (seller) => {
    setSelectedSeller(seller);
    setCurrentView('seller-storefront');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = translations[language] || translations.en;

  return (
    <MarketplaceContext.Provider
      value={{
        currentView,
        setCurrentView,
        activeRole,
        setActiveRole,
        language,
        setLanguage,
        t,
        selectedProduct,
        setSelectedProduct,
        quickViewProduct,
        setQuickViewProduct,
        selectedCategory,
        setSelectedCategory,
        selectedSeller,
        setSelectedSeller,
        searchQuery,
        setSearchQuery,
        searchFilterCategory,
        setSearchFilterCategory,
        filterDistrict,
        setFilterDistrict,
        filterPriceRange,
        setFilterPriceRange,
        filterRating,
        setFilterRating,
        currentDistrict,
        setCurrentDistrict,
        deliveryMethod,
        setDeliveryMethod,
        selectedPickup,
        setSelectedPickup,
        categories,
        setCategories,
        products,
        setProducts,
        sellersList,
        setSellersList,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        cartSubtotal,
        deliveryFee,
        cartTotal,
        cartItemCount,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        orders,
        setOrders,
        placeOrder,
        toasts,
        addToast,
        viewProductDetails,
        navigateToCategory,
        navigateToSeller
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
};

export const useMarketplace = () => {
  const context = useContext(MarketplaceContext);
  if (!context) {
    throw new Error('useMarketplace must be used within a MarketplaceProvider');
  }
  return context;
};
