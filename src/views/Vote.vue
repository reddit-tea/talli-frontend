<template>
    <v-card>
      <v-card-title>
        <h1>Enter your vote</h1>
      </v-card-title>
      <v-card-text>
      <div>
        <h4>1st Place</h4>
        <VendorDropdown></VendorDropdown>
      </div>
      <div>
        <h4>2nd Place</h4>
        <VendorDropdown></VendorDropdown>
      </div>
      <div>
        <h4>3rd Place</h4>
        <VendorDropdown></VendorDropdown>
      </div>
      <template v-for="index in this.runnerUpCount">
        <div :key="index">
          <h4>Runner-up #{{index}}</h4>
          <VendorDropdown :disabled="true"></VendorDropdown>
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
export default {
  data () {
    return {
      runnerUpCount: 2
    }
  },
  methods: {
    addRunnerUp: function () {
      this.runnerUpCount += 1
      console.log(this.runnerUpCount)
    }
  },
  name: 'vote',
  components: { VendorDropdown }
}
</script>
