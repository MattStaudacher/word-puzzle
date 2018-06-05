//event.preventDefault();
$(function() {
  $("#form-one").submit(function(event){
    event.preventDefault();
    var sentence = $("#input").val().split("");
    var originalSentence = $("#input").val();
    for(var index = 0; index < sentence.length; index++)
    {
      if(compareTo(sentence[index]))
      {
        sentence[index] = "-";
      }
    }
    $("#output").text("Output: ");
    $("#output").append(sentence.join(""));
    $("#output").slideDown();
    $("#input").val("");
    $("#original").hide();
    $("#original").text("Original: "+originalSentence);
  });

  $("#btn-reveal").click(function(event){
    event.preventDefault();
    $("#original").slideDown();
    });

});

function compareTo(value)
{
  return ((value==="a")||(value==="e")||(value==="i")||(value==="o")||(value==="u")||(value==="A")||(value==="E")||(value==="I")||(value==="O")||(value==="U"));
}
