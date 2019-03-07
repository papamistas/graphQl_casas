<template>
    <div>
<QuickSearch></QuickSearch>
        <div v-if="this.$store.casas">
            <Results v-bind:casas="this.$store.casas"></Results>
        </div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";
    import Search from "../components/Search";
    import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
    import Results from "../components/Results/Results";
    import QuickSearch from "../components/QuickSearch/QuickSearch";
    import Casa from "../components/Casa/Casa";
    export default {
        name: "home",

        components: {
            Results,
            AdvancedSearch,
            Search,
            HelloWorld,
            QuickSearch,
            Casa
        },

    };
</script>
