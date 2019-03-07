<template>
    <div id="app">
<AdvancedSearch/>
        <Search/>
        <h3>Example 1</h3>
        <div>


            <div id="results">
                <div v-for="casa in casas">
                    <span>
                        {{ casa.cod_casa }}
                        </span>
                    <span>
                        {{ casa.designacao }}
                        </span>
                    <span>
                        {{ casa.destino_complex }}
                        </span>

                    <div v-for="periodo in casa.periodos">
                        <span>
                        {{ periodo.inicio }}
                        </span>
                        <span>
                        {{ periodo.fim }}
                        </span>
                        <span>
                        {{ periodo.precoSemana }}
                        </span>
                    </div>
                    <div v-for="feedback in casa.feedbacks">
                        <span>
                        {{ feedback.inicio }}
                        </span>
                        <span>
                        {{ feedback.fim }}
                        </span>
                        <span>
                        {{ feedback.precoSemana }}
                        </span>
                    </div>

                </div>
            </div>

        </div>
        <button @click="getLanguage">Get Language</button>
        <hr>
    </div>
</template>
<script>
    import axios from 'axios';
    import Search from "../components/Search";
    import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";

    export default {
        name: 'app',
        components: {
            AdvancedSearch,
Search: Search
        },
        data() {
            return {
                casas: this.casas
            }
        },
        created(){
            this.getLanguage()
        },
        methods: {
            async getLanguage() {
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
                    this.casas = res.data.data.casas
                } catch (e) {
                    console.log('err', e)
                }
            }
        }
    }

</script>
