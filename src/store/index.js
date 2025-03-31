import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Apple iPhone 15 Pro Max',
        price: 49999.00,
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
        price: 49999.00,
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
        price: 42999.00,
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
        price: 48999.00,
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
        price: 39999.00,
        category: 'ipad',
        image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-model-select-gallery-1-202405?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cXN0QTVTNDBtbGIzcy91THBPRThnNE5sSFgwakNWNmlhZ2d5NGpHdllWY09WV3R2ZHdZMXRzTjZIcWdMTlg4eUJQYkhSV3V1dC9oa0s5K3lqMGtUaFMvR01EVDlzK0hIS1J2bTdpY0pVeTF1Yy9kL1dQa3EzdWh4Nzk1ZnZTYWY&traceId=1',
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
        price: 49999.00,
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
      },
      {
        id: 7,
        name: 'Apple iPhone 16',
        price: 42999.00,
        category: 'iphone',
        image: 'https://ext.same-assets.com/2269417689/180779727.jpeg',
        description: 'The Apple iPhone 16 features the latest A18 chip, improved camera system, and enhanced battery life.',
        specs: [
          '6.1-inch Super Retina XDR Display',
          'A18 Bionic Chip',
          'Advanced dual-camera system with improved low-light performance',
          'All-day battery life',
          'Ceramic Shield front'
        ]
      },
      {
        id: 8,
        name: 'Apple iPhone 16 Pro',
        price: 48999.00,
        category: 'iphone',
        image: 'https://ext.same-assets.com/2269417689/180779727.jpeg',
        description: 'The Apple iPhone 16 Pro features a titanium design, A18 Pro chip, and a professional camera system.',
        specs: [
          '6.1-inch Super Retina XDR Display with ProMotion (120Hz refresh rate)',
          'Titanium Frame - Lighter, stronger, and more durable',
          'Action Button for customizable shortcuts',
          'A18 Pro Chip - The fastest mobile chip with enhanced GPU for gaming',
          '48MP Pro Camera System with enhanced low-light performance'
        ]
      },
      {
        id: 9,
        name: 'Apple iPhone 16 Pro Max',
        price: 49999.00,
        category: 'iphone',
        image: 'https://ext.same-assets.com/2269417689/180779727.jpeg',
        description: 'The Apple iPhone 16 Pro Max is the ultimate flagship smartphone with the largest display, A18 Pro chip, and advanced camera system.',
        specs: [
          '6.7-inch Super Retina XDR Display with ProMotion (120Hz refresh rate)',
          'Titanium Frame - Lighter, stronger, and more durable',
          'Action Button for customizable shortcuts',
          'A18 Pro Chip - The fastest mobile chip with enhanced GPU for gaming',
          '48MP Pro Camera System with enhanced low-light performance and 5x optical zoom'
        ]
      },
      {
        id: 10,
        name: 'iPad Air',
        price: 39999.00,
        category: 'ipad',
        image: 'https://ext.same-assets.com/2269417689/3118215300.webp',
        description: 'The iPad Air combines performance and versatility with the M2 chip in a thin and light design.',
        specs: [
          '10.9-inch Liquid Retina display',
          'M2 chip for powerful performance',
          'USB-C connector for charging and accessories',
          'Compatible with Apple Pencil and Magic Keyboard',
          'All-day battery life'
        ]
      },
      {
        id: 11,
        name: 'MacBook Air',
        price: 45999.00,
        category: 'macbook',
        image: 'https://ext.same-assets.com/2269417689/329916720.jpeg',
        description: 'The MacBook Air is Apples thinnest and lightest notebook, now with the powerful M2 chip.',
        specs: [
          'M2 chip for breakthrough performance',
          '13.6-inch Liquid Retina display',
          'Up to 18 hours of battery life',
          'Fanless design for silent operation',
          'Two Thunderbolt ports for connecting accessories'
        ]
      },
      {
        id: 12,
        name: 'Apple Pencil (USB-C)',
        price: 4599.00,
        category: 'accessories',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUWA3_AV1?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1695933856900',
        description: 'Apple Pencil (USB-C) is perfect for note-taking, drawing, annotating documents, keeping a journal, and more. It features pixel-perfect precision, ultra-low latency, and tilt sensing, so it feels as natural as a pencil.',
        specs: [
          'Length: 155 mm (6.10 in)',
          'Diameter: 8.9 mm (0.35 in)',
          'Weight: 20.5 g (0.72 oz)',
          'Connections： Bluetooth',
          'USB-C port'
        ]
      },
      {
        id: 13,
        name: 'Apple Magic Keyboard',
        price: 1999.00,
        category: 'accessories',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA7E4?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1723930332796',
        description: 'This Apple-designed case is thin, light and easy to hold, while showing off the beautiful looks of your iPhone 16 Pro and providing added protection.',
        specs: [
          'iPhone 16 Pro MagSafe Clear Case'
        ]
      },
      {
        id: 14,
        name: 'iPad Mini',
        price: 29999.00,
        category: 'ipad',
        image: 'https://ext.same-assets.com/2269417689/3118215300.webp',
        description: 'The iPad Mini features a compact 8.3-inch Liquid Retina display and the powerful A15 Bionic chip in a portable design.',
        specs: [
          '8.3-inch Liquid Retina display',
          'A15 Bionic chip for fast performance',
          'USB-C connector for charging and accessories',
          'Compatible with Apple Pencil (2nd generation)',
          'All-day battery life'
        ]
      },
      {
        id: 15,
        name: 'iMac 24-inch',
        price: 49999.00,
        category: 'imac',
        image: 'https://ext.same-assets.com/2269417689/241069140.jpeg',
        description: 'The 24-inch iMac features a stunning Retina display, M1 chip, and a remarkably thin design in a range of vibrant colors.',
        specs: [
          '24-inch 4.5K Retina display',
          'Apple M1 chip for powerful performance',
          '1080p FaceTime HD camera',
          'Six-speaker sound system',
          'Color-matched Magic Keyboard and Magic Mouse'
        ]
      },
      {
        id: 16,
        name: 'iMac 27-inch',
        price: 49999.00,
        category: 'imac',
        image: 'https://ext.same-assets.com/2269417689/241069140.jpeg',
        description: 'The 27-inch iMac features a stunning 5K Retina display, powerful processors, and advanced graphics in an all-in-one design.',
        specs: [
          '27-inch 5K Retina display',
          'Intel Core i7 processor',
          'AMD Radeon Pro graphics',
          'Nano-texture glass option',
          '1080p FaceTime HD camera'
        ]
      },
      {
        id: 17,
        name: 'MacBook Pro 16-inch',
        price: 50000.00,
        category: 'macbook',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spaceblack-gallery1-202410?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1729266976923',
        description: 'The 16-inch MacBook Pro features a stunning Liquid Retina XDR display, M2 Max chip, and exceptional battery life.',
        specs: [
          '16-inch Liquid Retina XDR display',
          'M2 Max chip for breakthrough performance',
          'Up to 32-core GPU',
          'Up to 96GB unified memory',
          'Up to 22 hours of battery life'
        ]
      },
      {
        id: 18,
        name: 'AirPods Pro',
        price: 9999.00,
        category: 'pods',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1724041669458',
        description: 'AirPods Pro feature Active Noise Cancellation, Transparency mode, and a customizable fit for all-day comfort.',
        specs: [
          'Active Noise Cancellation',
          'Transparency mode',
          'Adaptive EQ',
          'Spatial Audio with dynamic head tracking',
          'Sweat and water resistant'
        ]
      },
      {
        id: 19,
        name: 'AirPods Max',
        price: 19999.00,
        category: 'pods',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1725492700483',
        description: 'AirPods Max combine high-fidelity audio with Active Noise Cancellation and an exceptional design.',
        specs: [
          'Apple-designed dynamic driver',
          'Active Noise Cancellation',
          'Transparency mode',
          'Spatial Audio with dynamic head tracking',
          'Up to 20 hours of battery life'
        ]
      },
      {
        id: 20,
        name: 'Apple Watch Series 9',
        price: 19999.00,
        category: 'watch',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/s10-case-unselect-gallery-1-202503?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1739305300233',
        description: 'Apple Watch Series 9 features a stunning Always-On Retina display, powerful health features, and the S9 chip.',
        specs: [
          'Always-On Retina LTPO OLED display',
          'S9 chip with 64-bit dual-core processor',
          'Blood Oxygen sensor and ECG app',
          'Water resistant 50 meters',
          'Up to 18 hours of battery life'
        ]
      },
      {
        id: 21,
        name: 'Apple Watch Ultra 2',
        price: 29999.00,
        category: 'watch',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ultra-case-unselect-gallery-1-202409_GEO_CN?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1724871388564',
        description: 'Apple Watch Ultra 2 is the most rugged and capable Apple Watch, designed for endurance, exploration, and adventure.',
        specs: [
          '49mm titanium case',
          'Always-On Retina display with 3000 nits peak brightness',
          'Customizable Action button',
          'Water resistant to 100 meters',
          'Up to 36 hours of battery life'
        ]
      },
      {
        id: 22,
        name: 'iPad 10th Generation',
        price: 19999.00,
        category: 'ipad',
        image: 'https://ext.same-assets.com/2269417689/3118215300.webp',
        description: 'The iPad 10th generation features an all-screen design, A14 Bionic chip, and USB-C connectivity.',
        specs: [
          '10.9-inch Liquid Retina display',
          'A14 Bionic chip',
          'Landscape 12MP Ultra Wide front camera',
          'USB-C connector',
          'Compatible with Apple Pencil (1st generation)'
        ]
      },
      {
        id: 23,
        name: 'iPad Pro 12.9-inch',
        price: 39999.00,
        category: 'ipad',
        image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-model-select-gallery-1-202405?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cXN0QTVTNDBtbGIzcy91THBPRThnNE5sSFgwakNWNmlhZ2d5NGpHdllWY09WV3R2ZHdZMXRzTjZIcWdMTlg4eUJQYkhSV3V1dC9oa0s5K3lqMGtUaFMvR01EVDlzK0hIS1J2bTdpY0pVeTF1Yy9kL1dQa3EzdWh4Nzk1ZnZTYWY&traceId=1',
        description: 'The 12.9-inch iPad Pro features a stunning Liquid Retina XDR display, M2 chip, and advanced camera system.',
        specs: [
          '12.9-inch Liquid Retina XDR display',
          'M2 chip for next-level performance',
          'Pro cameras with LiDAR Scanner',
          'Thunderbolt / USB 4 port',
          'Support for Apple Pencil (2nd generation) and Magic Keyboard'
        ]
      },
      {
        id: 24,
        name: 'MacBook Pro 14-inch',
        price: 44999.00,
        category: 'macbook',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spaceblack-gallery1-202410?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1729266976923',
        description: 'The 14-inch MacBook Pro features a stunning Liquid Retina XDR display, M2 Pro or M2 Max chip, and exceptional battery life.',
        specs: [
          '14.2-inch Liquid Retina XDR display',
          'M2 Pro or M2 Max chip',
          'Up to 12-core CPU and 30-core GPU',
          'Up to 96GB unified memory',
          'Up to 18 hours of battery life'
        ]
      },
      {
        id: 26,
        name: 'HomePod mini',
        price: 5999.00,
        category: 'accessories',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/homepod-mini-202110-gallery-3?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1632998372000',
        description: 'HomePod mini delivers room-filling sound, an intelligent assistant, and smart home control in a compact design.',
        specs: [
          'Full-range driver and dual passive radiators',
          'Computational audio for real-time tuning',
          'Four-microphone design for far-field Siri',
          'Multiroom audio with AirPlay 2',
          'Thread mesh networking protocol'
        ]
      },
      {
        id: 27,
        name: 'Mac mini',
        price: 29999.00,
        category: 'imac',
        image: 'https://ext.same-assets.com/2269417689/241069140.jpeg',
        description: 'Mac mini now features the M2 or M2 Pro chip for increased performance in a compact design.',
        specs: [
          'M2 or M2 Pro chip',
          'Up to 24GB unified memory',
          'Up to 8TB SSD storage',
          'Extensive connectivity options',
          'macOS Ventura'
        ]
      },
      {
        id: 28,
        name: 'Mac Studio',
        price: 49999.00,
        category: 'imac',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-mac-studio-display-tilt-202206?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1736273106467',
        description: 'Mac Studio delivers extraordinary performance and extensive connectivity in a compact design.',
        specs: [
          'M2 Max or M2 Ultra chip',
          'Up to 192GB unified memory',
          'Up to 8TB SSD storage',
          'Extensive connectivity with Thunderbolt 4 ports',
          'Advanced thermal system'
        ]
      },
      {
        id: 29,
        name: 'Magic Mouse',
        price: 2599.00,
        category: 'accessories',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXK53?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1730508286345',
        description: 'Magic Mouse features a Multi-Touch surface with gesture support and a rechargeable battery.',
        specs: [
          'Multi-Touch surface',
          'Bluetooth wireless connectivity',
          'Rechargeable battery',
          'Lightning port for charging',
          'Optimized foot design for smooth movement'
        ]
      },
      {
        id: 30,
        name: 'Magic Trackpad',
        price: 2999.00,
        category: 'accessories',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXCL3CH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1729718319027',
        description: 'Magic Trackpad features a large Multi-Touch surface with Force Touch technology and a rechargeable battery.',
        specs: [
          'Large Multi-Touch surface',
          'Force Touch technology',
          'Bluetooth wireless connectivity',
          'Rechargeable battery',
          'Lightning port for charging'
        ]
      },
      {
        id: 31,
        name: 'AirTag',
        price: 499.00,
        category: 'accessories',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airtag-gallery3-202409?wid=4056&hei=2400&fmt=jpeg&qlt=90&.v=1723456837958',
        description: 'AirTag is a small accessory that helps keep track of and find your items using Apples Find My network.',
        specs: [
          'Precision Finding with U1 chip',
          'Built-in speaker',
          'Replaceable battery',
          'Water and dust resistant',
          'One-tap setup'
        ]
      },
      {
        id: 32,
        name: 'Pro Display XDR',
        price: 49999.00,
        category: 'display',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-mac-studio-display-tilt-202206?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1736273106467',
        description: 'Pro Display XDR features a 32-inch Retina 6K display with Extreme Dynamic Range and precise calibration.',
        specs: [
          '32-inch Retina 6K display',
          'Extreme Dynamic Range (XDR)',
          '1,000,000:1 contrast ratio',
          'P3 wide color gamut',
          'Reference modes for professional workflows'
        ]
      },
      {
        id: 33,
        name: 'Studio Display',
        price: 39999.00,
        category: 'display',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-mac-studio-display-tilt-202206?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1736273106467',
        description: 'Studio Display features a 27-inch 5K Retina display, 12MP Ultra Wide camera, and studio-quality mics and speakers.',
        specs: [
          '27-inch 5K Retina display',
          '12MP Ultra Wide camera with Center Stage',
          'Studio-quality three-microphone array',
          'Six-speaker sound system with Spatial Audio',
          'One Thunderbolt 3 port and three USB-C ports'
        ]
      }
    ],
    cart: [],
    categories: [
      { id: 'accessories', name: 'Accessories', count: 6, image: 'https://ext.same-assets.com/2269417689/1449262981.jpeg' },
      { id: 'imac', name: 'iMac', count: 4, image: 'https://ext.same-assets.com/2269417689/241069140.jpeg' },
      { id: 'ipad', name: 'iPad', count: 5, image: 'https://ext.same-assets.com/2269417689/3118215300.webp' },
      { id: 'iphone', name: 'iPhone', count: 7, image: 'https://ext.same-assets.com/2269417689/4273938360.jpeg' },
      { id: 'macbook', name: 'Macbook', count: 4, image: 'https://ext.same-assets.com/2269417689/329916720.jpeg' },
      { id: 'watch', name: 'watch', count: 2, image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ultra-case-unselect-gallery-1-202409_GEO_CN?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1724871388564' },
      { id: 'air pods', name: 'pods', count: 2, image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1724041669458' },
      { id: 'display', name: 'display', count: 2, image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-mac-studio-display-tilt-202206?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1736273106467' }
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
