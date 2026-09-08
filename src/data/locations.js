export const rwandaDistricts = [
  // Kigali City
  { id: "gasabo", name: "Gasabo", province: "Kigali City", deliveryFee: 1500, estHours: "2 - 4 hours", isExpress: true },
  { id: "kicukiro", name: "Kicukiro", province: "Kigali City", deliveryFee: 1500, estHours: "2 - 4 hours", isExpress: true },
  { id: "nyarugenge", name: "Nyarugenge (CBD)", province: "Kigali City", deliveryFee: 1200, estHours: "1 - 3 hours", isExpress: true },

  // Northern Province
  { id: "musanze", name: "Musanze", province: "Northern Province", deliveryFee: 3500, estHours: "Same Day (6h)", isExpress: false },
  { id: "gakenke", name: "Gakenke", province: "Northern Province", deliveryFee: 4000, estHours: "Next Day", isExpress: false },
  { id: "gicumbi", name: "Gicumbi", province: "Northern Province", deliveryFee: 3500, estHours: "Same Day (6h)", isExpress: false },
  { id: "burera", name: "Burera", province: "Northern Province", deliveryFee: 4500, estHours: "Next Day", isExpress: false },
  { id: "rulindo", name: "Rulindo", province: "Northern Province", deliveryFee: 3000, estHours: "Same Day (5h)", isExpress: false },

  // Southern Province
  { id: "huye", name: "Huye", province: "Southern Province", deliveryFee: 3500, estHours: "Same Day (6h)", isExpress: false },
  { id: "muhanga", name: "Muhanga", province: "Southern Province", deliveryFee: 2500, estHours: "Same Day (4h)", isExpress: true },
  { id: "kamonyi", name: "Kamonyi", province: "Southern Province", deliveryFee: 2000, estHours: "Same Day (3h)", isExpress: true },
  { id: "nyanza", name: "Nyanza", province: "Southern Province", deliveryFee: 3500, estHours: "Same Day (6h)", isExpress: false },
  { id: "ruhango", name: "Ruhango", province: "Southern Province", deliveryFee: 3000, estHours: "Same Day (5h)", isExpress: false },
  { id: "gisagara", name: "Gisagara", province: "Southern Province", deliveryFee: 4500, estHours: "Next Day", isExpress: false },
  { id: "nyamagabe", name: "Nyamagabe", province: "Southern Province", deliveryFee: 4500, estHours: "Next Day", isExpress: false },
  { id: "nyaruguru", name: "Nyaruguru", province: "Southern Province", deliveryFee: 5000, estHours: "Next Day", isExpress: false },

  // Western Province
  { id: "rubavu", name: "Rubavu (Gisenyi)", province: "Western Province", deliveryFee: 4000, estHours: "Same Day (7h)", isExpress: false },
  { id: "rusizi", name: "Rusizi (Cyangugu)", province: "Western Province", deliveryFee: 5500, estHours: "24 - 36 hours", isExpress: false },
  { id: "karongi", name: "Karongi (Kibuye)", province: "Western Province", deliveryFee: 4500, estHours: "Next Day", isExpress: false },
  { id: "nyabihu", name: "Nyabihu", province: "Western Province", deliveryFee: 4000, estHours: "Next Day", isExpress: false },
  { id: "ngororero", name: "Ngororero", province: "Western Province", deliveryFee: 4500, estHours: "Next Day", isExpress: false },
  { id: "rutsiro", name: "Rutsiro", province: "Western Province", deliveryFee: 5000, estHours: "Next Day", isExpress: false },
  { id: "nyamasheke", name: "Nyamasheke", province: "Western Province", deliveryFee: 5500, estHours: "24 - 36 hours", isExpress: false },

  // Eastern Province
  { id: "bugesera", name: "Bugesera", province: "Eastern Province", deliveryFee: 2500, estHours: "Same Day (4h)", isExpress: true },
  { id: "rwamagana", name: "Rwamagana", province: "Eastern Province", deliveryFee: 3000, estHours: "Same Day (4h)", isExpress: false },
  { id: "kayonza", name: "Kayonza", province: "Eastern Province", deliveryFee: 3500, estHours: "Same Day (5h)", isExpress: false },
  { id: "nyagatare", name: "Nyagatare", province: "Eastern Province", deliveryFee: 4500, estHours: "Same Day (8h)", isExpress: false },
  { id: "gatsibo", name: "Gatsibo", province: "Eastern Province", deliveryFee: 4500, estHours: "Next Day", isExpress: false },
  { id: "kirehe", name: "Kirehe", province: "Eastern Province", deliveryFee: 5000, estHours: "Next Day", isExpress: false },
  { id: "ngoma", name: "Ngoma", province: "Eastern Province", deliveryFee: 4500, estHours: "Next Day", isExpress: false }
];

export const pickupLocations = [
  {
    id: "pickup-hm-main",
    name: "Home Market Supermarket Flagship Store",
    address: "KN 3 Rd / Commercial District, Kigali",
    hours: "Open Daily: 7:00 AM - 10:00 PM",
    fee: 0
  },
  {
    id: "pickup-gasabo",
    name: "HM Express Hub Gasabo / Kimironko",
    address: "Near Kimironko Market Plaza, Kigali",
    hours: "Open Daily: 8:00 AM - 9:00 PM",
    fee: 0
  },
  {
    id: "pickup-kicukiro",
    name: "HM Express Hub Kicukiro Centre",
    address: "Sonatubes - Kicukiro Highway, Kigali",
    hours: "Open Daily: 8:00 AM - 9:00 PM",
    fee: 0
  }
];
