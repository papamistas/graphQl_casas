<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-toolbar color="pink" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>Inbox</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>check_circle</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-list two-line>
                    <template v-for="(item, index) in casas2">
                        <v-list-tile :key="index" avatar ripple>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.cod_casa }}</v-list-tile-title>
                                <v-list-tile-sub-title class="text--primary">{{ item.designacao }}</v-list-tile-sub-title>
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                                <v-icon color="grey lighten-1">star_border</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-divider v-if="index + 1 < casas.length" :key="`divider-${index}`"></v-divider>
                    </template>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>


</template>

<script>
    export default {

        props: ['casas'],
        data() {

            return {
                casas2: this.casas
            }
        },
    };
</script>
