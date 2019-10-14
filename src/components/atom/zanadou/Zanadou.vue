<template>
    <div>
        <img id="img" :src="imageUrl" alt />
    </div>
</template>

<script>
export default {
    name: 'Zanadou',
    props: {
        imageUrl: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
#img {
    mask-image: url('../../../assets/zanadou.svg');
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;

    object-fit: cover;
    width: 20rem;
    height: 20rem;

    transition: all 0.4s ease-in-out;

    &:hover {
        animation-play-state: paused;
    }
}
</style>
