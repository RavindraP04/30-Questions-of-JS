// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

function pattern1(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
pattern1(5);


function pattern2(num){
    let pattern2 = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            pattern2 += "*";

        }
        pattern2 += "\n";
    }
    console.log(pattern2);
}
pattern2(5);


function pattern3(num) {
  let pattern3 = "";
  for (let i = 1; i <= num; i++) {
    for (let j = num; j >= i; j--) {
      pattern3 += " ";
    }
    for (let k = 0; k < 2*i-1; k++) {
      pattern3 += "*";
    }
    pattern3 += "\n";
  }
  console.log(pattern3);
}
pattern3(3);
