<template>
  <v-card>
    <v-card-title>
      <p class="headline">Enter your vote</p>
    </v-card-title>
    <v-card-subtitle>
      <p class="subtitle-1">You can vote for as many or as few vendors as you want</p>
    </v-card-subtitle>
    <v-card-text>
      <div>
        <p class="subtitle-2">1st Place</p>
        <VendorDropdown
          v-bind:vendors="unselectedVendors"
          v-bind:disabled="voteCount < 0"
          @change="onSelected('1st Place', $event)"
        ></VendorDropdown>
      </div>
      <div>
        <p class="subtitle-2">2nd Place</p>
        <VendorDropdown
          v-bind:vendors="unselectedVendors"
          v-bind:disabled="voteCount < 1"
          @change="onSelected('2nd Place', $event)"
        ></VendorDropdown>
      </div>
      <div>
        <p class="subtitle-2">3rd Place</p>
        <VendorDropdown
          v-bind:vendors="unselectedVendors"
          v-bind:disabled="voteCount < 2"
          @change="onSelected('3rd Place', $event)"
        ></VendorDropdown>
      </div>
      <template v-for="index in runnerUpCount">
        <div :key="index">
          <p class="subtitle-2">Runner-up #{{index}}</p>
          <VendorDropdown
            v-bind:vendors="unselectedVendors"
            v-bind:disabled="voteCount < 2 + index"
            @change="onSelected('Runner-up #' + index, $event)"
          ></VendorDropdown>
        </div>
      </template>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="runnerUpCount < 10" @click="addRunnerUp()" color="primary" text>
        Add More Runner-ups
      </v-btn>
      <v-btn color="primary">
        Vote
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import VendorDropdown from '@/components/VendorDropdown'
import Vendors from '@/assets/vendors.json'

export default {
  data () {
    return {
      runnerUpCount: 2,
      votes: new Map(),
      voteCount: 0,
      selectedVendors: ['test']
    }
  },
  computed: {
    allVendors: function () {
      let vendors = []
      Vendors.forEach((vendor) => vendors.push(vendor.vendorName))
      return vendors
    },
    unselectedVendors: function () {
      console.log(this.selectedVendors)
      let filter = this.selectedVendors
      return this.allVendors.filter(function (value) {
        return !filter.includes(value)
      })
    }
  },
  methods: {
    onSelected: function (choice, value) {
      this.votes.set(choice, value)
      this.voteCount = this.votes.size
      this.selectedVendors = []
      for (let name of this.votes.values()) {
        this.selectedVendors.push(name)
      }
      console.log(this.votes)
      console.log(this.voteCount)
      console.log(this.selectedVendors)
    },
    addRunnerUp: function () {
      if (this.runnerUpCount < 10) {
        this.runnerUpCount += 1
      }
    }
  },
  name: 'vote',
  components: { VendorDropdown }
}
</script>
