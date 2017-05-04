// back-end logic
// var romans =  ["L", "LX", "X", "IX", "V", "IV", "I"];
// var numbers = [50,   40,  10,    9,   5,   4,    1];

// var ones = function(num) {
//
//   if (num <= 3) {
//     for (i = 0; i < num; i++) {
//     output += "I";
//   }
// }

var ones = function(input) {
  var output = "";
  var num = parseInt(input);

  if (num <= 3) {
    for (i = 0; i < num; i++) {
      output += "I";
    }
  } else if (num === 4) {
      output = "IV";
  } else if (num > 4 && num < 9) {
    output += "V";
    for (i = 0; i < num - 5; i++) {
      output += "I";
    }
  } else if (num === 9) {
    output = "IX";
  }
  return output;
};

// else if (num < 9 && num > 14);
//   output = "X";
//   for (i = 0; i < num - 10; i++) {
//     output += "I";
//   }

// front-end

$(function() {

  $("#form").submit(function(event) {
      event.preventDefault();
      var userInput = $("input#number").val();
      var result = romanize(userInput);

      $(".result").text(result);
      if (result === false) {
        alert("Enter a positive number.");
      }

  });
});
