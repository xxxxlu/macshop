import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Apple iPhone 15 Pro Max',
        price: 399999.00,
        category: 'iphone',
        image: 'https://ext.same-assets.com/2269417689/180779727.jpeg',
        description: 'The Apple iPhone 15 Pro Max is the ultimate flagship smartphone, featuring an aerospace-grade Titanium design, a powerful A17 Pro chip, and a next-generation camera system.',
        specs: [
          '6.7-inch Super Retina XDR Display with ProMotion (120Hz refresh rate)',
          'Titanium Frame - Lighter, stronger, and more durable',
          'Action Button for customizable shortcuts',
          'A17 Pro Chip - The fastest mobile chip with a 6-core GPU for console-level gaming',
          '48MP Pro Camera System with enhanced low-light performance'
        ]
      },
      {
        id: 2,
        name: 'Apple iPhone 15 Pro',
        price: 285999.00,
        category: 'iphone',
        image: 'https://ext.same-assets.com/2269417689/180779727.jpeg',
        description: 'The Apple iPhone 15 Pro features an aerospace-grade Titanium design, a powerful A17 Pro chip, and a next-generation camera system.',
        specs: [
          '6.1-inch Super Retina XDR Display with ProMotion (120Hz refresh rate)',
          'Titanium Frame - Lighter, stronger, and more durable',
          'Action Button for customizable shortcuts',
          'A17 Pro Chip - The fastest mobile chip with a 6-core GPU for console-level gaming',
          '48MP Pro Camera System with enhanced low-light performance'
        ]
      },
      {
        id: 3,
        name: 'Apple iPhone 15 Plus',
        price: 334999.00,
        category: 'iphone',
        image: 'https://ext.same-assets.com/2269417689/560497268.webp',
        description: 'The Apple iPhone 15 Plus features an A16 Bionic chip and an advanced camera system in a larger form factor.',
        specs: [
          '6.7-inch Super Retina XDR Display',
          'A16 Bionic Chip',
          'Advanced dual-camera system',
          'All-day battery life',
          'Ceramic Shield front'
        ]
      },
      {
        id: 4,
        name: 'Apple iPhone 15',
        price: 204999.00,
        category: 'iphone',
        image: 'https://ext.same-assets.com/2269417689/180779727.jpeg',
        description: 'The Apple iPhone 15 features an A16 Bionic chip and an advanced camera system.',
        specs: [
          '6.1-inch Super Retina XDR Display',
          'A16 Bionic Chip',
          'Advanced dual-camera system',
          'All-day battery life',
          'Ceramic Shield front'
        ]
      },
      {
        id: 5,
        name: 'iPad Pro',
        price: 199999.00,
        category: 'ipad',
        image: 'https://ext.same-assets.com/2269417689/3118215300.webp',
        description: 'The ultimate iPad experience with the powerful M2 chip and Liquid Retina XDR display.',
        specs: [
          'M2 chip for next-level performance',
          'Liquid Retina XDR display',
          'Pro cameras with LiDAR Scanner',
          'All-day battery life',
          'Support for Apple Pencil and Magic Keyboard'
        ]
      },
      {
        id: 6,
        name: 'MacBook Pro',
        price: 299999.00,
        category: 'macbook',
        image: 'https://ext.same-assets.com/2269417689/329916720.jpeg',
        description: 'The most powerful MacBook Pro ever, with the lightning-fast M2 Pro or M2 Max chip.',
        specs: [
          'M2 Pro or M2 Max chip for breakthrough performance',
          'Stunning Liquid Retina XDR display',
          'Up to 22 hours of battery life',
          'Advanced camera and audio systems',
          'Extensive connectivity options'
        ]
      }
    ],
    cart: [],
    categories: [
      { id: 'accessories', name: 'Accessories', count: 10, image: 'https://ext.same-assets.com/2269417689/1449262981.jpeg' },
      { id: 'imac', name: 'iMac', count: 6, image: 'https://ext.same-assets.com/2269417689/241069140.jpeg' },
      { id: 'ipad', name: 'iPad', count: 6, image: 'https://ext.same-assets.com/2269417689/3118215300.webp' },
      { id: 'iphone', name: 'iPhone', count: 13, image: 'https://ext.same-assets.com/2269417689/4273938360.jpeg' },
      { id: 'macbook', name: 'Macbook', count: 6, image: 'https://ext.same-assets.com/2269417689/329916720.jpeg' }
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
