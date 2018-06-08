// user interface logic
$(function() {

  $("#submit").click(function(){
    var name= $("input#name").val();
    var number= $("input#num").val();
    var result= beepBoop(number);
    $("#output").text(result);
    $(".names").text(name)
  });
});

// business Logic
var beepBoop = function(number){
  numberString= number.toString();
  // to print range of numbers
  var range=[];
  for (var i=0; i<=number;i+=1){
   range.push(i);

// to check if no. is divisible by 3
  if((number%3===0)&&(number>0)){
    return("I'm sorry, Dave. I'm afraid I can't do that.");
  }
  // to check if number includes 1
  else if((numberString.indexOf('1'))>(-1)){
    return("boop");
  }
  // to check if number includes 0
  else if((numberString.indexOf('0'))>(-1)) {
    return("beep")
  }
}
return range;
}
