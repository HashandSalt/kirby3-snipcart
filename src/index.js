import Vitals from "./components/dashboard/Vitals.vue";
import ProductTotal from "./components/products/ProductTotal.vue";

panel.plugin("hashandsalt/snipcart", {


  components: {
    vitals: Vitals
  },


  fields: {
    productTotal: ProductTotal,
	}
  
});