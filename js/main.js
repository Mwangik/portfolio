// get the current year for the copyright
$("#year").text(new Date().getFullYear());



$(".port-item").click(function() {
  $(".collapse").collapse("hide");
});

// lightbox
$(document).on("click", '[data-toggle="lightbox"]', function(e) {
  e.preventDefault();
  $(this).ekkoLightbox();
});
