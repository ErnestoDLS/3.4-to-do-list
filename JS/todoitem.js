var $ = require("jquery");
var $todo__list = $("[data-js='todo-list']");

this.todoLog = function(list){
  $todo__list.prepend(`
    <li data-js="todo-item"> ${list} </li>
  `)
}
