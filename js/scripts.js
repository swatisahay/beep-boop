// user interface logic
$(function() {

  $("#submit").click(function(){

    var number= $("input#num").val();
    var result= beepBoop(number);
    $("#output").text(result);
    $("#formOne").trigger('reset');
  });
});

// business Logic
var beepBoop = function(number){
  // to print range of numbers
  debugger
  if(number==="") return "Empty Box";
  var range=[];
  for (var i=0; i<=number;i+=1){

    // to check if no. is divisible by 3
    if((i%3===0)&&(i>0)){
      range.push("I'm sorry, Dave. I'm afraid I can't do that.");

    }
    // to check if number includes 1
    else if(i.toString().indexOf('1')>(-1)){
      range.push("Boop!");
    }
    // to check if number includes 0
    else if(i.toString().indexOf('0')>(-1)) {
      range.push("Beep!");
    }
    else{
      range.push(i);
    }
  }
  range = range .join(", ");
  return range;
}
