<template>
  <div class="not-found-page">
    <div class="container">
      <div class="not-found-content">
        <div class="not-found-image">
          <img src="https://ext.same-assets.com/2269417689/329916720.jpeg" alt="Page Not Found">
        </div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div class="action-buttons">
          <router-link to="/" class="btn-primary">Back to Home</router-link>
          <router-link to="/shop" class="btn-secondary">Go to Shop</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found-page {
  padding: 5rem 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.not-found-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.not-found-image {
  max-width: 250px;
  margin: 0 auto 2rem;
}

.not-found-image img {
  width: 100%;
  height: auto;
  opacity: 0.7;
}

.not-found-content h1 {
  font-size: 6rem;
  color: var(--primary-color);
  margin: 0;
  line-height: 1.2;
}

.not-found-content h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.not-found-content p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn-primary, .btn-secondary {
  padding: 12px 25px;
}

@media (max-width: 768px) {
  .not-found-content h1 {
    font-size: 4rem;
  }

  .not-found-content h2 {
    font-size: 1.5rem;
  }

  .action-buttons {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style>
