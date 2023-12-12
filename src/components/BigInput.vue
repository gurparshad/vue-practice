<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { BIcon, BIconArrowUp, BIconArrowDown, BIconChevronDown, BIconChevronRight } from 'bootstrap-vue'
const selectedNumber = ref(''); // Stores the selected number from the input
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

const euroSign = ref<HTMLElement | null>(null);
const inputRef = ref(null);

const updateWidthAndEuroSignPosition = () => {
  if (inputRef.value && euroSign.value) {
    // @ts-ignore
    const textWidth = inputRef.value?.value?.length * 8; // Adjust the multiplier according to your font-size
    console.log("textWidth-->>", textWidth)
    if(textWidth === 0){
          // @ts-ignore
      inputRef.value.style.width = "63px";
    }else {
    // @ts-ignore
    inputRef.value.style.width = `${textWidth}px`;
    // euroSign.value.style.position = "absolute"
    euroSign.value.style.left = `${textWidth + 6}px`; // Adjust the positioning as needed
    }   
 }
};

const showEuroSign = computed(() => {
  return selectedNumber.value !== '';
});

</script>

<template>
  <div class="parent">
    <p class="title">Amount</p>

  <div class="input-dropdown">
      <div class="input-wrapper">
        <span>
          <input style="width: 63px;" type="number" v-model="selectedNumber" class="form-control custom-input amount-input" placeholder="|€" @input="updateWidthAndEuroSignPosition"  ref="inputRef">
          <p v-show="showEuroSign" class="euro-sign" ref="euroSign">€</p>
        </span>
        <!-- <span class="euro-sign">€</span> -->
        <span @click="toggleDropdown">
          <BIconChevronDown class="down-icon"/>
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
        <input type="number" v-model="selectedNumber" class="form-control custom-input duration-input" placeholder="0 months">
        <span @click="toggleDropdown">
          <BIconChevronDown class="down-icon"/>
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

.amount-input{
  max-width: 63px;
}

.duration-input{
  max-width: 91px;
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

.input-wrapper{
display: flex;
align-items: center;
position: relative;
}

.arrow-icon{
  background-color: red;
}



input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

.custom-input {
  color: #FDFDFD;
  border: none;
  border-bottom: 1px solid rgba(222, 222, 222, 0.5); /* Bottom border */
  background-color: transparent; /* Transparent background */
  padding: 5px 0; /* Adjust padding as needed */
  width: 100%; /* Ensure the input fills the width */
  border-radius: 0px;
  min-width: 63px
}

.custom-input:focus {
  color: #FDFDFD;
  background-color: transparent;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1); 
  border: none;
  border-bottom: 1px solid #ccc;
}

.custom-input::placeholder {
  color: #FDFDFD; 
  text-align: center;
}

.down-icon{
  color: white;
  margin-left: 13px;
}

.euro-sign {
  color: #FDFDFD;
  font-size: 14px; /* Initial size */
  position: absolute;
  top: 0px;
}

</style>
