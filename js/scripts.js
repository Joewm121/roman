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
function romanize(input) {
  var output = "";

  if (input.length === 1) {
    output = ones(input);
  } else if (input.length === 2) {
    output += tens(input[0]);
    output += ones(input[1]);
  }

  return output;
};

function ones(input) {
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

function tens(input) {
  var output = "";
  var num = parseInt(input);

  if (num <= 3) {
    for (i = 0; i < num; i++) {
      output += "X";
    }
  } else if (num === 4) {
      output = "XL";
  } else if (num > 4 && num < 9) {
    output += "L";
    for (i = 0; i < num - 5; i++) {
      output += "X";
    }
  }

  return output;
};


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
