<template>
  <tbl
    headline="Orders"
    :columns="columns"
    :rows="orders"
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
      orders: []
    }
  },
  computed: {
    columns() {
      return [
        {
          name: "id",
          label: "No.",
          field: "invoiceNumber",
          sort: true,
          search: true
        },
        {
          name: "date",
          label: "Created",
          field: "creationDate",
          type: "date"
        },
        {
          name: "status",
          label: "Status",
          field: "status",
          sort: false,
          search: false
        },
        {
          name: "total",
          label: "Total",
          field: "finalGrandTotal",
          type: "decimal",
          sort: true,
          search: false
        },
        {
          name: "address",
          label: "Ship to",
          field: "shippingAddressCountry"
        }
      ]
    },
    config() {
      return {
      }
    }
  },
  async created() {
    let response = await this.$api.get('snipcart/orders');
    this.orders = response.items;
  }
}
</script>
