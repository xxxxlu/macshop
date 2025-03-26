<template>
  <div class="contact-page">
    <div class="container">
      <h1 class="page-title">Contact Us</h1>

      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span class="separator">/</span>
        <span class="current">Contact Us</span>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <h2>Get in touch</h2>
          <p>We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or want to provide feedback, our team is here to help.</p>

          <div class="contact-methods">
            <div class="contact-method">
              <i class="fas fa-phone-alt"></i>
              <div class="method-details">
                <h3>Call Us</h3>
                <p>+92 320 9972624</p>
                <p class="detail-note">Monday to Friday, 9am to 6pm</p>
              </div>
            </div>

            <div class="contact-method">
              <i class="fas fa-envelope"></i>
              <div class="method-details">
                <h3>Email Us</h3>
                <p>inspireinnosmc@gmail.com</p>
                <p class="detail-note">We'll respond as soon as possible</p>
              </div>
            </div>

            <div class="contact-method">
              <i class="fas fa-map-marker-alt"></i>
              <div class="method-details">
                <h3>Visit Us</h3>
                <p>123 Tech Plaza, Innovation Street</p>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <h3>Connect with us</h3>
            <div class="social-icons">
              <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <div class="contact-form-container">
          <h2>Send us a message</h2>
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label for="name" class="form-label">Name *</label>
                <input type="text" id="name" v-model="formData.name" class="form-control" required>
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email *</label>
                <input type="email" id="email" v-model="formData.email" class="form-control" required>
              </div>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Subject *</label>
              <input type="text" id="subject" v-model="formData.subject" class="form-control" required>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message *</label>
              <textarea id="message" v-model="formData.message" class="form-control" rows="6" required></textarea>
            </div>

            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contact',
  data () {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      formSubmitted: false
    }
  },
  methods: {
    submitForm () {
      // 在实际应用中，这里会发送表单数据到后端
      alert('Thank you for your message! We will get back to you soon.')
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      this.formSubmitted = true
    }
  }
}
</script>

<style scoped>
.contact-page {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info, .contact-form-container {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: var(--shadow);
}

/* 联系信息部分 */
.contact-info h2, .contact-form-container h2 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.contact-info p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-methods {
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.contact-method i {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 1rem;
  margin-top: 0.3rem;
}

.method-details h3 {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.method-details p {
  margin-bottom: 0.3rem;
}

.detail-note {
  font-size: 0.9rem;
  color: #999;
}

.social-links h3 {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 0.8rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.social-icon:hover {
  background-color: #0c1337;
}

/* 联系表单部分 */
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
  color: #555;
}

.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  background-color: white;
}

.form-control:focus {
  border-color: var(--primary-color);
  outline: none;
}

.submit-btn {
  padding: 12px 25px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0c1337;
}

@media (max-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .contact-form-container {
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-method {
    flex-direction: column;
  }

  .contact-method i {
    margin-bottom: 0.5rem;
  }
}
</style>
