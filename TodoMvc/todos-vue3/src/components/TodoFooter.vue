<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{ num }}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{selected: props.select === 'all'}" href="javascript:;" @click="changeType('all')">全部</a>
      </li>
      <li>
        <a :class="{selected: props.select === 'no'}" href="javascript:;" @click="changeType('no')">未完成</a>
      </li>
      <li>
        <a :class="{selected: props.select === 'yes'}" href="javascript:;" @click="changeType('yes')">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearFn" >清除已完成</button>
  </footer>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps(['arr', 'select'])
const emit = defineEmits(['clearTaskFn', 'changeFn'])

const num = computed(() => props.arr.length)
const clearFn = () => {
  emit('clearTaskFn')
}

const changeType = (type) => {
  emit('changeFn', type)
}

</script>

<style scoped>

</style>
