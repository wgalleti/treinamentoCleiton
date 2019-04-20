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
    }
  },
  data () {
    return {
      form: {},
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
      this.$emit('reload')
    },
    apagar (instancia) {
      if (confirm(`Tem certeza que quer apagar o ${instancia.nome}`)) {
        this.dados.splice(this.dados.indexOf(instancia), 1)
      }
    },
    editar (instancia) {
      this.modalForm = true
      this.isEdit = true
      this.form = instancia
    },
    salvar () {
      if (!this.isEdit) {
        this.dados.push({ ...this.form, id: this.dados.length + 1 })
      }
      this.form = {
        nome: ''
      }
      this.isEdit = false
      this.modalForm = false
    }
  }
}
</script>
