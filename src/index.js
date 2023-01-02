import Dash from "./components/panel/Dashboard.vue";
import ProductTotal from "./components/products/ProductTotal.vue";

panel.plugin("hashandsalt/snipcart", {


  components: {
    dash: Dash
  },


  fields: {
    productTotal: ProductTotal,
	}
  
});