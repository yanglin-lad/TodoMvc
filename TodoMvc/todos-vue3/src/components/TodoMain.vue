<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
        :class="{completed: item.flag}"
        v-for="item in props.taskList"
        :key="item.id"
    >
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.flag" />
        <label>{{ item.name }}</label>
        <button @click="delTask(item.id)" class="destroy"></button>
      </div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  taskList: Array
})
const emit = defineEmits(['delTaskFn'])

const delTask = (id) => {
  emit('delTaskFn', id)
}
</script>

<style scoped>
</style>
