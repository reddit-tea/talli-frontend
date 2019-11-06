<template>
  <div>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <vendor-dropdown></vendor-dropdown>
  </div>
</template>
<script>
import VendorDropdown from '@/components/VendorDropdown'
export default {
  components: { VendorDropdown }
}
</script>
