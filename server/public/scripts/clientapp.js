$(document).ready(function() {

  $('.addition').on('click', function() {
    event.preventDefault();
    var valuesXY = {};
    $.each('.xyInput').serializeArray(), function(i, field) {
      valuesXY[field.name] = field.value;
    }

    $.ajax({
      type: 'POST',
      url: '/calculate',
      data: valuesXY,
      success: function()
    })



  });



});
