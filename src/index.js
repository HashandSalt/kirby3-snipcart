import 'babel-polyfill';
import View from "./components/dashboard/View.vue";

panel.plugin("hashandsalt/kirby-snipcart", {
  views: {
    snipcartproducts: {
      component: View,
      icon: "cart",
      label: "Snipcart"
    }
  }


});
