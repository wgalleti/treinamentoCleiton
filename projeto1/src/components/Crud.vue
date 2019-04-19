<template>
  <div id="crud">
    <button @click="recarregar">Recarregar</button>
    <form @submit.prevent="salvar">
      <input
        type="text"
        v-model="form[campo.campo]"
        :placeholder="campo.nome"
        v-for="campo in camposFormulario"
        :key="campo.nome">
      <button type="submit">Salvar</button>
    </form>
    <hr v-if="!isEdit">
    <table v-if="!isEdit && dados.length > 0" >
      <thead>
        <tr>
          <th
            v-for="campo in itensLista"
            :key="campo.nome"
          >
            {{campo.nome}}
          </th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in dados" :key="d.id">
          <td
            v-for="campo in itensLista"
            :key="campo.nome"
          >
            {{d[campo.campo]}}
          </td>
          <td>
            <button @click="editar(d)">Editar</button>
            <button @click="apagar(d)">Apagar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div style="background-color: red; color: white;" v-else>
      Não há dados
    </div>
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
      isEdit: false
    }
  },
  computed: {
    camposFormulario () {
      if (this.escondeIDForm) {
        return this.itensLista.filter(f => f.campo !== 'id')
      }
      return this.itensLista
    },
    itensLista () {
      if (this.dados.length === 0) return []

      return Object.keys(this.dados[0]).map(m => {
        let obj = {}
        obj['nome'] = m
        obj['campo'] = m
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
    }
  }
}
</script>
