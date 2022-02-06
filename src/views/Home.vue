<template>
  <div>
    <div @click="goVersion1">
      <v-btn>Typing-game version1~</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {
    },
    methods: {
      goVersion1 () {
        this.$router.push({name:'Version1'})
      }
    }
  }
</script>
