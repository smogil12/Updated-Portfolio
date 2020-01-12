$(document).ready(function() {
  $(".linkedin").on("click", function() {
    var a = document.createElement("a");

    // Create the text node for anchor element.
    var link = document.createTextNode("This is link");

    // Append the text node to anchor element.
    a.appendChild(link);

    // Set the title.
    a.title = "This is Link";

    // Set the href property.
    a.href = "https://www.linkedin.com/in/spencer-mogil/";

    // Append the anchor element to the body.
    $(".linkedin").html(a);
  });
});
