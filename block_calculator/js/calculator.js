/**
 * @file
 * Js function for calculator.
 */

 (function ($, Drupal) {
  Drupal.behaviors.block_calculator = {
    attach: function (context, settings) {
      $('.block').once('block_calculator').click(function () {
      	var Num1 = parseInt(prompt('Enter the Larger Number'));
      	var Num2 = parseInt(prompt('Enter the Smaller Number'));
      	var Operator = prompt('Enter an operator(+,-,*,/)');

      	if (Operator == '+') {
      		alert(Num1 + Num2);
      	}  else if (Operator == '-') {
      		alert(Num1 - Num2);
      	}  else if (Operator == '*') {
      		alert(Num1 * Num2);
      	}  else {
      		alert(Num1 / Num2);
      	}
      });
    }
  };
})(jQuery, Drupal);