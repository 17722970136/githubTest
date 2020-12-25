<template>
<!-- About.vue -->
  <div class="about">
    <h1>This is an about page</h1>
    {{lastName}}
    <div>{{fullName}}</div>
    <div>{{this.$store.state.stateNumber}}</div>
    <div class="test" @click="testFun('触发成功')">{{computedName}}</div>
    <button @click="emitMatution">点击触发mutation的方法</button>
    
    <login @emitParentFun="test" :parentValue="name" v-model="pModel"></login>

    <div class="">我是vuex中的state里的<span style="color:red;">{{stateCount}}</span></div>
    <div class="">我是vuex中的state里的{{stateList}}</div>
    <button @click="addVuxCount">点击我增加vuexstate里count的数值</button>


  </div>
</template>
<script lang="ts">
  import { mapMutations } from 'vuex'
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import login from '@/components/login.vue'
  // 使用 vuex
  import {aboutStore} from '@/storeTs/module/About';
  @Component({
    components:{
      login,
    }
  })
  export default class About extends Vue {
    name: string | number = 'typeScript';
    fullName: string = '一百';
    pModel: string = '你好我是父组件的model';
    testFun(testMsg: any) {
      // console.log(testMsg)
      // this.$router.push({path:'/',query:{type:'typeScript'}})
      this.name = 100

    }
    // get vuex state 里的值
    get stateCount() {
      return aboutStore.count;
    }

    get computedName() {
      return this.name;
    }
  // 暂时不清楚
  //  set computedName(val: any) {
  //     console.log(val+'set val')
  //   }

    @Watch('stateCount',{immediate:true,deep:false})
    onstateCount(val: any) {
        console.log(val)
        this.name = 'typescript我改名了'
    }

    get stateList() {
      return aboutStore.list;
    }

    // 子组件触发的方法
    test(msg: any) {
      console.log(msg)
    }

    emitMatution(){
      let newP = document.createElement('p')
          newP.innerHTML='我是新加入的'
      document.body.appendChild(newP)
     this.$store.commit('mutationTest',function(m: any){
       console.log(m)
     })
    }

    
    get lastName(){
      return this.name + ' ' + this.fullName;
    }

  // 增加vuexSateCount的值
  addVuxCount() {
    aboutStore.addCount(1);
  }
  // 触发vuex更新值
  mounted() {
    aboutStore.getList();
  }



  }
</script>
<style scoped>
.test:hover{
  cursor:pointer;
}

</style>