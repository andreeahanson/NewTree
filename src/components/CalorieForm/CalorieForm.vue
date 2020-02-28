<template>
  <form>
    <input type="text" placeholder="Add ingredient" name="ingredient" />
    <input type="number" placeholder="Add quantity" name="quantity" />
    <input type="select" placeholder="unit of measure" name="unit" />
    <button>Calculate</button>
  </form>
</template>

<script>
export default {
  name: "CalorieForm"
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
