import Vue from 'vue'
import HelloWorld from './HelloWorld'
import Crud from './Crud'
import Navbar from './Navbar'

// Bootstrap Componentes
import BootstrapCrud from './boostrap/Crud'

Vue.component('c-hello-world', HelloWorld)
Vue.component('c-navbar', Navbar)
Vue.component('c-crud', Crud)
Vue.component('bs-c-crud', BootstrapCrud)
