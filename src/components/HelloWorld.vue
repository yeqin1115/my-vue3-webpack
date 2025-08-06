<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: "HelloWorld",

  setup(props, context) {
    console.log(context);
    console.log(props);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
