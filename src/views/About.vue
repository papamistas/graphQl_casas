<template>
    <div id="app">
        <AdvancedSearch/>
        <Search/>
        <h3>Example 1</h3>
        <v-btn @click="getLanguage" color="success">Success</v-btn>

        <div v-if="casas">
            <Results v-bind:casas="this.casas"></Results>

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
        </div>


        <hr>
    </div>
</template>
<script>
    import axios from 'axios';
    import Search from "../components/Search";
    import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
    import Results from "../components/Results/Results";

    export default {
        name: 'app',
        components: {
            Results,
            AdvancedSearch,
            Search: Search
        },

        data() {
            return {
                casas: this.$store.casas
            }
        },
        /*created() {
            this.rand = Math.round(Math.random() * 1000)
            this.getLanguage()
        },*/

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
      titulo
          seo_title
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
                    this.casas = res.data.data.casas;
                    //Results.$forceUpdate();
                    this.$store.casas = this.casas
                } catch (e) {
                    console.log('err', e)
                }
            }
        }
    }

</script>
