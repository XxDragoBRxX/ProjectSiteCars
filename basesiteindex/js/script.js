$(document).ready(function () {
    $(".hamburguer").click(function () {
      $(this).toggleClass("hamburguer-active");
      $('.nav-list-mobile').toggleClass("active");
      $('.nav-list-products-mobile').toggleClass("active");
      $('.nav-list-marcas-mobile').toggleClass("active");
    });
  });
  