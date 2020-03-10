<template>
  <tbl
    headline="Active Discount Codes"
    :columns="columns"
    :rows="discounts"
    :is-loading="this.$store.state.isLoading"
    v-bind="config"
  />
</template>

<script>

import Tbl from "tbl-for-kirby";

export default {
  components: {
    Tbl
  },
  data() {
    return {
      discounts: []
    }
  },
  computed: {
    columns() {
      return [
        {
          name: "discname",
          label: "Discount Name",
          field: "name",
          sort: true,
          search: true,
          align: "left",
          width: "name"
        },
        {
          name: "code",
          label: "Code",
          field: "code",
          sort: true,
          search: true,
          align: "left",
          width: "code"
        },
        {
          name: "expires",
          label: "Expires",
          field: "expires",
          sort: true,
          search: true,
          align: "left",
          width: "expires"
        },
        {
          name: "uses",
          label: "# Uses",
          field: "numberOfUsages",
          sort: true,
          search: true,
          align: "left",
          width: "uses"
        }
      ]
    },
    config() {
      return {
      }
    }
  },
  async created() {
    let response = await this.$api.get('snipcart/discounts');
    this.discounts = response;
    console.log(response)
  }
}
</script>

<style lang="scss">

</style>
