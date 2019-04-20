import Vue from 'vue'
import HelloWorld from './HelloWorld'
import Crud from './Crud'
import Navbar from './Navbar'

// Bootstrap Componentes
import BootstrapCrud from './boostrap/Crud'
import BootstrapCrudStore from './boostrap/CrudStore'

Vue.component('c-hello-world', HelloWorld)
Vue.component('c-navbar', Navbar)
Vue.component('c-crud', Crud)
Vue.component('bs-c-crud', BootstrapCrud)
Vue.component('bs-c-crud-store', BootstrapCrudStore)
