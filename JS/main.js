$(function(){
  var $todoInput = $("[data-js='type__here']");
  var $form = $("[data-js='form']");
  $form.on("submit", function(e){
    e.preventDefault();
  })
  $todoInput.on("keyup", function(e){
    console.log(e);
  });
})
