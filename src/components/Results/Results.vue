<template>
    <div class="Results">
        <Result v-bind:casas="this.casas23"></Result>
    </div>
</template>

<script>
    import Result from "../Result/Result";
    export default {
        components: {Result},

        props: ['casas'],
        data() {

            return {
                casas23: this.casas
            }
        },
        created: function () {
            console.log('user data from parent component:')
            console.log(this.casas) //prints out an empty string
        }

    };
</script>
