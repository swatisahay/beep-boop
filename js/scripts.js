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
  // numberString= number.toString();
  // to print range of numbers
  var range=[];
  for (var i=0; i<=number;i+=1){


// for (j=0; j<=range.lenth; j+=1){


// to check if no. is divisible by 3
  if((i%3===0)&&(i>0)){
    range.push("I'm sorry, Dave. I'm afraid I can't do that.");

  }
  // to check if number includes 1
  else if(i.toString().indexOf('1')>(-1)){
    range.push("boop");
  }
  // to check if number includes 0
  else if(i.toString().indexOf('0')>(-1)) {
    range.push("beep")
  }
  else{
    range.push(i)
  }
}
return range;
}
