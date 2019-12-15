<template>

<k-view class="k-snipcart-view">

  <TabCard :tabs="tabs" :initialTab="initialTab">

      <!-- Dashboard -->
      <template slot="tab-head-dashboard">
        Dashboard
      </template>

      <template slot="tab-panel-dashboard">
        <vitals></vitals>
      </template>

      <!-- Discounts -->
      <template slot="tab-head-discounts">
        Discounts
      </template>

      <template slot="tab-panel-discounts">
        <discounts></discounts>
      </template>

  </TabCard>

</k-view>
</template>

<script>

import TabCard from '../tools/tabs.vue';
import Vitals from '../dashboard/vitals.vue';
import Discounts from '../discounts/discounts.vue';

export default {
  name: 'Dashboard',
  components: {
    'vitals': Vitals,
    'discounts': Discounts,
    'TabCard' : TabCard
  },
  data() {
    return {
      initialTab: 'dashboard',
      tabs: ['dashboard', 'discounts']
    };
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
