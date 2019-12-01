import 'regenerator-runtime/runtime';
import 'tbl-for-kirby/index.css';
import View from "./components/dashboard/View.vue";
import ProductTotal from "./components/products/productTotal.vue";


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
