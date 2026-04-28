$(document).ready(function(){
  $("#hideBtn").click(function(){ $("#myDiv").hide(); });
  $("#showBtn").click(function(){ $("#myDiv").show(); });
  $("#toggleBtn").click(function(){ $("#myDiv").toggle(); });
  $("#slideUpBtn").click(function(){ $("#myDiv").slideUp(); });
  $("#slideDownBtn").click(function(){ $("#myDiv").slideDown(); });
  $("#cssBtn").click(function(){ 
    $("#myDiv").css({"background-color":"orange","color":"white"});
  });
});
