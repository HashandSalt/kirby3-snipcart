<template>
<div class="k-snipcart-vital">
  <h3>Most Popular</h3>
  <span>{{ popularCount }}</span>
</div>
</template>
<script>
export default {
  name: 'popularItem',
  data() {
    return {
      popularItem: undefined,
      errors: [],
    }
  },
  computed: {
     popularCount () {
       return (this.popularItem) ? this.popularItem : 'Loading...'
     }
  },
  // Abandoned Carts
  async created() {
    try {

      let response = await this.$api.get('snipcart/orders', {pretty: true})


          let flattened = response.items.reduce((a, b) => a.concat(b.items), []);

          let flattenedIDs = flattened.map(({ name }) => name).reduce((names, name) => {
              const count = names[name] || 0;
              names[name] = count + 1;
              return names;
            }, {});

          let popularID = Object.keys(flattenedIDs).reduce((a, b) => flattenedIDs[a] > flattenedIDs[b] ? a : b);

          this.popularItem = popularID;

    } catch (e) {
       this.errors.push(e)
    }
  }
}
</script>
