$(document).ready(function() {
  $.ajax(
    {
      url:'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function (data) {
        console.log(data);
        console.log(data.response);
        var cds = print(data.response)
      }
    }

  );
  function print(arrayCds) {
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < arrayCds.length; i++) {
      var html = template(arrayCds[i]);
      $('.cds-container').append(html);
    }
  }

  $('select').change( function () {
    var value = $(this).val();
    console.log(value);
    $('.cd').each(function(){
      $(this).show();
      var genre = $(this).children('.genre').text();
      if (value == 'all') {
        $(this).show();
      }else if (value != genre) {
        $(this).hide();
      }
    })

  })
});
