<template lang="">
    <div>
        Give Cars
        <form @submit.prevent="submitForm">
            <div>
                <label for="carName">Car Name:</label>
                <input type="text" id="carName" v-model="localCarName" name="carName" required>
            </div>
            <div>
                <label for="carModel">Car Model:</label>
                <input type="text" id="carModel" v-model="localCarModel" name="carModel" required>
            </div>
            <div>
                <label for="carNick">Car Character Name:</label>
                <input type="text" id="carNick" v-model="localCarNick" name="carNick" required>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
        
</template>
<script>
export default {
    name: 'GiveCars',
    data() {
        return {
            localCarName: '',
            localCarModel: '',
            localCarNick: ''
        }
    },
    methods: {
        submitForm() {
            this.$store.commit('setCarName', this.localCarName)
      this.$store.commit('setCarModel', this.localCarModel)
      this.$store.commit('setCarNick', this.localCarNick)
            // Handle form submission
            // $store.commit('setCarName', this.localCarName);
            // $store.commit('setCarModel', this.localCarModel);
            // $store.commit('setCarNick', this.localCarNick);
            // console.log('Form submitted:', this.localCarName, this.localCarModel, this.localCarNick);
            // console.log(this.$store.state.carName);

        }
    }
    
}
</script>
<style lang="">
    
</style>