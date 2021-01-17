$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });

  /*$("ul").click(function() {
    $(this).children("li").css("background-color", "green");
    $(this).children("li").remove();
  }); */

  $(".unstyled").click(function() {
    //alert("hi");
    $(this).before("<ul id='hi'>Hi</ul>");
  });

  $("#hi").click(function() {
    alert("Hey");
  });
});