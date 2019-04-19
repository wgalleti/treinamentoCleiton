export default {
  data () {
    return {
      nomeQualquer: 'Fulano de tal'
    }
  },
  methods: {
    mostrarNomeQualquer () {
      alert(this.nomeQualquer)
    }
  },
  created () {
    console.log(`Criou o componente ${new Date()}`)
  },
  mounted () {
    console.log(`Montou o componente ${new Date()}`)
  }
}
