<template>
  <div class="product-detail" v-if="product">
    <div class="container">
      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span class="separator">/</span>
        <router-link :to="`/shop?category=${product.category}`">{{ categoryName }}</router-link>
        <span class="separator">/</span>
        <span class="current">{{ product.name }}</span>
      </div>

      <!-- 产品详情主区域 -->
      <div class="product-detail-container">
        <!-- 产品图片 -->
        <div class="product-images">
          <div class="main-image">
            <img :src="product.image" :alt="product.name">
          </div>
        </div>

        <!-- 产品信息 -->
        <div class="product-info">
          <h1 class="product-title">{{ product.name }}</h1>
          <p class="product-price">Rs.{{ formatPrice(product.price) }}</p>

          <div class="product-description">
            <p>{{ product.description }}</p>
          </div>

          <div class="product-quantity">
            <button class="quantity-btn" @click="decreaseQuantity">-</button>
            <input type="number" v-model.number="quantity" min="1" class="quantity-input">
            <button class="quantity-btn" @click="increaseQuantity">+</button>
          </div>

          <button class="add-to-cart-btn" @click="addToCartAndAlert">
            <i class="fas fa-shopping-cart"></i> Add to cart
          </button>

          <div class="product-meta">
            <p><strong>Category:</strong> <router-link :to="`/shop?category=${product.category}`">{{ categoryName }}</router-link></p>
          </div>

          <div class="social-share">
            <span>Share:</span>
            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>

      <!-- 产品详情选项卡 -->
      <div class="product-tabs">
        <div class="tabs-header">
          <div
            class="tab-item"
            :class="{ active: activeTab === 'description' }"
            @click="activeTab = 'description'"
          >
            Description
          </div>
          <div
            class="tab-item"
            :class="{ active: activeTab === 'specifications' }"
            @click="activeTab = 'specifications'"
          >
            Specifications
          </div>
          <div
            class="tab-item"
            :class="{ active: activeTab === 'reviews' }"
            @click="activeTab = 'reviews'"
          >
            Reviews (0)
          </div>
        </div>

        <div class="tabs-content">
          <div class="tab-content" v-show="activeTab === 'description'">
            <p>{{ product.description }}</p>
          </div>

          <div class="tab-content" v-show="activeTab === 'specifications'">
            <ul class="specs-list">
              <li v-for="(spec, index) in product.specs" :key="index">{{ spec }}</li>
            </ul>
          </div>

          <div class="tab-content" v-show="activeTab === 'reviews'">
            <p>No reviews yet.</p>
          </div>
        </div>
      </div>

      <!-- 相关产品 -->
      <div class="related-products" v-if="relatedProducts.length > 0">
        <h2 class="section-title">Related products</h2>

        <div class="products-grid">
          <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="product-card">
            <router-link :to="`/product/${relatedProduct.id}`">
              <img :src="relatedProduct.image" :alt="relatedProduct.name" class="product-img">
              <div class="product-card-info">
                <h3>{{ relatedProduct.name }}</h3>
                <p class="product-card-price">Rs.{{ formatPrice(relatedProduct.price) }}</p>
              </div>
            </router-link>
            <div class="product-card-actions">
              <button class="product-card-btn" @click="addRelatedToCart(relatedProduct)">
                <i class="fas fa-shopping-cart"></i>
              </button>
              <router-link :to="`/product/${relatedProduct.id}`" class="product-card-btn">
                <i class="fas fa-eye"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductDetail',
  data () {
    return {
      quantity: 1,
      activeTab: 'description'
    }
  },
  computed: {
    ...mapGetters(['getProductById', 'getRelatedProducts']),
    product () {
      return this.getProductById(this.$route.params.id)
    },
    relatedProducts () {
      return this.getRelatedProducts(this.$route.params.id, this.product.category)
    },
    categoryName () {
      const categories = {
        iphone: 'iPhone',
        ipad: 'iPad',
        macbook: 'MacBook',
        imac: 'iMac',
        accessories: 'Accessories'
      }
      return categories[this.product.category] || this.product.category
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    increaseQuantity () {
      this.quantity++
    },
    decreaseQuantity () {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    addToCartAndAlert () {
      this.addToCart({ product: this.product, quantity: this.quantity })
      alert(`${this.quantity} ${this.product.name}(s) have been added to your cart!`)
    },
    addRelatedToCart (product) {
      this.addToCart({ product, quantity: 1 })
      alert(`${product.name} has been added to your cart!`)
    },
    formatPrice (price) {
      return price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }
  },
  watch: {
    '$route.params.id' () {
      this.quantity = 1
      this.activeTab = 'description'
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.product-detail {
  padding: 3rem 0;
}

/* 面包屑导航 */
.breadcrumb {
  margin-bottom: 2rem;
  color: #666;
  font-size: 0.9rem;
}

.breadcrumb a {
  color: var(--primary-color);
}

.separator {
  margin: 0 8px;
}

.current {
  color: #666;
}

/* 产品详情主区域 */
.product-detail-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

/* 产品图片 */
.product-images {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.main-image {
  position: relative;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 400px;
}

/* 产品信息 */
.product-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.product-description {
  margin-bottom: 1.5rem;
  color: #666;
  line-height: 1.6;
}

.product-quantity {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.quantity-btn {
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quantity-btn:hover {
  background-color: #e0e0e0;
}

.quantity-input {
  width: 60px;
  height: 40px;
  text-align: center;
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
  font-size: 1rem;
}

.quantity-input::-webkit-inner-spin-button,
.quantity-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.add-to-cart-btn {
  background-color: var(--primary-color);
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
}

.add-to-cart-btn i {
  margin-right: 8px;
}

.add-to-cart-btn:hover {
  background-color: #0c1337;
}

.product-meta {
  margin-bottom: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  color: #666;
}

.social-share {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: var(--primary-color);
  color: white;
}

/* 产品详情选项卡 */
.product-tabs {
  margin-bottom: 3rem;
}

.tabs-header {
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.tab-item {
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  color: #666;
  transition: color 0.3s ease;
  border-bottom: 2px solid transparent;
}

.tab-item.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}

.tab-content {
  line-height: 1.6;
  color: #666;
}

.specs-list {
  padding-left: 1.5rem;
  list-style-type: disc;
}

.specs-list li {
  margin-bottom: 0.5rem;
}

/* 相关产品 */
.related-products {
  margin-top: 3rem;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
  height: 200px;
  object-fit: contain;
  background-color: #f9f9f9;
  padding: 1rem;
}

.product-card-info {
  padding: 1.5rem;
}

.product-card-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.product-card-price {
  font-weight: bold;
  color: var(--primary-color);
  font-size: 1.1rem;
}

.product-card-actions {
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

.product-card:hover .product-card-actions {
  opacity: 1;
  transform: translateX(0);
}

.product-card-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: white;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.product-card-btn:hover {
  background-color: var(--primary-color);
  color: white;
}

@media (max-width: 992px) {
  .product-detail-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .main-image {
    height: 350px;
  }
}

@media (max-width: 576px) {
  .main-image {
    height: 280px;
  }

  .product-title {
    font-size: 1.8rem;
  }

  .tabs-header {
    flex-direction: column;
  }

  .tab-item {
    padding: 0.8rem 0;
    border-bottom: 1px solid #eee;
  }

  .tab-item.active {
    border-bottom-color: #eee;
    color: var(--primary-color);
  }
}
</style>
