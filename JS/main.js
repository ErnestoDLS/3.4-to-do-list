$(function(){
  var $todoInput = $("[data-js='type__here']");
  var $form = $("[data-js='form']");
  var newListitem = $("[data-js='input-here']").val();


  $form.on("submit", function(e){
    e.preventDefault();
  })
  $todoInput.on("keyup", function(e){
    console.log(e);
    if($todoInput.val().length > 1 && e.keyCode === 13){
      $("[data-js='todo-list']").append("<li>" + $todoInput.val() + "</li>");
      $todoInput.val('');
    }
  });
})
