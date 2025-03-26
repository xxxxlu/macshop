<template>
  <div class="thank-you-page">
    <div class="container">
      <div class="thank-you-content">
        <div class="thank-you-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <h1>Thank You for Your Order!</h1>
        <p>Your order has been received and is now being processed.</p>
        <p>An email confirmation has been sent to your registered email address.</p>

        <div class="order-details">
          <h2>Order Information</h2>
          <div class="order-info-row">
            <span>Order Number:</span>
            <span>#{{ randomOrderNumber }}</span>
          </div>
          <div class="order-info-row">
            <span>Date:</span>
            <span>{{ currentDate }}</span>
          </div>
          <div class="order-info-row">
            <span>Payment Method:</span>
            <span>Direct Bank Transfer</span>
          </div>
        </div>

        <div class="shipping-message">
          <i class="fas fa-shipping-fast"></i>
          <p>We will notify you when your items have been shipped. If you have any questions, please contact our customer service.</p>
        </div>

        <div class="action-buttons">
          <router-link to="/shop" class="btn-primary">Continue Shopping</router-link>
          <router-link to="/contact" class="btn-secondary">Contact Support</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThankYou',
  data () {
    return {
      randomOrderNumber: Math.floor(10000 + Math.random() * 90000),
      currentDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.thank-you-page {
  padding: 5rem 0;
  background-color: #f9f9f9;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.thank-you-content {
  background: white;
  border-radius: 10px;
  padding: 3rem;
  box-shadow: var(--shadow);
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.thank-you-icon {
  font-size: 5rem;
  color: #4CAF50;
  margin-bottom: 1.5rem;
}

.thank-you-content h1 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.thank-you-content p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.order-details {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: #f9f9f9;
  text-align: left;
}

.order-details h2 {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-align: center;
}

.order-info-row {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
}

.order-info-row:last-child {
  border-bottom: none;
}

.order-info-row span:first-child {
  font-weight: 600;
  color: #555;
}

.shipping-message {
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #f0f7ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  text-align: left;
}

.shipping-message i {
  font-size: 2rem;
  color: var(--secondary-color);
  margin-right: 1rem;
}

.shipping-message p {
  margin: 0;
  font-size: 1rem;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary, .btn-secondary {
  padding: 12px 25px;
}

@media (max-width: 768px) {
  .thank-you-page {
    padding: 3rem 0;
  }

  .thank-you-content {
    padding: 2rem;
  }

  .thank-you-icon {
    font-size: 4rem;
  }

  .thank-you-content h1 {
    font-size: 2rem;
  }

  .action-buttons {
    flex-direction: column;
    gap: 0.8rem;
  }

  .shipping-message {
    flex-direction: column;
    text-align: center;
  }

  .shipping-message i {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
