<template>
  <div class="ui card product">
    <div class="image">
      <img :src="API_URL + product.attributes" :alt="product" />
      {{ product }}
    </div>
    <div class="content">
      <div class="header">{{ product.attributes }}</div>
      <div class="description">{{ product["attributes"] }}</div>
    </div>
    <div class="ui button primary" @click="addProductCartApi(product.id)">
      Comprar
    </div>
  </div>
</template>

<script>
import { defineProps } from "vue";
import { API_URL } from "../utils/constants";
import { getProductImages } from "../api/product";
import { addProductCartApi } from "../api/cart";

export default {
  name: "Product",
  props: {
    product: Object,
  },
  setup() {
    const props = defineProps();

    const { image } = getProductImages();
    console.log("img", image);
    return {
      API_URL,
      addProductCartApi,
    };
  },
};
</script>

<style></style>
