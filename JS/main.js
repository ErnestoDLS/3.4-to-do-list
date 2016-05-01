$(function(){
  var $todoInput = $("[data-js='type__here']");
  var $form = $("[data-js='form']");
  var $listItems = $("[data-js='click__me']");


  $form.on("submit", function(e){
    e.preventDefault();
  })
  $todoInput.on("keyup", function(e){
    console.log(e);
  });
})
