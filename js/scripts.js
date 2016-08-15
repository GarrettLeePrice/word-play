$(document).ready(function() {
  $("form").submit(function(event) {
    var input = $("#input").val();
    var sentenceArray = input.split(" ");
    var newArray = [];
    sentenceArray.forEach(function(element) {
      if (element.length >= 3) {
        newArray.push(element);
      };
    });
    newArray = newArray.reverse();
    newArray = newArray.join(" ");
    $("#output").text(newArray);
  event.preventDefault();
  });
});
