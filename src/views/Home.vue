<template>
    <div>

        <QuickSearch></QuickSearch>

        <a href="/auth/facebook">Login with Facebook</a>
        <a href="/auth/google">Login with google</a>

        <button v-on:click="signinFb">login FB</button>
        <form action="/auth/login" method="post">
            <div>
                <label>Username:</label>
                <input type="text" name="username"/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password"/>
            </div>
            <div>
                <input type="submit" value="Log In"/>
            </div>
        </form>
        <div v-if="this.$store.casas">
            <Results v-bind:casas="this.$store.casas"></Results>
        </div>
        <Signin></Signin>
        <hr>
        <hr>
        <Signup></Signup>
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
    import Signin from "../components/Signin/Signin";
    import Signup from "../components/Signup/Signup";
    export default {
        name: "home",
        components: {
            Results,
            AdvancedSearch,
            Search,
            HelloWorld,
            QuickSearch,
            Casa,
            Signin,
            Signup,
        },
        methods:{
            signinFb: function (event) {
                debugger;
               this.$http
                    .post('/auth/facebook',{ crossdomain: true })
                    .then(response => (this.info = response))
            }
        }

    };
</script>
