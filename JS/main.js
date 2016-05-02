$(function(){
  var $todoInput = $("[data-js='type__here']");
  var $form = $("[data-js='form']");
  var newListitem = $("[data-js='input-here']").val();
    if(newListitem > 0){
      $("todo-list").append("<li>" + newListitem "</li>");
      $("#input-here").val('');
    }

  $form.on("submit", function(e){
    e.preventDefault();
  })
  $todoInput.on("keyup", function(e){
    console.log(e);
  });
})
