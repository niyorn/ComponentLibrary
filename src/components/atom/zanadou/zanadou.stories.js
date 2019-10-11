/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import zanadou from './Zanadou.vue'

storiesOf('Zanadou', module).add('Default', () => ({
    components: { zanadou },
    template: '<zanadou></zanadou'
}))
