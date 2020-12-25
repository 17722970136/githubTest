<template>
    <div class="login">
        <h1>我是新加入的登录组件</h1>
        <button @dblclick="parentFun">双击击我触发父组件的方法</button>
        <div>父组件传来的数据{{parentValue}}</div>
        <div>我是父组件传来的且经过watch监听过的数值是{{computedName}}</div>
        <div>@model{{value}}</div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Emit, Prop, Watch, Model } from 'vue-property-decorator';

    @Component
    export default class Login extends Vue {
        childMsg: string | number = '子组件传给父组件的数值';
        friName: string = '原始的name';
        parentName: string = '空的'
        // 触发父组件方法
        @Emit('emitParentFun')
        private parentFun(){
            return this.childMsg
        }
        // 计算属性 get = computed:{get(){}}
        get computedName(){
            return this.parentName;
        }
        // @Prop = prop:{}
        @Prop(String)
        parentValue!: string;

        // wathc 监听
        @Watch('parentValue',{immediate:true,deep:false})
        onchangeWatch(val: string,oldVal: string){
            console.log(`新数据：${val}-----旧数据：${oldVal}`)
            this.parentName = val
        }
        // @Model = model:{prop:'',event:''} 和父组件绑定的v-mode双向绑定

        @Model('parentMsg') value: any;

        // private mounted(){
        //     console.log(this.parentName)
        // }
    }

</script>