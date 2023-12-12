<script setup lang="ts">
defineProps<{
  label: string;
  value: string;
}>();
</script>

<template>
  <div class="input-field">
    <input type="text" required />
    <label>{{ label }}</label>
  </div>
</template>

<style scoped>
.input-field {
  position: relative;
  margin: 10px 2.5px 20px 2.5px;
}

input {
  border: thin solid #e9e9e9;
  color: #413c3c;
  background-color: #fdfdfd;
  padding: 10px 10px 10px 10px;
  border-radius: 4px;
}

input:focus {
  border: thin solid #2b0a57;
}

label {
  color: #999;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 10px;
  transition: 0.2s;
}

input:focus ~ label,
input:valid ~ label {
  top: -10px;
  left: 15px;
  font-size: small;
  color: #413c3c;
  background-color: #fff;
  padding: 0 5px 0 5px;
}
</style>
