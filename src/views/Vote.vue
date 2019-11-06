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
      <div>
        <h4>Runner-up #1</h4>
        <VendorDropdown></VendorDropdown>
      </div>
      <div>
      <h4>Runner-up #2</h4>
      <VendorDropdown></VendorDropdown>
      </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text>
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
  name: 'vote',
  components: { VendorDropdown }
}
</script>
