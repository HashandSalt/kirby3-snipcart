<template>
<k-view class="k-snipcart-view">
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

</k-view>
</template>

<script>
import Abandoned from './abandoned.vue';
import SalesTotal from './sales.vue';
import Popular from './popular.vue';
import Orders from './orders.vue';

export default {
  components: {
    'abandoned': Abandoned,
    'sales-total': SalesTotal,
    'popular': Popular,
    'orders': Orders
  }
}
</script>

<style lang="scss">
.k-snipcart-vital {
    background-color: #2d2f36;
    text-align: center;
    overflow: hidden;
    padding: 12px 0 24px;
    h3 {
        color: #fff;
        margin: 0 12px 24px 0;
        font-weight: 400;
    }
    span {
        color: #fff;
        font-size: 28px;
        display: block;
    }
}
</style>
