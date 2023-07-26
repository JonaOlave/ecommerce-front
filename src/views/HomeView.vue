<template>
  <BasicLayout>
    <h1>Últimos productos</h1>
    <div class="ui grid">
      <div
        class="sixten wide mobile eigth wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
      >
        <p>aca: {{ product }}</p>
        <Product :product="product" />
      </div>
    </div>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import BasicLayout from "../layouts/BasicLayout";
import { getProducts } from "../api/product";
import Product from "../components/Product.vue";

export default {
  name: "HomeView",
  components: {
    BasicLayout,
    Product,
  },
  setup() {
    let products = ref(null);

    onMounted(async () => {
      const response = await getProducts(20);
      products.value = response.data;
    });

    return {
      products,
    };
  },
};
</script>
