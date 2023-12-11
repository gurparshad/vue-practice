<script setup lang="ts">
import { ref } from 'vue';
import { BIcon, BIconArrowUp, BIconArrowDown, BIconChevronDown, BIconChevronRight } from 'bootstrap-vue'
const selectedNumber = ref(null); // Stores the selected number from the input
const dropdownOpen = ref(false); // Controls the visibility of the dropdown
const options = ref([
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' }
]);

const toggleDropdown = () => {
  console.log("in toggle", dropdownOpen.value)
  dropdownOpen.value = !dropdownOpen.value;
};

const selectOption = (option: any) => {
  // Handle selected option here
  console.log('Selected Option:', option);
  dropdownOpen.value = false; // Close the dropdown after selection
};

</script>

<template>
  <div class="parent">
    <p class="title">Amount</p>
    <b-dropdown no-caret id="dropdown-buttons" text="Dropdown" arrow-down-icon="BIconArrowDown">
      <template #button-content>
        Custom
        <BIconChevronRight/>
    </template>
    <b-dropdown-item-button>I'm a button</b-dropdown-item-button>
</b-dropdown>

  <p class="title">Duration</p>

  <div class="monthly-payment">
    <p>Monthly Payment</p>
    <p class="value">95,27</p>
  </div>
<div class="rightIconContainer">
  <BIconChevronRight/>
</div>


  </div>
</template>

<style scoped>

p{
  margin-bottom: 0;
  color: #DEDEDE;
  font-size: 12px;
  font-weight: 300;
}
.dropdown{
  font-size: 20px;
  font-weight: 400;
}
.value{
  font-weight: 400;
  font-size: 20px;
}
.parent {
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 764px;
  padding: 17px 12px 17px 89px;
  background: #2B0A57;
  border-radius: 30px;
}
.monthly-payment{
  display: flex;
  background: #3A156C;
  gap: 9px;
  border-radius: 30px;
  max-width: 205px;
  padding: 6px 13px 6px 13px;
  align-items: center;
}
.rightIconContainer{
  background-color: #FFFFFF;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
