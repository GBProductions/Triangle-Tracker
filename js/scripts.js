//Business Logic

/*
const equilateral = function(sideA, sideB, sideC) {
  return (sideA === sideB === sideC);
}
*/

//Interface Logic

$(document).ready(function() {
  $("#formTriangle").submit(function(event) {
    event.preventDefault();
    const sideA = parseInt($("input#sideA").val());
    const sideB = parseInt($("input#sideB").val());
    const sideC = parseInt($("input#sideC").val());
   

    if (sideA === sideB && sideB === sideC) {
      $('#equilateral').show();
    } else {
      $('#equilateral').hide();
    }
  });
});

  //  $("#output").text("Equilateral")
  //} else if (sidea === sideb ) 
    //$('#isosceles').show();


/*

	•	Equilateral: All sides are equal.
	•	Isosceles: Exactly 2 sides are equal.
	•	Scalene: No sides are equal.
	•	NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.
	•	

E = (a === b === c)
I = (a === b && c)
S= (a || b || c)
NT= (a+b <= c || b+c <= a || a+c <= b) 

div ('#triangleType').show --This will reveal text
span ('#output).text();

(side A === sideB)

*/
