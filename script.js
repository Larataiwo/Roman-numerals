const input = document.getElementById("number");
const convertBtn = document.getElementById("btn");
const output = document.getElementById("output");


convertBtn.addEventListener("click", () => {
     minMax(input);
})


function minMax(num) {
    var minInput = document.getElementById("number").min;
    var maxInput = document.getElementById("number").max;
    if(input.value != "") {
        if(parseInt(num.value) < parseInt(minInput)) {
            output.textContent = "Please enter a number greater than or equal to 1";
            return;
        }
    if(parseInt(num.value) > parseInt(maxInput)) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }
}  else if (input.value === "") {
    output.textContent = ""
    alert("please enter a value");
    return;
} convert(input.value);
}


function convert(num) { 
    if(num < 1){ return "";}
    if(num >= 1000){ const result = "M" + convert(parseInt(num) - 1000); output.textContent = result; return result; }
    if(num >= 900){ const result = "CM" + convert(parseInt(num) - 900); output.textContent = result; return result; }
    if(num >= 500){ const result = "D" + convert(parseInt(num) - 500); output.textContent = result; return result; }
    if(num >= 400){ const result = "CD" + convert(parseInt(num) - 400); output.textContent = result; return result; }
    if(num >= 100){ const result = "C" + convert(parseInt(num) - 100); output.textContent = result; return result; }
    if(num >= 90){ const result = "XC" + convert(parseInt(num) - 90); output.textContent = result; return result; }
    if(num >= 50){ const result = "L" + convert(parseInt(num) - 50); output.textContent = result; return result; }
    if(num >= 40){ const result = "XL" + convert(parseInt(num) - 40); output.textContent = result; return result; }
    if(num >= 10){ const result = "X" + convert(parseInt(num) - 10);  output.textContent = result; return result; }
    if(num >= 9){ const result = "IX" + convert(parseInt(num) - 9);output.textContent = result; return result; }
    if(num >= 5){ const result = "V" + convert(parseInt(num) - 5); output.textContent = result; return result; }
    if(num >= 4){ const result = "IV" + convert(parseInt(num) - 4);output.textContent = result; return result; }
    if(num >= 1){ const result = "I" + convert(parseInt(num) - 1);  output.textContent = result; return result; }
  } 

  

 