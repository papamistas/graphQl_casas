

<template>
  <div id="app">
    <h3>Example 1</h3>
    <div>
      Data: {{ example1 }}
    </div>
    <button @click="getLanguage">Get Language</button>
    <hr> 
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      example1: ''
    }
  },
  methods: {
    async getLanguage () {
      try {
        const res = await axios.post(
          'http://localhost:7000/graphql', {
          query: `{
    casas {
      cod_casa
      designacao
      destino
      destino_complex
        periodos {
          id 
          inicio
          fim
          precoSemana
        }
        feedbacks {
          comment
          valor_voto
          
        }
    
  }
}`
          
        })
        this.example1 = res.data.data.language
      } catch (e) {
        console.log('err', e)
      }
    }
  }
}
</script>
