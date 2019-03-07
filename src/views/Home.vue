<template>
    <div>
        <Results></Results>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";
    import Search from "../components/Search";
    import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
    import Results from "../components/Results/Results";

    export default {
        name: "home",
        components: {
            Results,
            AdvancedSearch,
            Search,
            HelloWorld
        },

    };
</script>
