const TodoHeader = ({add, checkedAllFn, changeCheckAll}) => {

  return (
    <header className="header">
      <h1 >todos</h1>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all"></label>
      <input
        className="new-todo"
        placeholder="输入任务名称-回车确认"
        autoFocus
      />
    </header>
  )
}

export default TodoHeader
