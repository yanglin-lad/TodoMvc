<template>
  <header class="header">
    <!-- 标题 -->
    <h1>todos</h1>
    <!-- 输入框、文本框 -->
    <!--   全选框 -->
    <input
        v-model="isAll"
        type="checkbox"
        id="toggle-all"
        class="toggle-all"
    >
    <label for="toggle-all"></label>
    <!--   输入框 -->
    <input
        v-model="task"
        class="new-todo"
        type="text"
        placeholder="请输入任务名-回车确认"
        @keydown.enter="downFn"
        autofocus
    >
  </header>
</template>

<script>

export default {
  name: "TodoHeader",
  data() {
    return {
      // isAll: true,
      task: ""
    }
  },
  props: ['arr'],
  methods: {
    // 新增任务
    downFn() {
      if (this.task.trim().length === 0) return alert("任务名不能为空！！！")
      this.$emit('create', this.task)
      // console.log(this.task, 'renwu')
      this.task = ""
    }
  },
  computed: {
    isAll: {
      // 如果没有数据 直接返回false，
      // every，一假即假
      get() {
        return this.arr?.length !== 0 && this.arr?.every(obj => obj.isDone === true)
      },
      // 全选 影响每一项的选择
      set(checked) {
        if (this.arr) {
          this.arr.forEach(item => item.isDone = checked)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
