import 'regenerator-runtime/runtime';
import 'tbl-for-kirby/index.css';

import View from "./components/panel/view.vue";

import ProductTotal from "./components/products/producttotal.vue";

panel.plugin("hashandsalt/kirby-snipcart", {

  fields: {
    productTotal: ProductTotal,
  },

  views: {
    snipcartproducts: {
      component: View,
      icon: "cart",
      label: "Snipcart"
    }
  },

});
