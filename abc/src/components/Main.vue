<template>
  <div>
    *****
    {{ word.word_id }}
    <Button @click="updateWord">UpdateWord</Button>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "Main",

  data () {
    this.getWord();
    return {
      msg: "",
      word: {
        word_id: "",
        trans_1: ""
      },
      wordList: [

      ]
    }
  },
  methods: {
    getWord() {
      this.axios.get('/testBoot/getAllWord').then((response)=>{
        this.word = response.data[0];
      }).catch((response)=>{
        console.log("this is catch");
        console.log(response);
      })
    },
    updateWord() {
      this.axios.get('/testBoot/updateWord').then((response)=>{
        this.msg = response.data;
        console.log(response);
      }).catch((response)=>{
        console.log("this is catch");
        console.log(response);
      })

    }
  },

}
</script>

<style>

</style>