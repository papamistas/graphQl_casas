

<template>
  <div id="app">
<advanced-search></advanced-search>
    <Search/>

    <h3>Example 1</h3>
    <div>
      Data: {{ example1 }}
    </div>
    <button @click="getLanguage">Get Language</button>
    <hr> 
  </div>
</template>
<script>
import axios from "axios";
import Search from "../components/Search";
import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
export default {
  name: 'app',
  components: {
    AdvancedSearch,
    Search: Search
  },
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
