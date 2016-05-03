var $ = require("jquery");
var todoList = require("todolist");
var todoitem = require("todoitem");

$(function(){
  var $todoInput = $("[data-js='type__here']");
  var $form = $("[data-js='form']");
  var newListitem = $("[data-js='input-here']").val();
  var $todo__list = $("[data-js='todo-list']");
  var $todoItem = $("[data-js='todo-item']");





  $form.on("submit", function(e){
    e.preventDefault();
  })
  $todoInput.on("keyup", function(e){
    var $theText = $(e.target)
    // $todo__list = [];
    var $todoItem = $("[data-js='todo-item']");
    console.log(e);
    if($todoInput.val().length > 1 && e.keyCode === 13){
      todoitem.todoLog($theText.val())
    }
  });
})
