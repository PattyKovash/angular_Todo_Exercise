angular.module('app', [])
//todoList in angular is same as todo-list in html
.component('todoList', { 
  template: `
    <h1>Todo List</h1>
    <input>
    <button>add</button>
    <ul>
      <li></li>
    </ul>
    <hr/>
    <pre></pre>
  `
})