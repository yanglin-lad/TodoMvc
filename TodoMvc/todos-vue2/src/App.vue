<template>
  <section class="todoapp">
    <TodoHeader :arr="list" @create="createFn" />
    <TodoMain :arr="showArr" @delFn="delTask" />
    <TodoFooter :arr="list" :fooArr="showArr" @changeFn="typeFn" @clear="clearFn" />
  </section>
</template>

<script>

// 引入组件
import TodoHeader from "@/components/TodoHeader.vue";
import TodoMain from "@/components/TodoMain.vue";
import TodoFooter from "@/components/TodoFooter.vue";
// 引入样式
import "./styles/base.css"
import "./styles/index.css"

export default {
  // 注册组件
  components: {TodoFooter, TodoMain, TodoHeader},
  data() {
    return {
      // list: [
      //   {id: 100, name: "吃饭", isDone: true},
      //   {id: 101, name: "睡觉", isDone: false},
      //   {id: 102, name: "打豆豆", isDone: true}
      // ],
      list: JSON.parse(localStorage.getItem('taskList')) || [],
      getSel: 'all' // 默认是全选
    }
  },
  methods: {
    // 添加任务
    createFn(taskName) {
      // 将任务添加到数组中
      let id = this.list.length === 0 ? 100 : this.list[this.list.length - 1].id + 1
      this.list.push({
        id: id,
        name: taskName,
        isDone: false
      })
    },
    // 删除任务
    delTask(id) {
      // console.log('删除的', id)
      this.list = this.list.filter(item => item.id !== id)
    },
    // 改变选择类型
    typeFn(src) {
      this.getSel = src
    },
    // 清除已完成
    clearFn() {
      this.list = this.list.filter(item => item.isDone === false)
    }
  },
  computed: {
    // showArr 数组，根据选择的类型 得到不同的显示数组
    showArr() {
      if (this.getSel === 'no') {
        return this.list.filter(item => item.isDone === false)
      } else if (this.getSel === 'yes') {
        return this.list.filter( item => item.isDone === true)
      } else {
        return this.list
      }
    }
  },
  watch: {
    list: {
      deep: true,
      handler() {
        // 只要 list数组变化，就往本地存储，覆盖之前的数据
        localStorage.setItem('taskList', JSON.stringify(this.list))
      }
    }
  }
}
</script>

<style>

</style>
