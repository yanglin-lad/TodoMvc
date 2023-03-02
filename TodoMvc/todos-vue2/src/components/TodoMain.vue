<template>
  <ul class="todo-list">
    <li v-for="obj in arr" :key="obj.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="obj.isDone">
        <label>{{ obj.name }}</label>
        <button class="destroy" @click="del(obj.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoMain",
  // 通过 props 接收父组件App传过来的 任务列表数组
  props: ["arr"],
  methods: {
    del(id) {
      this.$emit("delFn", id)
    }
  }
}
</script>

<style scoped>

</style>
