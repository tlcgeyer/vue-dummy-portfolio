<template> <!--vbase(for layout)-->
    <div class="container">
        <div class="row">
            <p class="lead">
                Tamlin's Portfolio &copy; 
                <span>{{ currYear }}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComp',
        data() {
            return {
                currYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>