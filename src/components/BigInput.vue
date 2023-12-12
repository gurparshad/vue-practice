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
]);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectOption = (option: any) => {
  dropdownOpen.value = false;
};

</script>

<template>
  <div class="parent">
    <p class="title">Amount</p>
<div class="input-dropdown">
      <div class="input-wrapper">
        <input type="number" v-model="selectedNumber" class="form-control" placeholder="Enter number">
        <span class="arrow-icon" @click="toggleDropdown">
          <BIconChevronDown />
        </span>
      </div>
    </div>

    <div class="dropdownBro" v-show="dropdownOpen">
        <div
          v-for="option in options"
          :key="option.id"
          class="dropdown-item"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>

  <p class="title">Duration</p>

  <div class="duration-input-dropdown">
      <div class="input-wrapper">
        <input type="number" v-model="selectedNumber" class="form-control" placeholder="Enter number">
        <span class="arrow-icon" @click="toggleDropdown">
          <BIconChevronDown />
        </span>
      </div>
    </div>

    <div class="dropdownBro" v-show="dropdownOpen">
        <div
          v-for="option in options"
          :key="option.id"
          class="dropdown-item"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>

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
.dropdownBro {
  position: absolute;
  top: 50px;
  left: 300px;
  background: #FFFFFF;
  margin-top: 50px;
  color: orange;
  width: 168px;
  height: 168px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Syntax: offset-x | offset-y | blur-radius | spread-radius | color */
  text-align: center;
  padding: 19px;
  overflow-y: auto; 
}
.dropdown-item{
  margin-bottom: 13px;
  font-size: 16px;
}
.input-dropdown{
  width: 200px;
}

.input-wrapper{
display: flex;
}

.arrow-icon{
  background-color: red;
}

</style>
