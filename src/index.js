import 'regenerator-runtime/runtime';
import View from "./components/dashboard/View.vue";
import 'tbl-for-kirby/index.css';

panel.plugin("hashandsalt/kirby-snipcart", {
  views: {
    snipcartproducts: {
      component: View,
      icon: "cart",
      label: "Snipcart"
    }
  }
});
