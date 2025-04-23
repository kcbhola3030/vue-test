<template lang="">
    <div>
        Cars
        <div>
            <h2>Car Details</h2>
            <p>Car Name: {{ this.$store.state.carName }}</p>
            <p>Car Model: {{ this.$store.state.carModel }}</p>
            <p>Car Nick: {{ this.$store.state.carNick }}</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>