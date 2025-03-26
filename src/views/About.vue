<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">About Us</h1>

      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span class="separator">/</span>
        <span class="current">About Us</span>
      </div>

      <div class="about-content">
        <div class="about-image">
          <img src="https://elitemacstore.com/wp-content/uploads/2025/03/young-model-holding-silver-laptop-having-video-call.png" alt="About Elite Mac Store">
        </div>

        <div class="about-text">
          <h2>Everything you need for work</h2>
          <p>At Elite Mac Store, we're passionate about providing you with the best Apple products to enhance your productivity, creativity, and daily life. Established in 2023, we've quickly become a trusted source for premium Apple devices and accessories.</p>

          <h3>Our Mission</h3>
          <p>Our mission is to make high-quality technology accessible to everyone. We believe that the right tools can transform how you work, create, and connect with the world.</p>

          <h3>Why Choose Us?</h3>
          <ul class="about-features">
            <li>
              <span class="feature-highlight">Premium Products</span>
              We offer only genuine Apple products with full warranty support.
            </li>
            <li>
              <span class="feature-highlight">Expert Guidance</span>
              Our knowledgeable team is ready to help you find the perfect device for your needs.
            </li>
            <li>
              <span class="feature-highlight">Competitive Pricing</span>
              We strive to offer the best prices without compromising on quality or service.
            </li>
            <li>
              <span class="feature-highlight">Fast & Reliable Shipping</span>
              Your orders are processed quickly and shipped securely to your doorstep.
            </li>
            <li>
              <span class="feature-highlight">Excellent Customer Service</span>
              We're committed to providing exceptional support before, during, and after your purchase.
            </li>
          </ul>

          <h3>Our Values</h3>
          <p>We believe in transparency, integrity, and putting the customer first. Every decision we make is guided by our commitment to providing an outstanding shopping experience.</p>

          <p>Whether you're a professional looking for powerful tools, a student needing reliable technology, or simply an Apple enthusiast, Elite Mac Store is your destination for all things Apple.</p>

          <router-link to="/shop" class="btn-primary">Shop Now</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About'
}
</script>

<style scoped>
.about-page {
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

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: var(--shadow);
}

.about-text {
  color: #555;
  line-height: 1.7;
}

.about-text h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.about-text h3 {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin: 2rem 0 1rem;
}

.about-text p {
  margin-bottom: 1rem;
}

.about-features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.about-features li {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.feature-highlight {
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.3rem;
}

.btn-primary {
  display: inline-block;
  margin-top: 1.5rem;
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-image {
    order: 2;
  }

  .about-text {
    order: 1;
  }
}
</style>
