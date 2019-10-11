<template>
    <div class="home">
        <Zanadou></Zanadou>
    </div>
</template>

<script>
// @ is an alias to /src
import Zanadou from '@/components/atom/zanadou/Zanadou.vue'

export default {
	name: 'home',
	components: {
		Zanadou
	}
}
</script>
