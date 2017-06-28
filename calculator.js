$(document).ready(function(){
  //Inputs from the user to calculate
  var inputs=[""];
  //String to store current input string                
  var totalString;
  //Operator array for validation without the "."
  var operators1 = ["+", "-", "/", "*"];
  //Operators array with the "."
  var operators2 = ["."];
  //Numbers for validation
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  function getValue(input){
    if(operators2.includes(inputs[inputs.length-1])===true && input==="."){
      console.log("Duplicat '.' ");
    }
    //Validation so it doesn't start with an operator
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
    //If last character was not an operator add operator to the array
    else if(operators1.includes(inputs[inputs.length-1])===false){
      inputs.push(input);
    }
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }
  
  function update(){
    totalString = inputs.join("");
    $("#steps").html(totalString);
  cosole.log(inputs);
  }
  
  function getTotal(){
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }
  $("a").on("click", function(){
    if(this.id=="deleteAll"){
      inputs=[""];
      update();
    }
    else if(this.id==="backOne"){
      input.pop();
      update();
    }
    else if(this.id==="total"){
      getTotal();
    }
    else{
      if(inputs[inputs.lenght-1].indexOf("+", "-", "/", "*", ".")===-1){
         getValue(this.id);
         }
         else{
         getValue(this.id);
         }
    }
  })
});
