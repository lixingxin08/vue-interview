<template>
  <div class="test">
    <div>
      平均值: {{getAverage||0}}
    </div>
    <button @click="update()">加载更多</button>
    <div class="list" v-for="(item,index) in dataList" :key="index">
      <div class="list-item">id:{{item.id}}</div>
      <div class="list-item">data:{{item.data}}</div>
      <div class="list-item">time:{{item.time|formatDate}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import dateFormat from '../Date.js'
export default {
  name: 'test',
  data () {
    return {
      ssss: []
    }
  },
  computed: {
    ...mapState(['dataList']),
    ...mapGetters(['getAverage'])
  },
  methods: {
    ...mapActions(['getDataCall']),
    update () {
      let startIndex = 0
      let number = 15
      startIndex++
      this.getDataCall(startIndex, number)
    }
  },
  created () {
    this.getDataCall()
  },
  filters: {
    formatDate (time) {
      let date = new Date(time)
      return dateFormat.formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped lang="less">

.test{

  .list{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
   align-items: center;
  }
  button{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
}

</style>
