/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import Zanadou from '../Zanadou.vue'
import ZanadouVideo from '../ZanadouVideo.vue'

storiesOf('Zanadou', module)
    .add('Default', () => ({
        components: { Zanadou },
        data() {
            return {
                imageUrl:
                    'http://www.artres.com/Doc/ART/Media/TR3/S/K/C/L/ART138918.jpg'
            }
        },
        template: '<zanadou :imageUrl="imageUrl"></zanadou>'
    }))
    .add('Gif', () => ({
        components: { Zanadou },
        data() {
            return {
                imageUrl:
                    'https://media3.giphy.com/media/8zT0D36Myf9C0/giphy.gif?cid=790b76118e7a1ce87d6dfae53f266a1da20d53c4f4dc4437&rid=giphy.gif'
            }
        },
        template: '<zanadou :imageUrl="imageUrl"></zanadou>'
    }))
    .add('Video', () => ({
        components: { ZanadouVideo },
        data() {
            return {
                videoUrl: '~/assets/test-video.webm'
            }
        },
        template:
            '<div> play video on hover<zanadouVideo :videoUrl="videoUrl"></zanadouVideo></div>'
    }))
