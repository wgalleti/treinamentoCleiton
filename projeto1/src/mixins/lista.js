export default {
  data () {
    return {
      dados: [],
      itensLista: [
        { nome: '#', campo: 'id' },
        { nome: 'Nome', campo: 'nome' },
        { nome: 'Email', campo: 'email' },
        { nome: 'Telefone', campo: 'telefone' },
        { nome: 'Endereço', campo: 'endereco' },
        { nome: 'Estado', campo: 'estado' }
      ]
    }
  },
  methods: {
    recarregar () {
      this.dados = [
        { id: 1, nome: 'William', email: 'william@email.com', telefone: '99999', endereco: 'Av. alguma coisa' },
        { id: 2, nome: 'Cleiton', email: 'cleiton@email.com', telefone: '99999', endereco: 'Av. alguma coisa' },
        { id: 3, nome: 'Jose', email: 'ze@email.com', telefone: '99999', endereco: 'Av. alguma coisa' }
      ]
    }
  }
}
