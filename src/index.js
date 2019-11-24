import View from "./components/View.vue";

panel.plugin("hashandsalt/kirby-snipcart", {
  views: {
    snipcartproducts: {
      component: View,
      icon: "cart",
      label: "Snipcart"
    }
  }
});
