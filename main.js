$(document).ready(function() {
  $.ajax(
    {
      url:'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function (data) {
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
});
