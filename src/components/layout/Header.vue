<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/">
            <img src="https://ext.same-assets.com/2269417689/940586143.jpeg" alt="Elite Mac Store" />
          </router-link>
        </div>

        <!-- 主菜单 -->
        <nav class="main-nav">
          <ul class="nav-list">
            <li><router-link to="/">HOME</router-link></li>
            <li class="has-dropdown">
              <router-link to="/shop">SHOP</router-link>
              <ul class="dropdown">
                <li><router-link to="/shop?category=iphone">iPhone</router-link></li>
                <li><router-link to="/shop?category=ipad">iPad</router-link></li>
                <li><router-link to="/shop?category=macbook">MacBook</router-link></li>
                <li><router-link to="/shop?category=imac">iMac</router-link></li>
                <li><router-link to="/shop?category=accessories">Accessories</router-link></li>
              </ul>
            </li>
            <li><router-link to="/about">ABOUT US</router-link></li>
            <li><router-link to="/contact">CONTACT US</router-link></li>
          </ul>
        </nav>

        <!-- 右侧操作栏 -->
        <div class="header-actions">
          <div class="cart-icon" @click="$router.push('/cart')">
            <i class="fas fa-shopping-cart"></i>
            <span class="cart-count">{{ cartItemCount }}</span>
            <span class="cart-total">Rs.{{ formatPrice(cartTotal) }}</span>
          </div>
          <div class="search-icon" @click="toggleSearch">
            <i class="fas fa-search"></i>
          </div>
          <div class="account-btn">
            <router-link to="/account" class="btn-account">MY ACCOUNT <i class="fas fa-chevron-right"></i></router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 搜索框 -->
    <div class="search-container" v-if="isSearchOpen">
      <div class="container">
        <div class="search-wrapper">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Enter your search" v-model="searchQuery" @keyup.enter="search">
          <i class="fas fa-times" @click="toggleSearch"></i>
        </div>
      </div>
    </div>

    <!-- 移动端菜单按钮 -->
    <div class="mobile-menu-toggle" @click="toggleMobileMenu">
      <i class="fas fa-bars"></i>
    </div>

    <!-- 移动端侧边栏菜单 -->
    <div class="mobile-sidebar" :class="{ 'active': isMobileMenuOpen }">
      <div class="sidebar-header">
        <i class="fas fa-times" @click="toggleMobileMenu"></i>
      </div>
      <ul class="mobile-nav-list">
        <li><router-link to="/" @click="toggleMobileMenu">HOME</router-link></li>
        <li>
          <router-link to="/shop" @click="toggleMobileMenu">SHOP</router-link>
          <ul>
            <li><router-link to="/shop?category=iphone" @click="toggleMobileMenu">iPhone</router-link></li>
            <li><router-link to="/shop?category=ipad" @click="toggleMobileMenu">iPad</router-link></li>
            <li><router-link to="/shop?category=macbook" @click="toggleMobileMenu">MacBook</router-link></li>
            <li><router-link to="/shop?category=imac" @click="toggleMobileMenu">iMac</router-link></li>
            <li><router-link to="/shop?category=accessories" @click="toggleMobileMenu">Accessories</router-link></li>
          </ul>
        </li>
        <li><router-link to="/about" @click="toggleMobileMenu">ABOUT US</router-link></li>
        <li><router-link to="/contact" @click="toggleMobileMenu">CONTACT US</router-link></li>
        <li><router-link to="/account" @click="toggleMobileMenu">MY ACCOUNT</router-link></li>
      </ul>
      <div class="mobile-sidebar-actions">
        <div class="cart-icon" @click="$router.push('/cart'); toggleMobileMenu()">
          <i class="fas fa-shopping-cart"></i>
          <span class="cart-count">{{ cartItemCount }}</span>
          <span class="cart-total">Rs.{{ formatPrice(cartTotal) }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  data () {
    return {
      isSearchOpen: false,
      isMobileMenuOpen: false,
      searchQuery: ''
    }
  },
  computed: {
    ...mapGetters(['cartItemCount', 'cartTotal'])
  },
  methods: {
    toggleSearch () {
      this.isSearchOpen = !this.isSearchOpen
    },
    toggleMobileMenu () {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
    search () {
      if (this.searchQuery.trim()) {
        this.$router.push(`/shop?search=${this.searchQuery}`)
        this.searchQuery = ''
        this.isSearchOpen = false
      }
    },
    formatPrice (price) {
      return price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.logo img {
  height: 60px;
  object-fit: contain;
}

.main-nav {
  display: flex;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li {
  margin: 0 15px;
  position: relative;
}

.nav-list a {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: var(--dark-color);
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.has-dropdown:hover .dropdown {
  display: block;
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px 0;
  min-width: 180px;
  z-index: 1000;
}

.dropdown li {
  margin: 0;
  padding: 8px 15px;
}

.dropdown a {
  color: var(--text-color);
  font-weight: 400;
  text-transform: none;
  font-size: 0.9rem;
  display: block;
}

.dropdown a:hover {
  color: var(--accent-color);
}

.header-actions {
  display: flex;
  align-items: center;
}

.cart-icon, .search-icon {
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  font-size: 1.1rem;
  color: var(--dark-color);
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--primary-color);
  color: white;
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-total {
  margin-left: 8px;
  font-weight: 500;
}

.btn-account {
  background-color: var(--primary-color);
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.9rem;
}

.btn-account i {
  margin-left: 5px;
  font-size: 0.8rem;
}

.search-container {
  background: var(--light-color);
  padding: 15px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.search-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.search-wrapper i {
  position: absolute;
  color: #999;
}

.search-wrapper i.fa-search {
  left: 15px;
}

.search-wrapper i.fa-times {
  right: 15px;
  cursor: pointer;
}

.search-wrapper input {
  width: 100%;
  padding: 10px 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
}

.mobile-menu-toggle, .mobile-sidebar {
  display: none;
}

@media (max-width: 992px) {
  .main-nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 15px;
  }

  .mobile-sidebar {
    display: block;
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100vh;
    background: white;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    z-index: 1001;
    overflow-y: auto;
  }

  .mobile-sidebar.active {
    right: 0;
  }

  .sidebar-header {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
  }

  .sidebar-header i {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .mobile-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mobile-nav-list li {
    border-bottom: 1px solid #eee;
  }

  .mobile-nav-list a {
    padding: 15px 20px;
    display: block;
    color: var(--dark-color);
    font-weight: 500;
  }

  .mobile-nav-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background: #f9f9f9;
  }

  .mobile-nav-list ul li a {
    padding-left: 40px;
    font-weight: 400;
  }

  .mobile-sidebar-actions {
    padding: 20px;
    border-top: 1px solid #eee;
    margin-top: 20px;
  }

  .header-content {
    justify-content: flex-start;
  }

  .logo {
    flex-grow: 1;
    text-align: center;
  }

  .account-btn {
    display: none;
  }
}

@media (max-width: 576px) {
  .logo img {
    height: 50px;
  }

  .cart-total {
    display: none;
  }
}
</style>
