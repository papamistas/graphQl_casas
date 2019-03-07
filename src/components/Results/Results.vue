<template>
    <div class="Results">
        <Result v-bind:casas="this.casastest"></Result>
    </div>
</template>

<script>
    import Result from "../Result/Result";
    export default {
        components: {Result},

        props: ['casas'],
        data() {

            return {
                casastest: this.casas
            }
        },
        created: function () {
            console.log('user data from parent component:')
            console.log(this.casas) //prints out an empty string
        }

    };
</script>
