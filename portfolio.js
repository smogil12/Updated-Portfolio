$(document).ready(function() {
  $(".contact").on("click", function() {
    $(".contact").animate(
      {
        left: "250px",
        opacity: "0.5",
        height: "150px",
        width: "150px"
      },
      3000
    );
  });
});
