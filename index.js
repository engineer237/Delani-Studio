// form validation
$(document).ready(function () {
  $("#form").submit(function (e) {
    let userName = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();
    e.preventDefault();
    alert(`
    Name: ${userName}.
    Email: ${email}.
    Message: ${message}.

    Thank you for contacting us.We will get back to you!!`);
  });
});

// function for what we do section
$(document).ready(function () {
  $(".design-image").click(function () {
    $(".design-description").toggle();
    $(".design-image").hide();
    $(".design, .design-description").click(function () {
      $(".design-image").show();
      $(".design-description").hide();
    });
  });
  $(".development-icon").click(function () {
    $(".development-description").toggle();
    $(".development-icon").hide();
    $(".development, .development-description").click(function () {
      $(".development-description").hide();
      $(".development-icon").show();
    });
  });
  $(".product-icon").click(function () {
    $(".product-description").toggle();
    $(".product-icon").hide();
    $(".product, .product-description").click(function () {
      $(".product-icon").show();
      $(".product-description").hide();
    });
  });
});
// function to hover portfolio images
$(document).ready(function () {
  $(".img1").hover(function () {
    $(".img1-description").slideToggle(1000);
  });
  $(".img2").hover(function () {
    $(".img2-description").slideToggle(1000);
  });
  $(".img3").hover(function () {
    $(".img3-description").slideToggle(1000);
  });
  $(".img4").hover(function () {
    $(".img4-description").slideToggle(1000);
  });
  $(".img5").hover(function () {
    $(".img5-description").slideToggle(1000);
  });
  $(".img6").hover(function () {
    $(".img6-description").slideToggle(1000);
  });
  $(".img7").hover(function () {
    $(".img7-description").slideToggle(1000);
  });
  $(".img8").hover(function () {
    $(".img8-description").slideToggle(1000);
  });
});
