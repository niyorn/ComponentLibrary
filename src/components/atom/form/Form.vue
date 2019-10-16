<template>
    <section class="container-form">
        <form class="form">
            <label>
                <span :class="{ active: isActive }" class="label">e-mailadres</span>
                <input v-model="email" class="input" type="email" />
            </label>

            <button @click.prevent class="button">Inschrijven</button>
        </form>
    </section>
</template>

<script>
export default {
	name: 'Form',
	data() {
		return {
			email: ''
		}
	},
	computed: {
		isActive() {
			if (this.email !== '') {
				return true
			} else {
				return false
			}
		}
	},
	methods: {
		clicked() {
			this.$emit('click', this.email)
		}
	}
}
</script>

<style lang="scss" scoped>
.container-form {
	width: 20rem;
}

.form {
	display: flex;
	flex-wrap: wrap;

	label {
		position: relative;

		display: flex;
		flex-wrap: wrap;
		width: 100%;
		justify-content: center;
		align-items: center;

		&:focus-within {
			.label {
				transform: translate(0);
				font-size: 1rem;
				color: black;
			}
		}
	}
}

.label {
	width: 100%;
	transform: translate(1rem, 2.4rem);
	transition: transform 0.1s ease-out;
	pointer-events: none;
	color: rgb(144, 144, 144);
	font-size: 1.2rem;

	&.active {
		transform: translate(0);
		font-size: 1rem;
		color: black;
	}
}

.input {
	width: 100%;
	margin-top: 0.4rem;
	padding: 0.5rem 1rem;

	font-size: 1.4rem;
}

.button {
	margin-top: 1rem;
	padding: 1rem;
	font-size: 1.1rem;
	font-weight: bold;
	background-color: #dd5762;
	width: 100%;
	color: white;
	border: none;
}
</style>
