<template >
    <div>
        <div id="roll"> {{roll}}</div>
        <button @click="changeRoll" id="change-roll">Change Roll No</button>
        <button @click="increase" id="increase">Increment Count</button>
      <div id="count">
          <div  v-if ="count%2==0">
            Count : {{count}} is even
          </div>
          <div v-else>
            Count : {{count}} is odd
          </div>
      </div>
    </div>
</template>
<script>
export default {
    props: ['count','roll'],
    methods: {
        increase() {
            this.$emit('childIncrease', this.count+1);
        },
        changeRoll() {
            // eslint-disable-next-line vue/no-mutating-props
            this.$emit('change-roll-from-child', this.roll + 1454);
        }
    },
}
</script>
<style lang="">
    
</style>