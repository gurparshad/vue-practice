<script setup lang="ts">
import {ref} from "vue";
// import InputField from "./InputField.vue";
const formData = {
  fullName: ref(""),
  county: ref(""),
  city: ref(""),
  village: ref(""),
  street: ref(""),
  house: ref(null),
  apartment: ref(null),
  postalCode: ref(""),
  isPep: ref(false),
  isUltimateBeneficiary: ref(false),
};

const submitForm = () => {
  console.log("formData-->>", formData);
};
</script>

<template>
  <div class="greetings">
    <h3>
      this is form
      <form action="">
        <label for="">Name</label>
        <input type="text" required v-model="formData.county.value" />
        <label for="">Name</label>
        <input type="text" required v-model="formData.city.value" />
        <button @click.prevent="submitForm">Continue</button>
      </form>
      <!-- <InputField label="County" value="hello" /> -->
    </h3>
  </div>
</template>

<style scoped></style>
