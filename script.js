/* ==========================================================================
   RichBrand Couture - SINGLE PAGE APPLICATION (SPA) JAVASCRIPT ENGINE
   Features: Products catalog, Gallery slider, Cart drawer, Guest/User Checkout,
            Coupon system, SEO Meta inspector display, Responsive state logic.
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. PRODUCT DATABASE
// --------------------------------------------------------------------------
const PRODUCTS_DATA = [
  {
    id: 'prod-001',
    title: 'Velvet Bordeaux Evening Gown',
    category: 'eveningwear',
    price: 345.00,
    oldPrice: 420.00,
    rating: 4.9,
    reviewsCount: 48,
    isNew: true,
    isBestSeller: true,
    primaryImg: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80',
    secondaryImg: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Wine Red', 'Midnight Black', 'Rose Champagne'],
    stock: 5,
    description: 'Impeccably tailored from rich wine-red velvet with a cascading floor-length silhouette. Designed with a structured corset bodice and subtle thigh slit for timeless glamour.',
    fabricCare: '100% Organic Mulberry Velvet. Dry clean only. Iron inside out with steam.',
    meta: {
      title: 'Velvet Bordeaux Evening Gown | RichBrand Couture',
      description: 'Shop the handcrafted Velvet Bordeaux Evening Gown in signature wine red. Floor-length luxury gown tailored for black-tie galas and evening affairs.',
      keywords: 'wine red evening gown, luxury velvet dress, bordeaux gown, couture fashion'
    }
  },
  {
    id: 'prod-002',
    title: 'Wine Red Double-Breasted Blazer',
    category: 'outerwear',
    price: 280.00,
    oldPrice: 320.00,
    rating: 4.8,
    reviewsCount: 32,
    isNew: false,
    isBestSeller: true,
    primaryImg: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
    secondaryImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Wine Red', 'Charcoal Onyx'],
    stock: 8,
    description: 'A masterpiece in contemporary tailoring. Crafted from premium Italian wool blend with custom gold crest buttons and silk lining.',
    fabricCare: '80% Virgin Wool, 20% Silk. Professional dry clean recommended.',
    meta: {
      title: 'Wine Red Double-Breasted Wool Blazer | RichBrand',
      description: 'Elegantly sharp wine red double-breasted blazer for modern women and men. Crafted with Italian virgin wool.',
      keywords: 'wine red blazer, double breasted jacket, luxury tailoring, bordeaux blazer'
    }
  },
  {
    id: 'prod-003',
    title: 'Burgundy Mulberry Silk Slip Dress',
    category: 'eveningwear',
    price: 215.00,
    oldPrice: 260.00,
    rating: 4.95,
    reviewsCount: 56,
    isNew: true,
    isBestSeller: false,
    primaryImg: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
    secondaryImg: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M'],
    colors: ['Deep Burgundy', 'Champagne Gold'],
    stock: 12,
    description: 'Sensual biases-cut silk slip dress in deep burgundy. Drapes effortlessly over the frame with adjustable delicate spaghetti straps.',
    fabricCare: '100% 22-Momme Mulberry Silk. Hand wash cold or dry clean.',
    meta: {
      title: 'Burgundy Mulberry Silk Slip Dress | RichBrand Couture',
      description: 'Fluid 100% Mulberry silk slip dress in deep burgundy. Lightweight, breathable, and intoxicatingly graceful.',
      keywords: 'burgundy silk dress, slip dress, mulberry silk, wine red outfit'
    }
  },
  {
    id: 'prod-004',
    title: 'Royal Maroon Cashmere Trench Coat',
    category: 'outerwear',
    price: 495.00,
    oldPrice: 580.00,
    rating: 5.0,
    reviewsCount: 29,
    isNew: true,
    isBestSeller: true,
    primaryImg: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80',
    secondaryImg: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L'],
    colors: ['Royal Maroon', 'Camel Tan'],
    stock: 4,
    description: 'Ultra-luxurious cashmere-wool blend coat featuring a waist-cinching belt, wide lapels, and deep storm flap for autumn warmth.',
    fabricCare: '70% Mongolian Cashmere, 30% Fine Wool. Dry clean only.',
    meta: {
      title: 'Royal Maroon Cashmere Trench Coat | RichBrand',
      description: 'Wrap yourself in pure cashmere luxury with our Royal Maroon Trench Coat. Hand-finished seams & iconic silhouette.',
      keywords: 'cashmere trench coat, maroon wool coat, luxury outerwear, wine red coat'
    }
  },
  {
    id: 'prod-005',
    title: 'Wine Red Pleated Satin Midi Skirt',
    category: 'bottoms',
    price: 165.00,
    oldPrice: 195.00,
    rating: 4.7,
    reviewsCount: 21,
    isNew: false,
    isBestSeller: false,
    primaryImg: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1000&q=80',
    secondaryImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Wine Red', 'Emerald Green'],
    stock: 15,
    description: 'High-waisted pleated midi skirt in shimmering satin. Elastic waistband with side zip closure for fluid motion.',
    fabricCare: '100% Premium Satin Polyester. Cold gentle machine wash.',
    meta: {
      title: 'Wine Red Pleated Satin Midi Skirt | RichBrand',
      description: 'Flowy satin pleated midi skirt in rich wine red. Versatile styling from casual daywear to evening dinner.',
      keywords: 'pleated midi skirt, satin skirt, wine red skirt'
    }
  },
  {
    id: 'prod-006',
    title: 'Bordeaux Satin Wrap Draped Blouse',
    category: 'tops',
    price: 145.00,
    oldPrice: 175.00,
    rating: 4.85,
    reviewsCount: 38,
    isNew: true,
    isBestSeller: true,
    primaryImg: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1000&q=80',
    secondaryImg: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Bordeaux Wine', 'Ivory Cream'],
    stock: 10,
    description: 'Draped V-neck blouse with subtle bishop sleeves and tailored cuffs. Adds effortless sophistication to blazers or leather trousers.',
    fabricCare: '95% Silk, 5% Elastane. Dry clean or hand wash cold.',
    meta: {
      title: 'Bordeaux Satin Wrap Draped Blouse | RichBrand Couture',
      description: 'Elegant wrap satin blouse in bordeaux. Features flattering waist ties and soft silk feel.',
      keywords: 'satin blouse, wine red top, silk shirt, bordeaux clothing'
    }
  }
];

// --------------------------------------------------------------------------
// 2. SPA STATE STORE
// --------------------------------------------------------------------------
const state = {
  cart: [],
  wishlist: [],
  activeCategory: 'all',
  activeProduct: null,
  selectedSize: null,
  selectedColor: null,
  pdpQuantity: 1,
  appliedCoupon: null, // { code: 'WINE20', discountPercent: 20 }
  user: {
    isLoggedIn: false,
    name: 'Sophia Vance',
    email: 'sophia.vance@example.com',
    address: '742 Evergreen Terrace, New York, NY 10001'
  },
  checkoutMode: 'guest', // 'guest' | 'login'
  checkoutStep: 1 // 1: Info, 2: Shipping, 3: Payment
};

// Available Coupons
const COUPONS = {
  'WINE20': { type: 'percent', value: 20, desc: '20% OFF Everything' },
  'LUXE10': { type: 'fixed', value: 10, desc: '$10 OFF Order' },
  'FREESHIP': { type: 'shipping', value: 0, desc: 'Free Express Shipping' }
};

// --------------------------------------------------------------------------
// 3. DOM ELEMENTS REFERENCE
// --------------------------------------------------------------------------
const DOM = {
  productsGrid: document.getElementById('products-grid'),
  categoryTabs: document.getElementById('category-tabs'),
  cartBadge: document.getElementById('cart-badge'),
  cartDrawerOverlay: document.getElementById('cart-drawer-overlay'),
  cartDrawer: document.getElementById('cart-drawer'),
  cartItemsContainer: document.getElementById('cart-items-container'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartDiscount: document.getElementById('cart-discount'),
  cartDiscountRow: document.getElementById('cart-discount-row'),
  cartTotal: document.getElementById('cart-total'),
  freeShippingFill: document.getElementById('free-shipping-fill'),
  freeShippingText: document.getElementById('free-shipping-text'),
  couponInput: document.getElementById('coupon-input'),
  couponMsg: document.getElementById('coupon-msg'),
  
  // Modals
  pdpModal: document.getElementById('pdp-modal'),
  checkoutModal: document.getElementById('checkout-modal'),
  confirmationModal: document.getElementById('confirmation-modal'),
  authModal: document.getElementById('auth-modal'),
  
  // PDP Modal Elements
  pdpGalleryMain: document.getElementById('pdp-gallery-main'),
  pdpGalleryThumbs: document.getElementById('pdp-gallery-thumbs'),
  pdpTitle: document.getElementById('pdp-title'),
  pdpPrice: document.getElementById('pdp-price'),
  pdpOldPrice: document.getElementById('pdp-old-price'),
  pdpRating: document.getElementById('pdp-rating'),
  pdpReviewsCount: document.getElementById('pdp-reviews-count'),
  pdpStock: document.getElementById('pdp-stock'),
  pdpDescription: document.getElementById('pdp-description'),
  pdpFabric: document.getElementById('pdp-fabric'),
  pdpColorSwatches: document.getElementById('pdp-color-swatches'),
  pdpSizeOptions: document.getElementById('pdp-size-options'),
  pdpQtyInput: document.getElementById('pdp-qty-input'),
  pdpMetaTitle: document.getElementById('pdp-meta-title'),
  pdpMetaDesc: document.getElementById('pdp-meta-desc'),
  pdpMetaKeywords: document.getElementById('pdp-meta-keywords'),

  // Header Elements
  userStatusBtn: document.getElementById('user-status-btn'),
  userStatusText: document.getElementById('user-status-text'),
  hamburgerBtn: document.getElementById('hamburger-btn'),
  mobileNavDrawer: document.getElementById('mobile-nav-drawer'),

  // Toast Container
  toastContainer: document.getElementById('toast-container')
};

// --------------------------------------------------------------------------
// 4. INITIALIZATION & ROUTING
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupEventListeners();
  updateCartUI();
});

// --------------------------------------------------------------------------
// 5. PRODUCT RENDERING & FILTERING
// --------------------------------------------------------------------------
function renderProducts() {
  if (!DOM.productsGrid) return;
  
  const filtered = state.activeCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => {
        if (state.activeCategory === 'bestsellers') return p.isBestSeller;
        if (state.activeCategory === 'new') return p.isNew;
        return p.category === state.activeCategory;
      });

  DOM.productsGrid.innerHTML = filtered.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-media">
        <div class="product-badges">
          ${product.isNew ? '<span class="badge badge-wine">New Arrival</span>' : ''}
          ${product.isBestSeller ? '<span class="badge badge-gold">Best Seller</span>' : ''}
        </div>
        <img src="${product.primaryImg}" alt="${product.title}" class="img-primary" loading="lazy" />
        <img src="${product.secondaryImg}" alt="${product.title}" class="img-secondary" loading="lazy" />
        <div class="product-actions-overlay">
          <button class="action-icon-btn btn-quick-view" title="Quick View" onclick="openPDP('${product.id}')">
            <i class="ri-eye-line"></i>
          </button>
          <button class="action-icon-btn btn-wishlist" title="Add to Wishlist" onclick="toggleWishlist('${product.id}', this)">
            <i class="${state.wishlist.includes(product.id) ? 'ri-heart-fill' : 'ri-heart-line'}" style="${state.wishlist.includes(product.id) ? 'color: var(--color-wine-primary);' : ''}"></i>
          </button>
        </div>
      </div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title" onclick="openPDP('${product.id}')" style="cursor:pointer">${product.title}</h3>
        <div class="product-rating">
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-half-fill"></i>
          <span>(${product.reviewsCount})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            <span class="current-price">$${product.price.toFixed(2)}</span>
            <span class="old-price">$${product.oldPrice.toFixed(2)}</span>
          </div>
          <button class="add-cart-btn" onclick="quickAddToCart('${product.id}')">
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Category filter handler
function setupCategoryTabs() {
  if (!DOM.categoryTabs) return;
  DOM.categoryTabs.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      DOM.categoryTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.activeCategory = e.target.dataset.category;
      renderProducts();
    });
  });
}

// --------------------------------------------------------------------------
// 6. PRODUCT DETAIL PAGE (PDP) MODAL & GALLERY
// --------------------------------------------------------------------------
function openPDP(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  state.activeProduct = product;
  state.selectedSize = product.sizes[0];
  state.selectedColor = product.colors[0];
  state.pdpQuantity = 1;

  // Render Gallery Main & Thumbnails
  DOM.pdpGalleryMain.src = product.gallery[0];
  DOM.pdpGalleryThumbs.innerHTML = product.gallery.map((imgUrl, index) => `
    <div class="thumb-img ${index === 0 ? 'active' : ''}" onclick="switchGalleryImg('${imgUrl}', this)">
      <img src="${imgUrl}" alt="Thumbnail ${index + 1}" />
    </div>
  `).join('');

  // Info details
  DOM.pdpTitle.textContent = product.title;
  DOM.pdpPrice.textContent = `$${product.price.toFixed(2)}`;
  DOM.pdpOldPrice.textContent = `$${product.oldPrice.toFixed(2)}`;
  DOM.pdpReviewsCount.textContent = `(${product.reviewsCount} customer reviews)`;
  DOM.pdpStock.textContent = `In Stock (${product.stock} pieces left)`;
  DOM.pdpDescription.textContent = product.description;
  DOM.pdpFabric.textContent = product.fabricCare;
  DOM.pdpQtyInput.value = 1;

  // Color Swatches
  DOM.pdpColorSwatches.innerHTML = product.colors.map((color, idx) => `
    <div class="color-swatch ${idx === 0 ? 'active' : ''}" 
         style="background-color: ${getColorHex(color)};" 
         title="${color}"
         onclick="selectColor('${color}', this)">
    </div>
  `).join('');
  document.getElementById('selected-color-label').textContent = product.colors[0];

  // Size Options
  DOM.pdpSizeOptions.innerHTML = product.sizes.map((size, idx) => `
    <button class="size-btn ${idx === 0 ? 'active' : ''}" onclick="selectSize('${size}', this)">
      ${size}
    </button>
  `).join('');

  // Render SEO Meta tags panel (Requested SPA feature)
  DOM.pdpMetaTitle.textContent = product.meta.title;
  DOM.pdpMetaDesc.textContent = product.meta.description;
  DOM.pdpMetaKeywords.textContent = product.meta.keywords;

  // Open Modal
  DOM.pdpModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function switchGalleryImg(url, thumbElem) {
  DOM.pdpGalleryMain.src = url;
  DOM.pdpGalleryThumbs.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
  thumbElem.classList.add('active');
}

function selectColor(colorName, elem) {
  state.selectedColor = colorName;
  DOM.pdpColorSwatches.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  elem.classList.add('active');
  document.getElementById('selected-color-label').textContent = colorName;
}

function selectSize(sizeName, elem) {
  state.selectedSize = sizeName;
  DOM.pdpSizeOptions.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  elem.classList.add('active');
}

function updatePDPQty(delta) {
  const newQty = state.pdpQuantity + delta;
  if (newQty >= 1 && newQty <= (state.activeProduct ? state.activeProduct.stock : 10)) {
    state.pdpQuantity = newQty;
    DOM.pdpQtyInput.value = newQty;
  }
}

function addActiveProductToCart() {
  if (!state.activeProduct) return;
  addToCart(state.activeProduct.id, state.pdpQuantity, state.selectedSize, state.selectedColor);
  closeModal('pdp-modal');
  openCartDrawer();
}

function quickAddToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  addToCart(product.id, 1, product.sizes[0], product.colors[0]);
  showToast(`Added "${product.title}" to cart`);
}

function getColorHex(colorName) {
  const map = {
    'Wine Red': '#721c2c',
    'Deep Burgundy': '#4a0d18',
    'Bordeaux Wine': '#6b1d2f',
    'Royal Maroon': '#3b0a13',
    'Midnight Black': '#141113',
    'Rose Champagne': '#f0d5db',
    'Charcoal Onyx': '#2d282a',
    'Champagne Gold': '#c5a059',
    'Camel Tan': '#b8860b',
    'Emerald Green': '#004d40',
    'Ivory Cream': '#fffdd0'
  };
  return map[colorName] || '#721c2c';
}

// --------------------------------------------------------------------------
// 7. CART ENGINE & DRAWER MANAGEMENT
// --------------------------------------------------------------------------
function addToCart(productId, quantity = 1, size, color) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(
    item => item.id === productId && item.size === size && item.color === color
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.primaryImg,
      size: size || product.sizes[0],
      color: color || product.colors[0],
      quantity: quantity
    });
  }

  updateCartUI();
}

function updateCartQuantity(index, delta) {
  if (state.cart[index]) {
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    updateCartUI();
  }
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  updateCartUI();
  showToast('Item removed from cart');
}

function updateCartUI() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  DOM.cartBadge.textContent = totalItems;

  if (state.cart.length === 0) {
    DOM.cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <i class="ri-shopping-bag-line"></i>
        <p class="font-serif" style="font-size:1.25rem; font-weight:600; margin-bottom:0.5rem">Your shopping bag is empty</p>
        <p style="font-size:0.875rem">Discover our Wine Red Collection and add luxury to your wardrobe.</p>
      </div>
    `;
  } else {
    DOM.cartItemsContainer.innerHTML = state.cart.map((item, idx) => `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.img}" alt="${item.title}" />
        </div>
        <div class="cart-item-info">
          <div style="display:flex; justify-between; align-items:flex-start">
            <h4 class="cart-item-title">${item.title}</h4>
            <i class="ri-delete-bin-line cart-item-remove" onclick="removeFromCart(${idx})"></i>
          </div>
          <div class="cart-item-meta">Size: ${item.size} | Color: ${item.color}</div>
          <div class="cart-item-price-row">
            <div class="quantity-control" style="padding: 2px 4px;">
              <button class="qty-btn" onclick="updateCartQuantity(${idx}, -1)" style="width:24px; height:24px; font-size:0.8rem">-</button>
              <span class="qty-input" style="width:24px; font-size:0.8125rem">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity(${idx}, 1)" style="width:24px; height:24px; font-size:0.8rem">+</button>
            </div>
            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Calculations
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;

  if (state.appliedCoupon) {
    const coupon = state.appliedCoupon;
    if (coupon.type === 'percent') {
      discount = (subtotal * coupon.value) / 100;
    } else if (coupon.type === 'fixed') {
      discount = Math.min(subtotal, coupon.value);
    }
  }

  const finalTotal = Math.max(0, subtotal - discount);

  DOM.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (discount > 0) {
    DOM.cartDiscountRow.style.display = 'flex';
    DOM.cartDiscount.textContent = `-$${discount.toFixed(2)}`;
  } else {
    DOM.cartDiscountRow.style.display = 'none';
  }
  DOM.cartTotal.textContent = `$${finalTotal.toFixed(2)}`;

  // Free Shipping Threshold ($150)
  const freeShipGoal = 150.00;
  if (subtotal >= freeShipGoal) {
    DOM.freeShippingFill.style.width = '100%';
    DOM.freeShippingText.innerHTML = '<span style="color:var(--color-wine-primary)">🎉 You unlocked FREE Express Shipping!</span>';
  } else {
    const remaining = freeShipGoal - subtotal;
    const percent = Math.min(100, (subtotal / freeShipGoal) * 100);
    DOM.freeShippingFill.style.width = `${percent}%`;
    DOM.freeShippingText.textContent = `Add $${remaining.toFixed(2)} more to unlock FREE Express Shipping`;
  }
}

function applyCouponCode() {
  const code = DOM.couponInput.value.trim().toUpperCase();
  if (!code) return;

  if (COUPONS[code]) {
    state.appliedCoupon = { code: code, ...COUPONS[code] };
    DOM.couponMsg.className = 'coupon-msg success';
    DOM.couponMsg.textContent = `Coupon "${code}" applied: ${COUPONS[code].desc}`;
    updateCartUI();
    showToast(`Coupon ${code} applied successfully!`);
  } else {
    DOM.couponMsg.className = 'coupon-msg error';
    DOM.couponMsg.textContent = 'Invalid promo code. Try "WINE20" or "LUXE10".';
  }
}

function openCartDrawer() {
  DOM.cartDrawerOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  DOM.cartDrawerOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// --------------------------------------------------------------------------
// 8. CHECKOUT ENGINE (GUEST VS LOGGED-IN USER)
// --------------------------------------------------------------------------
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty');
    return;
  }
  closeCartDrawer();
  renderCheckoutSummary();
  DOM.checkoutModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Check login state to prefill checkout
  if (state.user.isLoggedIn) {
    switchCheckoutMode('login');
  } else {
    switchCheckoutMode('guest');
  }
}

function switchCheckoutMode(mode) {
  state.checkoutMode = mode;
  const guestBtn = document.getElementById('chk-mode-guest');
  const loginBtn = document.getElementById('chk-mode-login');
  const userAlertBox = document.getElementById('chk-user-alert');

  if (mode === 'guest') {
    guestBtn.classList.add('active');
    loginBtn.classList.remove('active');
    userAlertBox.style.display = 'none';
    
    // Clear prefilled data for guest
    document.getElementById('chk-email').value = '';
    document.getElementById('chk-fname').value = '';
    document.getElementById('chk-lname').value = '';
    document.getElementById('chk-address').value = '';
  } else {
    loginBtn.classList.add('active');
    guestBtn.classList.remove('active');
    userAlertBox.style.display = 'block';

    if (state.user.isLoggedIn) {
      document.getElementById('chk-email').value = state.user.email;
      document.getElementById('chk-fname').value = state.user.name.split(' ')[0] || 'Sophia';
      document.getElementById('chk-lname').value = state.user.name.split(' ')[1] || 'Vance';
      document.getElementById('chk-address').value = state.user.address;
    } else {
      openAuthModal();
    }
  }
}

function renderCheckoutSummary() {
  const container = document.getElementById('chk-summary-items');
  if (!container) return;

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;

  if (state.appliedCoupon) {
    const coupon = state.appliedCoupon;
    if (coupon.type === 'percent') discount = (subtotal * coupon.value) / 100;
    else if (coupon.type === 'fixed') discount = Math.min(subtotal, coupon.value);
  }

  const shipping = subtotal >= 150 ? 0 : 15.00;
  const total = subtotal - discount + shipping;

  container.innerHTML = state.cart.map(item => `
    <div style="display:flex; justify-content:space-between; margin-bottom:0.75rem; font-size:0.875rem">
      <div>
        <div style="font-weight:600">${item.title} (x${item.quantity})</div>
        <div style="font-size:0.75rem; color:var(--color-text-muted)">Size: ${item.size} | Color: ${item.color}</div>
      </div>
      <div style="font-weight:700">$${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  `).join('');

  document.getElementById('chk-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('chk-discount').textContent = `-$${discount.toFixed(2)}`;
  document.getElementById('chk-shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  document.getElementById('chk-total').textContent = `$${total.toFixed(2)}`;
}

function selectPaymentMethod(elem, method) {
  document.querySelectorAll('.payment-card-opt').forEach(opt => opt.classList.remove('active'));
  elem.classList.add('active');
}

function processPlaceOrder(e) {
  e.preventDefault();

  const email = document.getElementById('chk-email').value;
  const name = `${document.getElementById('chk-fname').value} ${document.getElementById('chk-lname').value}`;
  
  if (!email || !name.trim()) {
    showToast('Please complete shipping details');
    return;
  }

  const submitBtn = document.getElementById('place-order-btn');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Processing Order...';

  setTimeout(() => {
    // Order successful!
    const orderId = `RB-${Math.floor(100000 + Math.random() * 900000)}`;
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;
    if (state.appliedCoupon) {
      if (state.appliedCoupon.type === 'percent') discount = (subtotal * state.appliedCoupon.value) / 100;
      else if (state.appliedCoupon.type === 'fixed') discount = state.appliedCoupon.value;
    }
    const finalTotal = subtotal - discount;

    closeModal('checkout-modal');
    
    // Render Confirmation Receipt
    document.getElementById('receipt-order-id').textContent = orderId;
    document.getElementById('receipt-email').textContent = email;
    document.getElementById('receipt-customer').textContent = name;
    document.getElementById('receipt-total').textContent = `$${finalTotal.toFixed(2)}`;
    
    DOM.confirmationModal.classList.add('active');

    // Reset Cart & Form
    state.cart = [];
    state.appliedCoupon = null;
    updateCartUI();

    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Place Order Now';
  }, 1200);
}

// --------------------------------------------------------------------------
// 9. AUTHENTICATION & USER MODAL
// --------------------------------------------------------------------------
function openAuthModal() {
  DOM.authModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function handleLoginSubmit(e) {
  e.preventDefault();
  state.user.isLoggedIn = true;
  updateUserHeaderState();
  closeModal('auth-modal');
  showToast('Welcome back, Sophia!');
  
  if (DOM.checkoutModal.classList.contains('active')) {
    switchCheckoutMode('login');
  }
}

function handleLogout() {
  state.user.isLoggedIn = false;
  updateUserHeaderState();
  showToast('Logged out successfully');
}

function updateUserHeaderState() {
  if (state.user.isLoggedIn) {
    DOM.userStatusText.textContent = 'Sophia V.';
    DOM.userStatusBtn.style.color = 'var(--color-wine-primary)';
    DOM.userStatusBtn.onclick = () => {
      if (confirm('Log out from Sophia Vance account?')) {
        handleLogout();
      }
    };
  } else {
    DOM.userStatusText.textContent = 'Log In';
    DOM.userStatusBtn.style.color = '';
    DOM.userStatusBtn.onclick = openAuthModal;
  }
}

// Wishlist toggle
function toggleWishlist(productId, btnElem) {
  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast('Removed from Wishlist');
  } else {
    state.wishlist.push(productId);
    showToast('Added to Wishlist');
  }
  renderProducts();
}

// --------------------------------------------------------------------------
// 10. MODAL & UI UTILITIES
// --------------------------------------------------------------------------
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="ri-checkbox-circle-fill" style="color:var(--color-gold)"></i> <span>${message}</span>`;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 350);
  }, 3000);
}

// Setup Event Listeners
function setupEventListeners() {
  setupCategoryTabs();

  // Sticky Header Scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Hamburger Toggle
  if (DOM.hamburgerBtn) {
    DOM.hamburgerBtn.addEventListener('click', () => {
      DOM.mobileNavDrawer.classList.toggle('active');
    });
  }

  // Close Modals on Overlay Click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}
