<template>
  <div class="checkout-page">
    <div class="container">
      <h1 class="page-title">Checkout</h1>

      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span class="separator">/</span>
        <span class="current">Checkout</span>
      </div>

      <!-- 结账步骤导航 -->
      <div class="checkout-steps">
        <div class="step">
          <span class="step-number">1</span>
          <span class="step-name">Cart</span>
        </div>
        <div class="step active">
          <span class="step-number">2</span>
          <span class="step-name">Checkout</span>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <span class="step-name">Order</span>
        </div>
      </div>

      <!-- 如果购物车为空 -->
      <div v-if="cart.length === 0" class="empty-checkout">
        <p>Your cart is currently empty. You need to add some products to the cart before proceeding to checkout.</p>
        <router-link to="/shop" class="btn-primary">Return to shop</router-link>
      </div>

      <!-- 结账表单 -->
      <div v-else class="checkout-form-container">
        <form class="checkout-form" @submit.prevent="placeOrder">
          <div class="form-sections">
            <!-- 账单详情 -->
            <div class="billing-details">
              <h3>Billing Details</h3>

              <div class="form-row">
                <div class="form-group">
                  <label for="firstName" class="form-label">First Name *</label>
                  <input type="text" id="firstName" v-model="billingDetails.firstName" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="lastName" class="form-label">Last Name *</label>
                  <input type="text" id="lastName" v-model="billingDetails.lastName" class="form-control" required>
                </div>
              </div>

              <div class="form-group">
                <label for="company" class="form-label">Company Name (optional)</label>
                <input type="text" id="company" v-model="billingDetails.company" class="form-control">
              </div>

              <div class="form-group">
                <label for="country" class="form-label">Country / Region *</label>
                <select id="country" v-model="billingDetails.country" class="form-control" required>
                  <option value="">Select a country...</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>

              <div class="form-group">
                <label for="address" class="form-label">Street Address *</label>
                <input type="text" id="address" v-model="billingDetails.address" class="form-control" placeholder="House number and street name" required>
              </div>

              <div class="form-group">
                <label for="city" class="form-label">Town / City *</label>
                <input type="text" id="city" v-model="billingDetails.city" class="form-control" required>
              </div>

              <div class="form-group">
                <label for="state" class="form-label">State / Province *</label>
                <input type="text" id="state" v-model="billingDetails.state" class="form-control" required>
              </div>

              <div class="form-group">
                <label for="postcode" class="form-label">Postcode / ZIP *</label>
                <input type="text" id="postcode" v-model="billingDetails.postcode" class="form-control" required>
              </div>

              <div class="form-group">
                <label for="phone" class="form-label">Phone *</label>
                <input type="tel" id="phone" v-model="billingDetails.phone" class="form-control" required>
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email Address *</label>
                <input type="email" id="email" v-model="billingDetails.email" class="form-control" required>
              </div>

              <div class="form-group">
                <label for="notes" class="form-label">Order Notes (optional)</label>
                <textarea id="notes" v-model="billingDetails.notes" class="form-control" rows="4" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
              </div>
            </div>

            <!-- 订单摘要 -->
            <div class="order-summary">
              <h3>Your Order</h3>

              <div class="order-summary-content">
                <div class="order-summary-header">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>

                <div class="order-summary-list">
                  <div v-for="item in cart" :key="item.id" class="order-item">
                    <div class="order-item-name">{{ item.name }} <span class="order-item-quantity">× {{ item.quantity }}</span></div>
                    <div class="order-item-price">Rs.{{ formatPrice(item.price * item.quantity) }}</div>
                  </div>
                </div>

                <div class="order-summary-subtotal">
                  <span>Subtotal</span>
                  <span>Rs.{{ formatPrice(cartTotal) }}</span>
                </div>

                <div class="order-summary-shipping">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div class="order-summary-total">
                  <span>Total</span>
                  <span>Rs.{{ formatPrice(cartTotal) }}</span>
                </div>
              </div>

              <!-- 支付方式 -->
              <div class="payment-methods">
                <h4>Payment Method</h4>

                <div class="payment-method">
                  <input type="radio" id="payment-bank" value="bank" v-model="paymentMethod" checked>
                  <label for="payment-bank"><img src="@/assets/image/easypaisa.png" alt="Payment methods" class="payment-img"></label>
                  <div class="payment-method-description" v-if="paymentMethod === 'bank'">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </div>
                </div>

                <div class="payment-method">
                  <input type="radio" id="payment-cash" value="cash" v-model="paymentMethod">
                  <label for="payment-cash"><img src="@/assets/image/Frame 3.png" alt="Payment methods" class="payment-img"></label>
                  <div class="payment-method-description" v-if="paymentMethod === 'cash'">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </div>
                </div>
              </div>

              <button type="submit" class="place-order-btn">Place Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Checkout',
  data () {
    return {
      billingDetails: {
        firstName: '',
        lastName: '',
        company: '',
        country: '',
        address: '',
        city: '',
        state: '',
        postcode: '',
        phone: '',
        email: '',
        notes: ''
      },
      paymentMethod: 'bank'
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotal'])
  },
  methods: {
    ...mapActions(['clearCart']),
    formatPrice (price) {
      return price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    },
    placeOrder () {
      // 这里会处理下单逻辑，在实际应用中会提交到后端
      alert('Thank you for your order! We are processing your payment and will ship your products soon.')

      // 清空购物车并跳转到确认页面
      this.clearCart()
      this.$router.push('/thank-you')
    }
  }
}
</script>

<style scoped>
.checkout-page {
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

.payment-img {
  width: 120px;
  height: 60px;
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

/* 空购物车提示 */
.empty-checkout {
  text-align: center;
  padding: 3rem 0;
}

.empty-checkout p {
  margin-bottom: 1.5rem;
  color: #666;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* 结账表单 */
.checkout-form-container {
  padding: 2rem 0;
}

.form-sections {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
}

.billing-details, .order-summary {
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
}

.billing-details h3, .order-summary h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-control {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
}

.form-control:focus {
  border-color: var(--primary-color);
  outline: none;
}

/* 订单摘要 */
.order-summary-content {
  margin-bottom: 2rem;
}

.order-summary-header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  font-weight: 600;
}

.order-summary-list {
  margin: 1rem 0;
}

.order-item {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
}

.order-item-name {
  flex: 1;
}

.order-item-quantity {
  color: #999;
}

.order-item-price {
  font-weight: 500;
}

.order-summary-subtotal, .order-summary-shipping {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
}

.order-summary-total {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin-top: 1rem;
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.1rem;
}

/* 支付方式 */
.payment-methods {
  margin: 2rem 0;
}

.payment-methods h4 {
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.payment-method {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.payment-method label {
  margin-left: 0.5rem;
  font-weight: 500;
}

.payment-method-description {
  margin-top: 0.5rem;
  padding-left: 1.5rem;
  font-size: 0.9rem;
  color: #666;
}

/* 下单按钮 */
.place-order-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
}

.place-order-btn:hover {
  background-color: #0c1337;
}

@media (max-width: 992px) {
  .form-sections {
    grid-template-columns: 1fr;
  }

  .order-summary {
    margin-top: 2rem;
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

  .form-row {
    grid-template-columns: 1fr;
  }

  .billing-details, .order-summary {
    padding: 1.5rem;
  }
}
</style>
