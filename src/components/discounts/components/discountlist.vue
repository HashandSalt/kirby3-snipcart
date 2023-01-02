<template>
  <div>
    <k-table v-if="discounts.length" :columns="tablecolumns" :rows="discounts" />
  </div>
</template>

<script lang="js">
export default {
  props: {
    name: String,
    columns: Object,
    options: Array,
    rows: {
      type: Array,
      default() {
        return [];
      },
    },
    empty: String,
  },

  data() {
    return {
      tablecolumns: { discname: { label: "Name", type: "text" }, code: { label: "Code", type: "text" }, expires: {label: "Expires", type: "text" },  uses: {label: "Uses", type: "text" } },
      discounts: [],
    };
  },

  async created() {
    let response = await this.$api.get("snipcart/discounts");

    let data = response.map(function (element) {

      let date = new Date( Date.parse(element.expires));            
      let datestring = ("0" + date.getDate()).slice(-2)+'/'+("0" + (date.getMonth() + 1)).slice(-2)+'/'+date.getFullYear();

      return {discname: element.discname, code: element.code, uses: element.numberOfUsages, expires: datestring}
    });

 
    this.discounts = data;

  },
};
</script>

<style lang="scss">
</style>
