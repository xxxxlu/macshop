<template>
  <div class="shop-page">
    <div class="container">
      <h1 class="page-title">Our products</h1>

      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span class="separator">/</span>
        <span v-if="selectedCategory !== 'all'">
          <router-link to="/shop">Shop</router-link>
          <span class="separator">/</span>
          <span class="current">{{ categoryName }}</span>
        </span>
        <span v-else class="current">Shop</span>
      </div>

      <!-- 筛选和排序 -->
      <div class="shop-filters">
        <div class="category-filter">
          <label for="category">Category:</label>
          <select id="category" v-model="selectedCategory" @change="filterProducts">
            <option value="all">All Categories</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="sort-filter">
          <label for="sort">Sort by:</label>
          <select id="sort" v-model="sortBy" @change="filterProducts">
            <option value="default">Default sorting</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>

      <!-- 搜索结果提示 -->
      <div class="search-result-info" v-if="searchQuery">
        <p>Search results for: <strong>{{ searchQuery }}</strong></p>
        <button class="clear-search-btn" @click="clearSearch">Clear search</button>
      </div>

      <!-- 产品列表 -->
      <div v-if="filteredProducts.length > 0" class="products-grid">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
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

      <!-- 没有产品时显示 -->
      <div v-else class="no-products">
        <p>No products found. Try a different search term or category.</p>
        <button class="clear-filters-btn" @click="resetFilters">Clear filters</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Shop',
  data () {
    return {
      selectedCategory: 'all',
      sortBy: 'default',
      searchQuery: ''
    }
  },
  computed: {
    ...mapState(['products', 'categories']),
    ...mapGetters(['getProductsByCategory']),
    categoryName () {
      if (this.selectedCategory === 'all') return 'All Products'
      const category = this.categories.find(cat => cat.id === this.selectedCategory)
      return category ? category.name : 'Products'
    },
    filteredProducts () {
      let filtered = this.selectedCategory === 'all'
        ? [...this.products]
        : this.getProductsByCategory(this.selectedCategory)

      // 应用搜索过滤
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        )
      }

      // 应用排序
      return this.sortProducts(filtered)
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    addToCartHandler (product) {
      this.addToCart({ product, quantity: 1 })
      alert(`${product.name} has been added to your cart!`)
    },
    formatPrice (price) {
      return price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    },
    filterProducts () {
      // 更新 URL 查询参数
      this.$router.push({
        path: '/shop',
        query: {
          ...this.$route.query,
          category: this.selectedCategory !== 'all' ? this.selectedCategory : undefined,
          sort: this.sortBy !== 'default' ? this.sortBy : undefined
        }
      })
    },
    sortProducts (products) {
      const sorted = [...products]

      switch (this.sortBy) {
        case 'price-low':
          return sorted.sort((a, b) => a.price - b.price)
        case 'price-high':
          return sorted.sort((a, b) => b.price - a.price)
        case 'name-asc':
          return sorted.sort((a, b) => a.name.localeCompare(b.name))
        case 'name-desc':
          return sorted.sort((a, b) => b.name.localeCompare(a.name))
        default:
          return sorted
      }
    },
    clearSearch () {
      this.searchQuery = ''
      this.$router.push({
        path: '/shop',
        query: {
          ...this.$route.query,
          search: undefined
        }
      })
    },
    resetFilters () {
      this.selectedCategory = 'all'
      this.sortBy = 'default'
      this.searchQuery = ''
      this.$router.push('/shop')
    }
  },
  created () {
    // 从 URL 查询参数读取筛选条件
    const { category, sort, search } = this.$route.query

    if (category) {
      this.selectedCategory = category
    }

    if (sort) {
      this.sortBy = sort
    }

    if (search) {
      this.searchQuery = search
    }
  }
}
</script>

<style scoped>
.shop-page {
  padding: 3rem 0;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
  text-align: center;
}

/* 面包屑导航 */
.breadcrumb {
  margin-bottom: 2rem;
  color: #666;
  font-size: 0.9rem;
  text-align: center;
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

/* 筛选和排序 */
.shop-filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
}

.category-filter, .sort-filter {
  display: flex;
  align-items: center;
}

.category-filter label, .sort-filter label {
  margin-right: 0.5rem;
  font-weight: 500;
}

.category-filter select, .sort-filter select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
}

/* 搜索结果提示 */
.search-result-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f0f7ff;
  border-radius: 10px;
  color: #0066cc;
}

.clear-search-btn {
  padding: 5px 10px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.clear-search-btn:hover {
  background-color: #0056b3;
}

/* 产品列表 */
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
  border: none;
  cursor: pointer;
}

.add-to-cart-btn:hover, .view-details-btn:hover {
  background-color: var(--primary-color);
  color: white;
}

/* 没有产品时显示 */
.no-products {
  text-align: center;
  padding: 3rem 0;
}

.no-products p {
  margin-bottom: 1.5rem;
  color: #666;
}

.clear-filters-btn {
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.clear-filters-btn:hover {
  background-color: #0c1337;
}

@media (max-width: 768px) {
  .shop-filters {
    flex-direction: column;
    gap: 1rem;
  }

  .category-filter, .sort-filter {
    width: 100%;
  }
}
</style>
