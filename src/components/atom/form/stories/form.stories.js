/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import Form from '../Form.vue'

storiesOf('Form', module).add('Default', () => ({
    components: { Form },
    data() {
        return {
            imageUrl:
                'http://www.artres.com/Doc/ART/Media/TR3/S/K/C/L/ART138918.jpg'
        }
    },
    template: '<Form></Form>'
}))
