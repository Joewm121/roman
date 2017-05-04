// back-end logic


var romanize = function(input) {
  if (typeof input === 'number' && input > 0) {
    return true;
  } else {
    return false;
  }
};
// front-end

$(function() {

  $("#form").submit(function(event) {
      event.preventDefault();
      var userInput = parseInt($("input#number").val());
      var result = romanize(userInput);

      $(".result").text(result);
      if (result === false) {
        alert("Enter a positive number.");
      }

  });
});
