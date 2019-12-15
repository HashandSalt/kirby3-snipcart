<template>
  <div>
  <k-header>Dashboard</k-header>
  <k-grid gutter="medium" class="k-snipcart-vitals">
    <k-column width="1/3">
      <sales-total />
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
  </div>
</template>

<script>

import Abandoned from './components/abandoned.vue';
import SalesTotal from './components/sales.vue';
import Popular from './components/popular.vue';
import Orders from './components/orders.vue';



export default {
  name: 'Vitals',
  components: {
    'abandoned': Abandoned,
    'sales-total': SalesTotal,
    'popular': Popular,
    'orders': Orders
  }
}
</script>
