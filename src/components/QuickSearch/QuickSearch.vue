<template>
    <v-toolbar
            dark
            color="teal"
    >
        <v-toolbar-title>State selection</v-toolbar-title>
        <v-autocomplete
                v-model="select"
                :loading="loading"
                :items="items"
                :search-input.sync="search"
                cache-items
                class="mx-3"
                flat
                hide-no-data
                hide-details
                label="What state are you from?"
                solo-inverted
        ></v-autocomplete>
        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name:"QuickSearch",
        data () {
            return {
                loading: false,
                items: [],
                search: null,
                select: null,
                states: [
                    'Alabama',
                    'Alaska',
                    'American Samoa',
                    'Arizona',
                    'Arkansas',
                    'California',
                    'Colorado',
                    'Connecticut',
                    'Delaware',
                    'District of Columbia',
                    'Federated States of Micronesia',
                    'Florida',
                    'Georgia',
                    'Guam',
                    'Hawaii',
                    'Idaho',
                    'Illinois',
                    'Indiana',
                    'Iowa',
                    'Kansas',
                    'Kentucky',
                    'Louisiana',
                    'Maine',
                    'Marshall Islands',
                    'Maryland',
                    'Massachusetts',
                    'Michigan',
                    'Minnesota',
                    'Mississippi',
                    'Missouri',
                    'Montana',
                    'Nebraska',
                    'Nevada',
                    'New Hampshire',
                    'New Jersey',
                    'New Mexico',
                    'New York',
                    'North Carolina',
                    'North Dakota',
                    'Northern Mariana Islands',
                    'Ohio',
                    'Oklahoma',
                    'Oregon',
                    'Palau',
                    'Pennsylvania',
                    'Puerto Rico',
                    'Rhode Island',
                    'South Carolina',
                    'South Dakota',
                    'Tennessee',
                    'Texas',
                    'Utah',
                    'Vermont',
                    'Virgin Island',
                    'Virginia',
                    'Washington',
                    'West Virginia',
                    'Wisconsin',
                    'Wyoming'
                ]
            }
        },
        watch: {
            search (val) {
                val && val !== this.select && this.querySelections(val)
            }
        },
        methods: {
            querySelections (v) {
                this.loading = true
                // Simulated ajax query
                setTimeout(() => {
                    this.items = this.states.filter(e => {
                        return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                    })
                    /*if (is_numeric($term)) {
                        $sql = 'SELECT DISTINCT cod_casa,tipo,tipoalojamento FROM casa where cod_casa LIKE :name and activo=1';
                    } else {
                        $sql = 'SELECT DISTINCT localidade, concelho,pais,count(cod_casa) as ncasas FROM casa where LCASE(localidade) LIKE :name and activo=1 group by localidade, concelho,pais';
                    }
                    // test table is for the sake of this example
                    $cmd = Yii::app()->db->createCommand($sql);
                    $cmd->bindValue(":name", "%" . strtolower($term) . "%", PDO::PARAM_STR);
                    $res = $cmd->queryAll();*/
                    this.loading = false
                }, 500)
            }
        }
    }
</script>
