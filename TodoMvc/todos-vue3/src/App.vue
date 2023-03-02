<template>
  <section class="todoapp">
    <TodoHeader :arr="state.list" @addTaskFn='addFn' />
    <TodoMain :taskList="showArr" @delTaskFn="delFN" />
    <TodoFooter
        :select="isSel"
        :arr="showArr"
        @clearTaskFn="clearFn"
        @changeFn="changeSel"
    />
  </section>
</template>

<script setup>
import './styles/base.css'
import './styles/index.css'
import TodoFooter from "./components/TodoFooter.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoHeader from "./components/TodoHeader.vue";
import {computed, reactive, ref} from "vue";

const state = reactive({
  list: [
    {id: 1, name: '吃饭', flag: true},
    {id: 2, name: '睡觉', flag: false},
    {id: 3, name: '打豆豆', flag: true}
  ]
})

/**
 * 添加 任务
 * @param task
 */
const addFn = (task) => {
  state.list.push({
    id: state.list.length === 0 ? 1 : state.list[state.list.length - 1].id + 1,
    name: task,
    flag: false
  })
}

/**
 * 删除 任务
 * @param id
 */
const delFN = (id) => {
  state.list = state.list.filter(item => item.id !== id)
}

/**
 * 清楚已完成
 */
const clearFn = () => {
  state.list = state.list.filter(item => !item.flag)
}

// 切换选择类型
let isSel = ref('all')
const changeSel = (type) => {
  isSel.value = type
}
const showArr = computed(() => {
  if (isSel.value === 'no') {
    return state.list.filter(item => !item.flag)
  } else if (isSel.value === 'yes') {
    return state.list.filter(item => item.flag)
  } else return state.list
})

</script>

<style scoped>
</style>
