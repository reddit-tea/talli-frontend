<template>
  <div>
    <v-autocomplete
      label="Choose vendor"
      no-data-text="No vendor found with that name"
      :items="items"
      :filter="activeFilter"
      :disabled="disabled"
      @change="onSelect"
      filled
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  name: 'VendorDropdown',
  data () {
    return {
      model: null,
      selected: null,
      filter:
        {
          value: 0,
          fn: (item, queryText) => item.indexOf(queryText) > -1,
          text: 'Exact Match'
        }
    }
  },
  props: ['vendors', 'disabled'],
  computed: {
    items: function () {
      let items = this.vendors.slice()
      if (this.selected !== null) {
        items.push(this.selected)
      }
      return items.sort()
    },
    activeFilter () {
      if (this.model == null) return undefined
      return this.filters[this.model].fn
    }
  },
  methods: {
    onSelect: function (value) {
      this.selected = value
      this.$emit('change', value)
    }
  }
}
</script>
