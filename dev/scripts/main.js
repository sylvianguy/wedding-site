// console.log("hello");

$(function() {
  var $form = $('form#test-form'),
      url = 'https://script.google.com/macros/s/AKfycbyVLkgTg5hOLlUM0Qg0gJr31VIerLahzIck7dYsBo34X5-HY7l3/exec'

//   $('#submit-form').on('click', function (e) {
//     e.preventDefault();
//     console.log("lalal");
//     var jqxhr = $.ajax({
//       url: url,
//       method: "GET",
//       dataType: "json",
//       data: form.serializeObject()
//     }).success(
//       // do something
//     );
//   })
// });

// HANDLE FORM SUBMIT
// https://script.google.com/macros/u/1/s/AKfycbwa4fAR5TN0qIpF06evCkhPrNFLb4LuiiAJEpQn5VWariKIvCE/exec

// var $form = $('form#test-form'),
//   url = 'https://script.google.com/macros/s/AKfycbwa4fAR5TN0qIpF06evCkhPrNFLb4LuiiAJEpQn5VWariKIvCE/exec'

$('form').on('submit', function (e) {
  e.preventDefault();
  // addActive();
  console.log(this);
  var form = $(this).serializeArray();
  const url = 'https://script.google.com/macros/s/AKfycbyVLkgTg5hOLlUM0Qg0gJr31VIerLahzIck7dYsBo34X5-HY7l3/exec'
  console.log(form);
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: form
  }).then((data) => {
    console.log(data);
  });
});

});