<template>
    <div>
        <video
            id="video"
            ref="video"
            @mouseover="playVideo($refs.video)"
            @mouseleave="stopVideo($refs.video)"
            src="@/assets/test-video.webm"
            muted
            loop
        ></video>
    </div>
</template>

<script>
export default {
	name: 'ZanadouVideo',
	props: {
		videoUrl: {
			type: String,
			default: ''
		}
	},
	methods: {
		playVideo(e) {
			e.play()
		},
		stopVideo(e) {
			e.pause()
		}
	}
}
</script>

<style lang="scss" scoped>
#video {
	mask-image: url('../../../assets/zanadou.svg');
	mask-size: contain;
	mask-repeat: no-repeat;
	mask-position: center;

	object-fit: cover;
	width: 20rem;
	height: 20rem;

	transition: all 0.4s ease-in-out;
	background: red;
}
</style>
