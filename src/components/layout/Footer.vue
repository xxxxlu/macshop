<template>
  <footer class="footer">
    <div class="footer-widgets">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-widget">
            <h4>Quick links</h4>
            <ul class="footer-links">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/shop">Shop</router-link></li>
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/contact">Contact Us</router-link></li>
            </ul>
          </div>

          <div class="footer-widget">
            <h4>Useful links</h4>
            <ul class="footer-links">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          <div class="footer-widget">
            <h4>Contact info</h4>
            <p class="contact-email">electropak11@gmail.com</p>
          </div>
          <div class="footer-widget">
            <h4>Payment Methods</h4>
            <div class="payment-methods">
              <img src="@/assets/image/easypaisa.png" alt="Payment methods" class="payment-img">
              <img src="@/assets/image/Frame 3.png" alt="Payment methods" class="payment-img">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-copy">
      <div class="container">
        <p class="copyright">Copyright © {{ new Date().getFullYear() }} | Powered by Data Network Solutions </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background-color: var(--primary-color);
  color: white;
  margin-top: auto;
}

.footer-widgets {
  padding: 3rem 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.footer-widget h4 {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.contact-phone {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.contact-email {
  color: rgba(255, 255, 255, 0.8);
}

.payment-methods {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.payment-img {
  width: 120px;
  height: 60px;
}

.footer-copy {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1.5rem 0;
  text-align: center;
}

.copyright {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-widget {
    text-align: center;
    margin-bottom: 2rem;
  }

  .footer-widget:last-child {
    margin-bottom: 0;
  }
}
</style>
