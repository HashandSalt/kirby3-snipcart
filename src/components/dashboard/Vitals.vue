<template>
  <k-inside>
    <k-view class="k-snipcart-view">
      <k-header>Dashboard</k-header>

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
      </k-grid>
    </k-view>
  </k-inside>
</template>

<script>
import Abandoned from "./abandoned.vue";
import SalesTotal from "./sales.vue";
import Popular from "./popular.vue";

export default {
  name: "Vitals",
  components: {
    abandoned: Abandoned,
    salestotal: SalesTotal,
    popular: Popular,
  },
};
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
