$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDev = $(this).data("newdevour");
    var newDevState = {
      devoured: newDev
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevState
    }).then(function() {
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      name: $("#burg")
        .val()
        .trim()
    };
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });
});
