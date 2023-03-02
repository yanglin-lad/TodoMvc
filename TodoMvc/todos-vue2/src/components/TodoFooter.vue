<template>
  <footer class="footer">
    <span class="todo-count">剩余 <strong>{{ count }}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{ selected: isSel === 'all'}" href="javascript:;" @click="changeType('all')">全部</a>
      </li>
      <li>
        <a :class="{selected: isSel === 'no'}" href="javascript:;" @click="changeType('no')">未完成</a>
      </li>
      <li>
        <a :class="{selected: isSel === 'yes'}" href="javascript:;" @click="changeType('yes')">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearFn">清除已完成</button>
  </footer>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ['fooArr'],
  data() {
    return {
      isSel: 'all'
    }
  },
  methods: {
    // 改变选择类型
    changeType(src) {
      this.isSel = src;
      this.$emit('changeFn', src)
    },
    clearFn() {
      this.$emit('clear')
    }
  },
  computed: {
    count() {
      return this.fooArr.length
    }
  }
}
</script>

<style scoped>

</style>
