/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import BorderDotted from '../BorderDotted.vue'

storiesOf('Border', module).add('Dotted', () => ({
    components: { BorderDotted },
    template: '<BorderDotted></BorderDotted>'
}))
