<template>
  <header class="header">
    <h1>todos</h1>
    <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        v-model="isAll"
    >
    <label for="toggle-all"></label>
    <input
        class="new-todo"
        placeholder="输入任务名称-回车确认"
        autofocus
        v-model="taskName"
        @keydown.enter="addTask"
    />
  </header>
</template>

<script setup>
import {computed, ref} from "vue";

const emit = defineEmits(['addTaskFn'])

const taskName = ref('')
const addTask = () => {
  if (taskName.value.trim().length === 0) return alert('不能为空')
  emit('addTaskFn', taskName.value)
  taskName.value = ''
}

const props = defineProps(['arr'])
// 全选反选
const isAll = computed({
  get() {
    return props.arr.every(item => item.flag)
  },
  set(checked) {
    props.arr.forEach(item => item.flag = checked)
  }
})
</script>

<style scoped>

</style>
