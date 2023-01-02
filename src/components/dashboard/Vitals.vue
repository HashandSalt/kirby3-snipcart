<template>
  <k-view class="k-snipcart-view">
    <k-grid gutter="medium" class="k-snipcart-vitals">
      <k-column width="1/3">
        <salestotal />
      </k-column>
      <k-column width="1/3">
        <popular />
      </k-column>
      <k-column width="1/3">
        <abandoned />
      </k-column>
      <k-column width="1/1">
        <orders />
      </k-column>
    </k-grid>
  </k-view>
</template>

<script lang="js">
import Abandoned from "./abandoned.vue";
import SalesTotal from "./sales.vue";
import Popular from "./popular.vue";
import Orders from './orders.vue';

export default {
  name: "Vitals",
  components: {
    abandoned: Abandoned,
    salestotal: SalesTotal,
    popular: Popular,
    'orders': Orders
  },
};
</script>

