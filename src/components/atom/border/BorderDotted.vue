<template>
    <div class="container dotted"></div>
</template>

<script>
export default {
    name: 'BorderDotted'
}
</script>

<style lang="scss" scoped>
.container {
    width: 20rem;
    height: 20rem;
    background-color: black;
    box-sizing: border-box;
    margin: 1rem;
}

.dotted {
    outline: 1rem white dotted;
    outline-offset: -0.5rem;
}
</style>
