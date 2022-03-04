require('./bootstrap');

import Vue from 'vue';
// vue component
import App from './vue/app.vue';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare,faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)



// vue instance for the app in welcome blade
const app = new Vue({
    el:'#app',
    components:{App},
    template:'<App/>'
});
