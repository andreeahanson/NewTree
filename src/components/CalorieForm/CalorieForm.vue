<template>
  <form @submit="calculateCalories">
    <input type="text" placeholder="Add ingredient" name="ingredient" />
    <input type="number" placeholder="Add quantity" name="quantity" v-model="quantity" />
    <select>
      <option>unit of measurement</option>
      <option>oz</option>
      <option>fl oz</option>
      <option>g</option>
      <option>ml</option>
    </select>
    <button>Calculate</button>
  </form>
</template>

<script>
export default {
  name: "CalorieForm",
  methods: {
    calculateCalories(e) {
      e.preventDefault();
      let quantity = this.quantity;
      console.log(`The quantity you added is ${quantity}`)
    }
    }
};
</script>

<style scoped>
input {
  background: greenyellow;
  width: 100px;
}
button {
  width: 60px;
}
</style>
