<template>
    <div class="Casa">
        CASA scrollspy???
        <CasaImages></CasaImages>
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
        props: {
        },
    };
</script>