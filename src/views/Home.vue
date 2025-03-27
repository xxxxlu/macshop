<template>
  <div class="home">
    <!-- 轮播图 Hero Section -->
    <section class="hero">
      <div class="hero-slide current">
        <div class="container">
          <div class="hero-content">
            <h1>Powerful Performance for Creators</h1>
            <p>Unleash your creativity with the latest high-performance model, tailored for designers and professionals. With cutting-edge technology, seamless visuals, and powerful processing, bring your ideas to life like never before.</p>
            <router-link to="/shop" class="btn-primary">SEE MORE DETAILS</router-link>
          </div>
          <div class="hero-image">
            <img src="https://ext.same-assets.com/2269417689/414049359.png" alt="MacBook Pro">
          </div>
        </div>
      </div>
    </section>

    <!-- 分类 Section -->
    <section class="categories-section">
      <div class="container">
        <h2 class="section-title">Choose a category</h2>
        <div class="categories-grid">
          <div v-for="category in categories" :key="category.id" class="category-card">
            <router-link :to="`/shop?category=${category.id}`">
              <img :src="category.image" :alt="category.name" class="category-img">
              <h3 class="category-name">{{ category.name }} <span>({{ category.count }})</span></h3>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 促销产品 Section -->
    <section class="promo-section">
      <div class="container">
        <h2 class="section-title">Promoted products</h2>
        <div class="promo-content">
          <div class="monthly-specials">
            <h3>Monthly specials</h3>
            <div class="promo-products">
              <div class="promo-product" v-for="(product, index) in promoProducts" :key="index" >
                <div v-if="index < 2">
                  <img :src="product.image" :alt="product.name" class="promo-product-img">
                <h4>{{ product.name }}</h4>
                <p class="promo-price">Rs.{{ formatPrice(product.price) }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="black-friday">
            <h3>Black Friday Sale</h3>
            <h2>Up to <strong>50%</strong> OFF</h2>
            <p>Sale starts on Now</p>
            <router-link to="/shop" class="btn-primary">SEE ALL OFFERS</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 工作需求 Section -->
    <section class="work-section">
      <div class="container">
        <div class="work-content">
          <div class="work-image">
            <img src="https://elitemacstore.com/wp-content/uploads/2025/03/young-model-holding-silver-laptop-having-video-call.png" alt="Work needs">
          </div>
          <div class="work-text">
            <h4>ABOUT OUR SHOP</h4>
            <h2>Everything what you need for work</h2>
            <ul class="work-features">
              <li>
                <span class="feature-highlight">Premium Work Essentials</span>
                Boost productivity with top-quality products.
              </li>
              <li>
                <span class="feature-highlight">Effortless Shopping</span>
                Smooth browsing and fast checkout.
              </li>
              <li>
                <span class="feature-highlight">Trusted by Experts</span>
                Reliable solutions for all work needs.
              </li>
            </ul>
            <router-link to="/about" class="btn-primary">READ MORE</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 新产品 Section -->
    <section class="new-products-section">
      <div class="container">
        <h2 class="section-title">New products</h2>
        <div class="products-grid">
          <div v-for="product in newProducts" :key="product.id" class="product-card">
            <router-link :to="`/product/${product.id}`">
              <img :src="product.image" :alt="product.name" class="product-img">
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p class="product-price">Rs.{{ formatPrice(product.price) }}</p>
              </div>
            </router-link>
            <div class="product-actions">
              <button class="add-to-cart-btn" @click="addToCart(product)">
                <i class="fas fa-shopping-cart"></i>
              </button>
              <router-link :to="`/product/${product.id}`" class="view-details-btn">
                <i class="fas fa-eye"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  computed: {
    ...mapState(['categories', 'products']),
    newProducts () {
      return this.products.slice(0, 4)
    },
    promoProducts () {
      return this.products.filter(product => product.category === 'iphone').slice(0, 2)
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    formatPrice (price) {
      return price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    },
    addToCart (product) {
      this.$store.dispatch('addToCart', { product, quantity: 1 })
      alert(`${product.name} has been added to your cart!`)
    }
  }
}
</script>

<style scoped>
.home {
  padding-bottom: 3rem;
}

/* Hero Section */
.hero {
  background-color: var(--light-color);
  padding: 3rem 0;
  overflow: hidden;
}

.hero-slide {
  position: relative;
}

.hero-content {
  max-width: 500px;
}

.hero .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.hero p {
  margin-bottom: 2rem;
  color: #666;
  line-height: 1.6;
}

.hero-image {
  flex: 1;
  text-align: right;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
}

/* Categories Section */
.categories-section {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  color: var(--primary-color);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
  text-align: center;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-img {
  width: 100%;
  height: 160px;
  object-fit: contain;
  background-color: #f9f9f9;
  padding: 1rem;
}

.category-name {
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.category-name span {
  font-weight: normal;
  color: #666;
  font-size: 0.9rem;
}

/* Promo Section */
.promo-section {
  padding: 4rem 0;
  background-color: #f9f9f9;
}

.promo-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}

.monthly-specials, .black-friday {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  padding: 1.5rem;
}

.monthly-specials h3, .black-friday h3 {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.promo-products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.promo-product {
  text-align: center;
}

.promo-product-img {
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.promo-product h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.promo-price {
  font-weight: bold;
  color: var(--primary-color);
}

.black-friday {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--secondary-color);
  color: white;
}

.black-friday h2 {
  font-size: 2rem;
  margin: 1rem 0;
  color: white;
}

.black-friday p {
  margin-bottom: 1.5rem;
}

.black-friday .btn-primary {
  background-color: white;
  color: var(--primary-color);
}

.black-friday .btn-primary:hover {
  background-color: var(--primary-color);
  color: white;
}

/* Work Section */
.work-section {
  padding: 4rem 0;
  background-color: var(--secondary-color);
  color: white;
}

.work-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.work-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.work-text h4 {
  color: white;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.work-text h2 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: white;
}

.work-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.work-features li {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.feature-highlight {
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.work-text .btn-primary {
  background-color: white;
  color: var(--primary-color);
}

.work-text .btn-primary:hover {
  background-color: var(--primary-color);
  color: white;
}

/* New Products Section */
.new-products-section {
  padding: 4rem 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.product-img {
  width: 100%;
  height: 250px;
  object-fit: contain;
  background-color: #f9f9f9;
  padding: 1rem;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.product-price {
  font-weight: bold;
  color: var(--primary-color);
  font-size: 1.1rem;
}

.product-actions {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.3s ease;
}

.product-card:hover .product-actions {
  opacity: 1;
  transform: translateX(0);
}

.add-to-cart-btn, .view-details-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover, .view-details-btn:hover {
  background-color: var(--primary-color);
  color: white;
}

@media (max-width: 992px) {
  .hero .container {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-image {
    margin-top: 2rem;
  }

  .hero-image img {
    margin: 0 auto;
  }

  .promo-content {
    grid-template-columns: 1fr;
  }

  .work-content {
    grid-template-columns: 1fr;
  }

  .work-image {
    order: 2;
  }

  .work-text {
    order: 1;
  }
}

@media (max-width: 768px) {
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .promo-products {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .hero h1 {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .work-text h2 {
    font-size: 1.8rem;
  }
}
</style>
