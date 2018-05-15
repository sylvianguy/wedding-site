$(function () {

  $('form').on('submit', function (e) {
    e.preventDefault();
    var form = $(this).serializeArray();
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbwLn6XIo1taoILeDZUqwbzMdqA2EuzGUe4UsN2ntha70u3xO5UG/exec',
      method: "GET",
      dataType: "json",
      data: form
    }).then(function (data) {
      const res = data.result;

      if(res === 'success') {
        $('.modal').addClass('show');
      }

      $('#close--modal').on('click', function(e){
        e.preventDefault();
        $('.modal').removeClass('show');
        $('input[type="text"], textarea').val('');
        $('select').prop('selectedIndex', 0);

      });



    });
  });
});

// serializeObject()