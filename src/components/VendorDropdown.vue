<template>
  <div>
    <v-autocomplete
      label="Choose vendor"
      no-data-text="No vendor found with that name"
      :items="vendors"
      :filter="activeFilter"
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
      vendors: [
        'Adagio & Adagio UK', 'Adore Tea', 'American Tea Room', 'Andrews & Dunham Damn Fine Tea',
        'ANGEL SPECIALTY PRODUCTS', 'Arbor Teas', 'Argo Tea', 'Art of Tea', 'Assam Tea Company', 'Bamboo Tea House',
        'Bana Tea Company', 'BANGtea', 'Beautiful Taiwan Tea Co.', 'BitterLeaf Teas', 'Boulder Tea Shop',
        'Breakaawy Matcha', 'C.C. Fine Tea (Formerly Smacha)', 'Camellia Sinensis', 'Capital Teas', 'Chado',
        'Chawangshop', 'Crimson Lotus Tea', 'Curious Tea', 'Daoist Meditation', 'Darjeeling Tea Boutique',
        'Darjeeling Tips', 'David\'s Tea', 'Dazzle Deer', 'Dens Tea', 'Eastcott & Burgess Tea', 'Eco-Cha',
        'Essence of Tea', 'Farmer Leaf', 'Floating Leaves Tea', 'Fortnum and Mason', 'Golden Tea Leaf Co.',
        'Golden Tips', 'Good Life Tea', 'Great Horse Teas', 'Green Tea Guru', 'Harney & Sons', 'Hatvala',
        'Healthy-Leaf', 'Hibiki-An', 'High Garden Tea', 'Hojo Tea', 'Hou De Asian Art', 'Imperial Tea Court',
        'Imperial Teas of Lincoln', 'In Pursuit of Tea', 'IPPODO', 'Jing Tea Shop', 'JusTea', 'Kauai Farmacy', 'Kettl',
        'King Tea', 'Kuura', 'Lazy Cat Tea', 'Leafy Green', 'Leaves of Cha', 'Life in a Teacup', 'Little Red Cup Tea',
        'London Tea Merchant', 'LuLin teas', 'LunaCha', 'Lupicia', 'Mandala Tea', 'Mashup Tea', 'Mei Leaf',
        'Mellow Monk', 'Mem Tea', 'Mighty Leaf', 'Misty Peak Teas', 'Modern Teaist', 'Mountain Stream Teas',
        'Mountain Tea', 'Murchie\'s', 'Music City Tea', 'Native American Tea Company', 'Nepali Tea Traders',
        'Nibelungentee', 'NM Tea Company', 'Norbu Tea', 'O-Cha', 'Old Ways Tea', 'Oxalis', 'Palaise Des Thes',
        'Path Of Cha', 'Phoenix Tea', 'Pipers Tea and Coffee', 'Positively Tea', 'Pu-erh .sk', 'Puerhshop',
        'Red Blossom Tea Co', 'Red Espresso', 'Red Leaf Tea', 'Rishi Tea', 'Sebz Tea & Lounge', 'Sencha Tea Bar',
        'Seven Cups', 'Shan Valley', 'Shang Tea', 'Silk Road Tea', 'Song Tea', 'Storm King Tea', 'T Shop NYC', 'T2 Tea',
        'Taiwan Sourcing', 'Taiwan Tea Crafts', 'Tao of Tea', 'Tea and Coffee', 'Tea Ave', 'Tea Drunk', 'Tea Forte',
        'Tea Gschwendner', 'Tea Guys', 'Tea Hee Hee', 'Tea Hong', 'Tea Makers of London',
        'Tea Masters Blog', 'Tea Spring', 'Tea Trekker', 'Tea Urchin', 'Teabox', 'TeaHaus', 'TeaLife Hong Kong',
        'Tealyra', 'TEAMALCHI ', 'Teance', 'Teasenz', 'Teasource', 'Teavivre', 'Teaxi', 'TeeMaa', 'The Republic of Tea',
        'The Tea Spot', 'Thes Du Japon', 'Thunderbolt Tea', 'Towshend\'s Tea Co.', 'Treasure Green Tea Company',
        'Unytea', 'Upton Tea', 'Vahdam', 'Valley Brook Tea', 'Valley Green Tea', 'Verdant Tea',
        'Vital Leaf Tea San Francisco and Seattle', 'What-Cha', 'Whispering Pines', 'White2Tea', 'WumiMatcha',
        'Wuyi Origin', 'Yatra Tea Company', 'Yezi Tea', 'Yunnan Sourcing', 'Yunomi', 'Yuuki-cha',
        'Zen Tea Life', 'Zesta'
      ],
      filter:
        {
          value: 0,
          fn: (item, queryText, itemText) => item.indexOf(queryText) > -1,
          text: 'Exact Match'
        }
    }
  },

  computed: {
    activeFilter () {
      if (this.model == null) return undefined
      return this.filters[this.model].fn
    }
  }
}
</script>

<style scoped>

</style>
