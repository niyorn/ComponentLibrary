<template>
    <section class="container-form">
        <form class="form">
            <label>
                <span :class="{active: isActive}" class="label">Email</span>
                <input v-model="email" class="input" type="email" />
            </label>

            <button @click.prevent class="button">Verstuur</button>
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
			}
		}
	}
}

.label {
	width: 100%;
	transform: translate(1rem, 2.4rem);
	transition: transform 0.1s ease-out;
	pointer-events: none;

	&.active {
		transform: translate(0);
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
	background-color: black;
	color: white;
	border: none;
}
</style>