import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Fashion Crossbody Bag',
        price: 3493.00,
        category: 'bags',
        image: 'https://img.kwcdn.com/product/fancy/686f03bb-e697-437b-95ee-d352f26aa491.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Stylish crossbody bag with multiple compartments and adjustable strap.',
        specs: [
          'PU leather material',
          'Adjustable strap',
          'Multiple compartments',
          'Zipper closure',
          'Dimensions: 25x20x8 cm'
        ]
      },
      {
        id: 2,
        name: 'Summer Floral Dress',
        price: 2888.00,
        category: 'clothing',
        image: 'https://img.kwcdn.com/product/fancy/152e3b7b-d164-4456-9c70-e10f72adea39.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Light and breezy floral dress perfect for summer.',
        specs: [
          'Polyester material',
          'Floral print',
          'A-line cut',
          'Available in sizes: S, M, L, XL',
          'Machine washable'
        ]
      },
      {
        id: 3,
        name: 'Training Sneakers',
        price: 2078.00,
        category: 'shoes',
        image: 'https://img.kwcdn.com/product/fancy/31bec45c-a8f7-489a-99ca-1396be5b8e1f.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Non-Slip Casual Athletic Footwear for Running & Everyday Use',
        specs: [
          'Breathable mesh',
          'Rubber sole',
          'Available in sizes: UK 6-9.5',
          'Color options: White, Black, Blue',
          'Easy slip-on design'
        ]
      },
      {
        id: 4,
        name: 'Crystal Necklace Set',
        price: 520.00,
        category: 'jewelry',
        image: 'https://img.kwcdn.com/product/fancy/db9abd55-1e4b-4c4a-8784-47422d3e5f95.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Elegant crystal necklace set with matching earrings.',
        specs: [
          'Crystal stones',
          'Alloy material',
          'Matching earrings included',
          'Gift box included',
          'Length: 45cm'
        ]
      },
      {
        id: 5,
        name: 'Digital Watch',
        price: 1995.00,
        category: 'watches',
        image: 'https://img.kwcdn.com/product/fancy/29819157-8166-4bff-8a56-b7a0ce56bd10.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Stylish digital watch with multiple functions.',
        specs: [
          'Digital display',
          'Water resistant',
          'Stopwatch function',
          'Alarm function',
          'LED backlight'
        ]
      },
      {
        id: 6,
        name: 'Leather Wallet',
        price: 2493.00,
        category: 'accessories',
        image: 'https://img.kwcdn.com/product/fancy/9a24f837-e076-4a92-96b2-d343941a61e0.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Classic leather wallet with multiple card slots.',
        specs: [
          'PU leather',
          'Multiple card slots',
          'Coin pocket',
          'ID window',
          'Dimensions: 10x9 cm'
        ]
      },
      {
        id: 7,
        name: 'Sunglasses',
        price: 720.00,
        category: 'accessories',
        image: 'https://img.kwcdn.com/product/fancy/52365074-c5cd-4a18-a372-c1836df023b6.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Fashionable sunglasses with UV protection.',
        specs: [
          'UV400 protection',
          'Metal frame',
          'Case included',
          'Multiple color options',
          'One year warranty'
        ]
      },
      {
        id: 8,
        name: 'Backpack',
        price: 4281.00,
        category: 'bags',
        image: 'https://img.kwcdn.com/product/fancy/9bae0aa3-5fe0-4dde-9a6c-66d408cb9b4b.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Spacious backpack with laptop compartment.',
        specs: [
          'Water resistant',
          'Laptop compartment',
          'Multiple pockets',
          'Adjustable straps',
          'Capacity: 20L'
        ]
      },
      {
        id: 9,
        name: 'Hair Accessories Set',
        price: 794.00,
        category: 'accessories',
        image: 'https://img.kwcdn.com/product/fancy/2211b062-f27f-48cd-bfaf-ce1890174c27.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Set of fashionable hair accessories.',
        specs: [
          'Multiple pieces',
          'Various styles',
          'Non-slip design',
          'Gift box included',
          'Suitable for all hair types'
        ]
      },
      {
        id: 10,
        name: 'Summer T-Shirt',
        price: 1051.00,
        category: 'clothing',
        image: 'https://img.kwcdn.com/product/fancy/98bc7488-5cff-4307-88bf-160ddb2cd421.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Comfortable cotton t-shirt with trendy design.',
        specs: [
          '100% cotton',
          'Breathable fabric',
          'Available in sizes: S, M, L, XL',
          'Machine washable',
          'Multiple color options'
        ]
      },
      {
        id: 11,
        name: 'Sports Shoes',
        price: 3999.00,
        category: 'shoes',
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/14673772a47313d3fd09461953dd0aa9.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Professional sports shoes for running and training.',
        specs: [
          'Breathable mesh',
          'Cushioned sole',
          'Anti-slip design',
          'Available in sizes: 7-12',
          'Color options: Black, White, Red'
        ]
      },
      {
        id: 12,
        name: 'Fashion Bracelet Set',
        price: 999.00,
        category: 'jewelry',
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/515c28d5f5368ac8dc58a1231f2de2a7.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Set of trendy bracelets with various styles.',
        specs: [
          'Multiple pieces',
          'Adjustable size',
          'Alloy material',
          'Gift box included',
          'Mix of styles'
        ]
      },
      {
        id: 13,
        name: 'Denim Jeans',
        price: 3599.00,
        category: 'clothing',
        image: 'https://img.kwcdn.com/product/fancy/f9ca0ded-e6da-4089-bc37-7a4dcf11404c.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Classic fit denim jeans with comfortable stretch.',
        specs: [
          'Stretch denim',
          'Classic fit',
          'Available in sizes: 28-36',
          'Machine washable',
          'Color options: Blue, Black'
        ]
      },
      {
        id: 14,
        name: 'Travel Duffel Bag',
        price: 2099.00,
        category: 'bags',
        image: 'https://img.kwcdn.com/product/open/2024-10-07/1728326023663-3bc0ebcfae5247cfb3d8545d81ce0d84-goods.jpeg?imageView2/2/w/800/q/70/format/webp',
        description: 'Spacious duffel bag perfect for travel.',
        specs: [
          'Water resistant',
          'Multiple compartments',
          'Shoulder strap',
          'Capacity: 40L',
          'Zipper closure'
        ]
      },
      {
        id: 15,
        name: 'Fashion Scarf',
        price: 899.00,
        category: 'accessories',
        image: 'https://img.kwcdn.com/product/fancy/cecb02bd-96c5-4593-bf37-f2db391b7128.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Stylish scarf with unique pattern.',
        specs: [
          'Polyester material',
          'Lightweight',
          'Dimensions: 180x30 cm',
          'Multiple color options',
          'Machine washable'
        ]
      },
      {
        id: 16,
        name: 'Smart Watch',
        price: 2999.00,
        category: 'watches',
        image: 'https://img.kwcdn.com/product/fancy/3eaf5c11-0aa3-429b-9523-462ef71f8380.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Smart watch with health tracking features.',
        specs: [
          'Heart rate monitoring',
          'Step counting',
          'Sleep tracking',
          'Water resistant',
          'Bluetooth connectivity'
        ]
      },
      {
        id: 17,
        name: 'Kitchen Storage Set',
        price: 1099.00,
        category: 'home',
        image: 'https://img.kwcdn.com/product/open/23616306f1be4f21a828e9d44a3b7973-goods.jpeg?imageView2/2/w/800/q/70/format/webp',
        description: 'Set of kitchen storage containers with airtight lids.',
        specs: [
          'BPA free plastic',
          'Airtight lids',
          'Stackable design',
          'Multiple sizes',
          'Dishwasher safe'
        ]
      },
      {
        id: 18,
        name: 'Facial Cleanser',
        price: 599.00,
        category: 'beauty',
        image: 'https://img.kwcdn.com/product/fancy/8e01a897-db33-4e53-8289-825166d01e61.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Gentle facial cleanser for all skin types.',
        specs: [
          'pH balanced',
          'Non-drying formula',
          'Suitable for sensitive skin',
          '100ml volume',
          'Paraben free'
        ]
      },
      {
        id: 19,
        name: 'Board Game Set',
        price: 1899.00,
        category: 'toys',
        image: 'https://img.kwcdn.com/product/open/2024-06-14/1718354448062-37bb77746b574f51b073cae32677e2d4-goods.jpeg?imageView2/2/w/800/q/70/format/webp',
        description: 'Classic board games collection for family fun.',
        specs: [
          'Multiple games included',
          'Family friendly',
          'Ages 6+',
          '2-6 players',
          'Includes instructions'
        ]
      },
      {
        id: 20,
        name: 'Bedding Set',
        price: 4999.00,
        category: 'home',
        image: 'https://img.kwcdn.com/product/open/2024-04-26/1714096158973-aef9d5652951418b8f52c9fdd8b4226c-goods.jpeg?imageView2/2/w/800/q/70/format/webp',
        description: 'Complete bedding set with pillow cases and duvet cover.',
        specs: [
          '100% cotton',
          'Queen size',
          'Includes 4 pillow cases',
          'Machine washable',
          'Color options available'
        ]
      },
      {
        id: 21,
        name: 'Moisturizing Cream',
        price: 599.00,
        category: 'beauty',
        image: 'https://img.kwcdn.com/product/fancy/f463e77d-4dd5-4412-a58d-d506a0f9bec9.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Deep moisturizing cream for dry skin.',
        specs: [
          'Hydrating formula',
          'Non-greasy',
          '50ml volume',
          'Suitable for all skin types',
          'Dermatologically tested'
        ]
      },
      {
        id: 22,
        name: 'Remote Control Car',
        price: 4499.00,
        category: 'toys',
        image: 'https://img.kwcdn.com/product/fancy/cd59dfa5-8a9f-4757-8dc8-c89c1bf8b729.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'High-speed remote control car with LED lights.',
        specs: [
          '2.4GHz remote control',
          'LED headlights',
          'Rechargeable battery',
          'Speed control',
          'Ages 8+'
        ]
      },
      {
        id: 23,
        name: 'Coffee Maker',
        price: 1499.00,
        category: 'home',
        image: 'https://img.kwcdn.com/product/fancy/ba67d1aa-5237-4398-b5b2-a599543d1558.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Automatic coffee maker with timer function.',
        specs: [
          '12-cup capacity',
          'Programmable timer',
          'Keep warm function',
          'Auto shut-off',
          'Filter included'
        ]
      },
      {
        id: 24,
        name: 'Lipstick Set',
        price: 1499.00,
        category: 'beauty',
        image: 'https://img.kwcdn.com/product/fancy/4d0c5ef8-8520-45a8-97c5-c3278db9bfc5.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Set of 6 long-lasting lipsticks in different shades.',
        specs: [
          'Matte finish',
          'Long-lasting formula',
          '6 different shades',
          '3.5g each',
          'Cruelty free'
        ]
      },
      {
        id: 25,
        name: 'Building Blocks Set',
        price: 899.00,
        category: 'toys',
        image: 'https://img.kwcdn.com/product/fancy/d9ea86a7-8cb9-455e-830e-c8b84a2a9d09.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Educational building blocks for creative play.',
        specs: [
          '100 pieces',
          'Multiple colors',
          'Storage bag included',
          'Ages 3+',
          'Non-toxic materials'
        ]
      },
      {
        id: 26,
        name: 'Bath Towel Set',
        price: 1799.00,
        category: 'home',
        image: 'https://img.kwcdn.com/product/fancy/ff1cadc5-d224-4be5-8884-2c3997c7d6ff.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Set of 6 premium cotton bath towels.',
        specs: [
          '100% cotton',
          'Quick drying',
          'Absorbent',
          'Machine washable',
          'Color coordinated set'
        ]
      },
      {
        id: 27,
        name: 'Face Mask Set',
        price: 399.00,
        category: 'beauty',
        image: 'https://img.kwcdn.com/product/fancy/b8ba7f3d-9d89-48f9-8bfb-6ef7b200fcb0.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Set of 10 sheet masks for different skin concerns.',
        specs: [
          'Various types included',
          'Suitable for all skin types',
          '20ml each mask',
          'Easy to use',
          'Korean beauty formula'
        ]
      },
      {
        id: 28,
        name: 'Puzzle Set',
        price: 499.00,
        category: 'toys',
        image: 'https://img.kwcdn.com/product/fancy/90634b73-f3c3-4e9a-accc-35d70813cd48.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Set of 3 jigsaw puzzles with different difficulty levels.',
        specs: [
          '100, 500, and 1000 pieces',
          'High-quality cardboard',
          'Reference image included',
          'Ages 8+',
          'Storage box included'
        ]
      },
      {
        id: 29,
        name: 'Wall Clock',
        price: 499.00,
        category: 'home',
        image: 'https://img.kwcdn.com/product/open/5006ab6979ed4934bd9dfd9246c086f0-goods.jpeg?imageView2/2/w/800/q/70/format/webp',
        description: 'Modern wall clock with silent movement.',
        specs: [
          'Silent movement',
          'Battery operated',
          '30cm diameter',
          'Easy to read',
          'Modern design'
        ]
      },
      {
        id: 30,
        name: 'Nail Polish Set',
        price: 999.00,
        category: 'beauty',
        image: 'https://img.kwcdn.com/product/fancy/99d35055-86be-4f1a-b7c9-a560e5b61f6a.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Set of 6 trendy nail polish colors.',
        specs: [
          'Long-lasting formula',
          'Quick drying',
          '6 different colors',
          '8ml each',
          'Glossy finish'
        ]
      },
      {
        id: 31,
        name: 'Art Set',
        price: 2499.00,
        category: 'toys',
        image: 'https://img.kwcdn.com/product/fancy/079f2b8f-2a81-4daf-b301-3e542d91b76d.jpg?imageView2/2/w/800/q/70/format/webp',
        description: 'Complete art set for creative expression.',
        specs: [
          'Multiple mediums included',
          'Carrying case',
          'Ages 6+',
          'Non-toxic materials',
          'Instruction booklet included'
        ]
      }
    ],
    cart: [],
    categories: [
      { id: 'bags', name: 'Bags', count: 3, image: 'https://img.kwcdn.com/product/fancy/0f6d44dd-725e-4fc5-9d62-f87077d6f4b7.jpg?imageView2/2/w/800/q/70/format/webp' },
      { id: 'clothing', name: 'Clothing', count: 3, image: 'https://img.kwcdn.com/product/fancy/cb9be117-8110-420c-ae22-1f74d6fc227f.jpg?imageView2/2/w/800/q/70/format/webp' },
      { id: 'shoes', name: 'Shoes', count: 2, image: 'https://img.kwcdn.com/product/fancy/fa452b19-cd9b-42d3-a171-d9071d41874f.jpg?imageView2/2/w/800/q/70/format/webp' },
      { id: 'jewelry', name: 'Jewelry', count: 2, image: 'https://img.kwcdn.com/product/fancy/f8c70be4-7664-4263-9bd2-667490416712.jpg?imageView2/2/w/800/q/70/format/webp' },
      { id: 'watches', name: 'Watches', count: 2, image: 'https://img.kwcdn.com/product/fancy/3eaf5c11-0aa3-429b-9523-462ef71f8380.jpg?imageView2/2/w/800/q/70/format/webp' },
      { id: 'accessories', name: 'Accessories', count: 4, image: 'https://img.kwcdn.com/product/open/2024-10-01/1727771204553-0034f8747094495ab9f4d9604473e8d1-goods.jpeg?imageView2/2/w/800/q/70/format/webp' },
      { id: 'home', name: 'Home & Kitchen', count: 4, image: 'https://img.kwcdn.com/product/open/2024-09-06/1725632466670-58669be8e5d649ce9ff889b09fe6a98f-goods.jpeg?imageView2/2/w/800/q/70/format/webp' },
      { id: 'beauty', name: 'Beauty & Health', count: 4, image: 'https://img.kwcdn.com/product/fancy/16717288-5848-4688-9d26-7bc29dcf647f.jpg?imageView2/2/w/800/q/70/format/webp' },
      { id: 'toys', name: 'Toys & Games', count: 4, image: 'https://img.kwcdn.com/product/fancy/eb62f5ba-476d-4d99-8719-f6ca69b8c35d.jpg?imageView2/2/w/800/q/70/format/webp' }
    ]
  },
  getters: {
    cartItemCount: (state) => {
      return state.cart.length
    },
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === parseInt(id))
    },
    getProductsByCategory: (state) => (category) => {
      if (category === 'all') return state.products
      return state.products.filter(product => product.category === category)
    },
    getRelatedProducts: (state) => (currentProductId, category) => {
      return state.products
        .filter(product => product.category === category && product.id !== parseInt(currentProductId))
        .slice(0, 3)
    }
  },
  mutations: {
    ADD_TO_CART (state, { product, quantity }) {
      const existingItem = state.cart.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.cart.push({
          ...product,
          quantity
        })
      }
    },
    REMOVE_FROM_CART (state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    UPDATE_CART_QUANTITY (state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    CLEAR_CART (state) {
      state.cart = []
    }
  },
  actions: {
    addToCart ({ commit }, { product, quantity = 1 }) {
      commit('ADD_TO_CART', { product, quantity })
    },
    removeFromCart ({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    },
    updateCartQuantity ({ commit }, payload) {
      commit('UPDATE_CART_QUANTITY', payload)
    },
    clearCart ({ commit }) {
      commit('CLEAR_CART')
    }
  },
  modules: {
  }
})
