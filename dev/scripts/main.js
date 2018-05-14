// 'use strict';

// console.log("hello");

$(function () {

  $('form').on('submit', function (e) {
    e.preventDefault();
    // addActive();
    console.log(this);
    var form = $(this).serializeArray();
    // console.log(form);
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbwLn6XIo1taoILeDZUqwbzMdqA2EuzGUe4UsN2ntha70u3xO5UG/exec',
      method: "GET",
      dataType: "json",
      data: form
    }).then(function (data) {
      console.log(data)
    });
  });
});

// serializeObject()