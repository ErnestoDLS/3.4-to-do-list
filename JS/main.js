$(function(){
  var $todoInput = $("[data-js='type__here']");
  var $form = $("[data-js='form']");
  var $todoList = $("[data-js='todo-list']");


  $form.on("submit", function(e){
    e.preventDefault();
  })

  $todoInput.on("keyup", function(e){
    console.log(e);
    if($todoInput.val().length > 1 && e.keyCode === 13){
      $todoList.append("<li data-js='todo-item'>" + $todoInput.val() + "</li>");
      $todoInput.val('');
    }
  });
  $todoList.on("click", "[data-js='todo-item']", function(e){
    console.log(e.target);
})

//this to delet a "todo"
//find todo item that was click
  $todoList.on("keydown", function(e){
    if(e.keyCode === 8){
      $()
      }
    });
})
})
//press delete key
//delete todo
