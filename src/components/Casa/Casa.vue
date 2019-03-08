<template v-if="codCasa">
    <div class="Casa">
        CASA scrollspy???
        <span>{{ codCasa }}</span>

        <CasaImages></CasaImages>
        <span>{{ casa.titulo }}</span>
<CasaDocs></CasaDocs>
    </div>
</template>

<script>
    import CasaImages from "../CasaImages/CasaImages";
    import CasaDocs from "../CasaDocs/CasaDocs";
    export default {
        name:"Casa",
        components:{
           CasaImages,
            CasaDocs
        },

        props: ['codCasa','casa'],
    };
</script>