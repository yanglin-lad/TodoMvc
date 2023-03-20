const ToDoFooter = ({num, clearTask, changeType}) => {

  return (
    <footer className="footer">
      <span className="todo-count">剩余<strong>0</strong></span>
      <ul className="filters">
        <li>
          <a onClick={() => changeType('all')} href="#/">全部</a>
        </li>
        <li>
          <a onClick={() => changeType('no')} href="#/active">未完成</a>
        </li>
        <li>
          <a onClick={() => changeType('yes')} href="#/completed">已完成
          </a>
        </li>
      </ul>
      <button className="clear-completed"> 清除已完成< /button>
    </footer>
  )
}
export default ToDoFooter
