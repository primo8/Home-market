import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { IconRenderer } from '../common/IconRenderer';
import { PlusCircle, Edit2, Trash2, CheckCircle2, X, Sparkles, FolderTree } from 'lucide-react';

export const CategoryManager = () => {
  const { categories, setCategories, addToast } = useMarketplace();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  // New Category State
  const [newCat, setNewCat] = useState({
    name: '',
    slug: '',
    icon: 'Package',
    badge: 'New',
    featured: false,
    description: '',
    subcategories: ''
  });

  const handleCreateCategory = (e) => {
    e.preventDefault();
    const created = {
      id: `cat-${Date.now()}`,
      name: newCat.name,
      slug: newCat.slug || newCat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      icon: newCat.icon || 'Package',
      badge: newCat.badge || null,
      featured: Boolean(newCat.featured),
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      description: newCat.description || `Explore ${newCat.name} on Home Market Supermarket.`,
      subcategories: newCat.subcategories
        ? newCat.subcategories.split(',').map(s => s.trim()).filter(Boolean)
        : ['General', 'Accessories', 'New Arrivals']
    };

    setCategories(prev => [...prev, created]);
    setIsCreateModalOpen(false);
    setNewCat({ name: '', slug: '', icon: 'Package', badge: 'New', featured: false, description: '', subcategories: '' });
    addToast(`Category "${created.name}" created dynamically!`, 'success');
  };

  const handleDeleteCategory = (catId) => {
    if (confirm('Are you sure you want to deactivate and remove this category?')) {
      setCategories(prev => prev.filter(c => c.id !== catId));
      addToast('Category removed from runtime registry', 'info');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FolderTree size={22} color="#2563EB" /> Runtime 47+ Category Engine
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
            Add, edit, reorder, or toggle categories and subcategories dynamically without source code changes.
          </p>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => setIsCreateModalOpen(true)}
        >
          <PlusCircle size={18} /> + Create New Category
        </button>
      </div>

      {/* Category Table */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid #E2E8F0', color: '#475569' }}>
              <th style={{ padding: '12px 16px' }}>Icon & Category Name</th>
              <th style={{ padding: '12px 16px' }}>Slug / URL</th>
              <th style={{ padding: '12px 16px' }}>Subcategories Count</th>
              <th style={{ padding: '12px 16px' }}>Badge</th>
              <th style={{ padding: '12px 16px' }}>Featured</th>
              <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, idx) => (
              <tr key={cat.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconRenderer name={cat.icon} size={16} color="#2563EB" />
                  </div>
                  <strong style={{ color: '#0F172A' }}>{idx + 1}. {cat.name}</strong>
                </td>
                <td style={{ padding: '12px 16px', color: '#64748B' }}>
                  <code>/categories/{cat.slug}</code>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <span className="badge badge-blue">
                    {cat.subcategories.length} subs
                  </span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  {cat.badge ? (
                    <span className="badge badge-green">{cat.badge}</span>
                  ) : (
                    <span style={{ color: '#94A3B8' }}>—</span>
                  )}
                </td>
                <td style={{ padding: '12px 16px' }}>
                  {cat.featured ? (
                    <span style={{ color: '#16A34A', fontWeight: 700 }}>✓ Homepage</span>
                  ) : (
                    <span style={{ color: '#94A3B8' }}>Menu only</span>
                  )}
                </td>
                <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                  <button
                    onClick={() => handleDeleteCategory(cat.id)}
                    style={{ color: '#EF4444', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
                    title="Delete Category"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Category Modal */}
      {isCreateModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            maxWidth: '560px',
            width: '100%',
            padding: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A' }}>Add New Marketplace Category</h3>
              <button onClick={() => setIsCreateModalOpen(false)} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateCategory} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Clean Energy & Solar"
                  value={newCat.name}
                  onChange={(e) => setNewCat({ ...newCat, name: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Icon Name (Lucide)
                  </label>
                  <input
                    type="text"
                    value={newCat.icon}
                    onChange={(e) => setNewCat({ ...newCat, icon: e.target.value })}
                    placeholder="e.g. SunMedium, Cpu, Shirt"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Badge Text
                  </label>
                  <input
                    type="text"
                    value={newCat.badge}
                    onChange={(e) => setNewCat({ ...newCat, badge: e.target.value })}
                    placeholder="e.g. Hot, New, Popular"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Subcategories (comma separated) *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Solar Panels, Inverters, Lithium Batteries, Charge Controllers"
                  value={newCat.subcategories}
                  onChange={(e) => setNewCat({ ...newCat, subcategories: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Category Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Short description for mega menu..."
                  value={newCat.description}
                  onChange={(e) => setNewCat({ ...newCat, description: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  id="featuredCat"
                  checked={newCat.featured}
                  onChange={(e) => setNewCat({ ...newCat, featured: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: '#2563EB' }}
                />
                <label htmlFor="featuredCat" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0F172A', cursor: 'pointer' }}>
                  Feature this category in the Homepage Grid
                </label>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button type="button" className="btn btn-outline" onClick={() => setIsCreateModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Create & Deploy Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
