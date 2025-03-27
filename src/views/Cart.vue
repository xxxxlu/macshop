<template>
  <div class="cart-page">
    <div class="container">
      <h1 class="page-title">Cart</h1>

      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span class="separator">/</span>
        <span class="current">Cart</span>
      </div>

      <!-- 结账步骤导航 -->
      <div class="checkout-steps">
        <div class="step active">
          <span class="step-number">1</span>
          <span class="step-name">Cart</span>
        </div>
        <div class="step">
          <span class="step-number">2</span>
          <span class="step-name">Checkout</span>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <span class="step-name">Order</span>
        </div>
      </div>

      <!-- 购物车内容 -->
      <div class="cart-content" v-if="cart.length > 0">
        <div class="cart-table-container">
          <table class="cart-table">
            <thead>
              <tr>
                <th class="product-col">Product</th>
                <th class="price-col">Price</th>
                <th class="quantity-col">Quantity</th>
                <th class="subtotal-col">Subtotal</th>
                <th class="remove-col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id">
                <td class="product-col">
                  <div class="product-info">
                    <div class="product-image">
                      <router-link :to="`/product/${item.id}`">
                        <img :src="item.image" :alt="item.name">
                      </router-link>
                    </div>
                    <div class="product-name">
                      <router-link :to="`/product/${item.id}`">{{ item.name }}</router-link>
                    </div>
                  </div>
                </td>
                <td class="price-col">Rs.{{ formatPrice(item.price) }}</td>
                <td class="quantity-col">
                  <div class="quantity-control">
                    <button class="quantity-btn" @click="updateQuantity(item.id, item.quantity - 1)" :disabled="item.quantity <= 1">-</button>
                    <input type="number" min="1" v-model.number="item.quantity" @change="updateQuantity(item.id, item.quantity)">
                    <button class="quantity-btn" @click="updateQuantity(item.id, item.quantity + 1)">+</button>
                  </div>
                </td>
                <td class="subtotal-col">Rs.{{ formatPrice(item.price * item.quantity) }}</td>
                <td class="remove-col">
                  <button class="remove-btn" @click="removeFromCart(item.id)">
                    <i class="fas fa-times"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 购物车总结 -->
        <div class="cart-summary">
          <h2 class="summary-title">Cart totals</h2>
          <div class="summary-row">
            <span class="summary-label">Subtotal</span>
            <span class="summary-value">Rs.{{ formatPrice(cartTotal) }}</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">Shipping</span>
            <span class="summary-value">Free</span>
          </div>
          <div class="summary-row total">
            <span class="summary-label">Total</span>
            <span class="summary-value">Rs.{{ formatPrice(cartTotal) }}</span>
          </div>
          <router-link to="/checkout" class="proceed-btn">
            Proceed to checkout
          </router-link>
        </div>
      </div>

      <!-- 空购物车 -->
      <div class="empty-cart" v-else>
        <div class="empty-cart-message">
          <i class="fas fa-shopping-cart"></i>
          <h2>Your cart is currently empty</h2>
          <p>Before proceeding to checkout, you must add some products to your shopping cart.</p>
          <router-link to="/shop" class="return-to-shop-btn">
            Return to shop
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cart',
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotal'])
  },
  methods: {
    ...mapActions(['removeFromCart', 'updateCartQuantity']),
    updateQuantity (productId, quantity) {
      if (quantity >= 1) {
        this.updateCartQuantity({ productId, quantity })
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
.cart-page {
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

/* 结账步骤导航 */
.checkout-steps {
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
}

.step {
  display: flex;
  align-items: center;
  margin: 0 1.5rem;
  color: #999;
}

.step.active {
  color: var(--primary-color);
  font-weight: 600;
}

.step-number {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.step.active .step-number {
  background-color: var(--primary-color);
  color: white;
}

/* 购物车内容 */
.cart-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.cart-table-container {
  overflow-x: auto;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table th {
  padding: 1rem;
  font-weight: 600;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.cart-table td {
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
}

.product-info {
  display: flex;
  align-items: center;
}

.product-image {
  width: 80px;
  margin-right: 1rem;
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-name a {
  font-weight: 600;
  color: var(--primary-color);
}

.quantity-control {
  display: flex;
  align-items: center;
  max-width: 120px;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quantity-btn:hover {
  background-color: #e0e0e0;
}

.quantity-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.quantity-control input {
  width: 40px;
  height: 30px;
  text-align: center;
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
  font-size: 0.9rem;
}

.remove-btn {
  background: none;
  border: none;
  color: #999;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.remove-btn:hover {
  color: #f00;
}

/* 购物车总结 */
.cart-summary {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
}

.summary-title {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  color: #666;
}

.summary-row.total {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.1rem;
}

.proceed-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  border-radius: 5px;
  font-weight: 600;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;
}

.proceed-btn:hover {
  background-color: #0c1337;
  color: white;
}

/* 空购物车 */
.empty-cart {
  padding: 3rem 0;
  text-align: center;
}

.empty-cart i {
  font-size: 5rem;
  color: #ddd;
  margin-bottom: 1.5rem;
}

.empty-cart h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.empty-cart p {
  color: #666;
  margin-bottom: 1.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.return-to-shop-btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.return-to-shop-btn:hover {
  background-color: #0c1337;
  color: white;
}

@media (max-width: 992px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    margin-top: 1.5rem;
  }
}

@media (max-width: 768px) {
  .checkout-steps {
    flex-direction: column;
    align-items: flex-start;
  }

  .step {
    margin: 0.5rem 0;
  }

  .product-col {
    min-width: 200px;
  }

  .price-col, .subtotal-col {
    min-width: 100px;
  }

  .quantity-col {
    min-width: 150px;
  }
}

@media (max-width: 576px) {
  .product-image {
    width: 60px;
  }
}
</style>
