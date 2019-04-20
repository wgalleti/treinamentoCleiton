<template>
  <div id="crud">
    <b-button @click="recarregar" variant="info">Recarregar</b-button>
    <b-button @click="modalForm = true" variant="success">Adicionar</b-button>
    <b-modal
      v-model="modalForm"
      no-close-on-backdrop
      no-close-on-esc
      hide-header
      hide-footer
    >
      <form @submit.prevent="salvar">
        <b-alert :show="error.has" variant="danger">
          <ul>
            <li v-for="err in error.errors" :key="err.message">{{err.message}}</li>
          </ul>
        </b-alert>
        <b-form-group
          :label="campo.label"
          :label-for="campo.label"
          :description="`Preencha o campo ${campo.label}`"
          v-for="campo in camposFormulario"
          :key="campo.key"
        >
          <b-form-input
            id="input-1"
            v-model="form[campo.key]"
            type="text"
            required
            :placeholder="campo.label"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success">Salvar</b-button>
      </form>
    </b-modal>

    <b-table
      striped
      hover
      :items="dados"
      :fields="fields">
      <template slot="actions" slot-scope="row">
        <b-button size="sm" @click="editar(row.item)" class="mr-1">
          Editar
        </b-button>
        <b-button size="sm" @click="apagar(row.item)" class="mr-1">
          Apagar
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    dados: {
      type: Array,
      default: () => []
    },
    escondeIDForm: {
      type: Boolean,
      default: true
    },
    apiRecarregar: {
      type: String,
      required: true
    },
    apiApagar: {
      type: String,
      required: true
    },
    apiSalvar: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      form: {},
      error: {
        has: false,
        errors: [
          { message: 'Ocorreu um erro inesperado' }
        ]
      },
      modalForm: false,
      isEdit: false
    }
  },
  computed: {
    camposFormulario () {
      if (this.escondeIDForm) {
        return this.itensLista.filter(f => f.key !== 'id')
      }
      return this.itensLista
    },
    fields () {
      let dataFields = this.itensLista
      dataFields.push({ key: 'actions', label: 'Actions' })
      return dataFields
    },
    itensLista () {
      if (this.dados.length === 0) return []

      return Object.keys(this.dados[0]).map(m => {
        let obj = {}
        obj['label'] = m
        obj['key'] = m
        return obj
      })
    }
  },
  methods: {
    recarregar () {
      this.$store.dispatch(this.apiRecarregar)
    },
    apagar (instancia) {
      if (confirm(`Tem certeza que quer apagar o ${instancia.nome}`)) {
        this.$store.dispatch(this.apiApagar, instancia)
      }
    },
    editar (instancia) {
      this.modalForm = true
      this.isEdit = true
      this.form = instancia
    },
    async salvar () {
      let data = this.form
      if (!this.isEdit) {
        data = { ...this.form, id: 0 }
      }
      try {
        await this.$store.dispatch(this.apiSalvar, data)
        this.form = {
          nome: ''
        }
        this.isEdit = false
        this.modalForm = false
      } catch (e) {
        let dataErros = e.response.data
        this.error.has = true
        this.error.errors = Object.keys(dataErros).map(m => {
          return { message: `Falha no campo ${m}, Erro: ${dataErros[m][0]}` }
        })
      }
    }
  },
  mounted () {
    this.recarregar()
  }
}
</script>
