'use strict';

$(function () {

  // const daysFromNow = moment().add(135, 'days').calendar(); 
  // console.log(daysFromNow)

  $('form').on('submit', function (e) {
    e.preventDefault();
    var form = $(this).serializeArray();
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbwLn6XIo1taoILeDZUqwbzMdqA2EuzGUe4UsN2ntha70u3xO5UG/exec',
      method: "GET",
      dataType: "json",
      data: form
    }).then(function (data) {
      var res = data.result;

      if (res === 'success') {
        $('.modal').addClass('show');
      }

      $('#close--modal').on('click', function (e) {
        e.preventDefault();
        $('.modal').removeClass('show');
        $('input[type="text"], textarea').val('');
        $('select').prop('selectedIndex', 0);
      });
    });
  });

  function countDown() {
    var currentDate = new Date();
    console.log(currentDate);
    var endDate = new Date('September 28, 2018');
    var timeDiff = endDate - currentDate;

    timeDiff = Math.round(timeDiff / 1000);
    // calculate (and subtract) whole hours
    var hours = Math.floor(timeDiff / 3600);
    var days = Math.floor(hours / 24);

    var newHours = hours % 24;

    timeDiff -= hours * 3600;

    // if (hours < 10) { hours = "0" + hours; }
    // if (minutes < 10) { minutes = "0" + minutes; }
    // if (seconds < 10) { seconds = "0" + seconds; }

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(timeDiff / 60) % 60;

    timeDiff -= minutes * 60;
    var seconds = timeDiff % 60;

    if (currentDate <= endDate) {
      $('.days').html(days);
      $('.hours').html(newHours);
      $('.mins').html(minutes);
      $('.secs').html(seconds);
      return;
    } else {
      console.log("weeeee get married");
      clearInterval(interval);
    }
  }

  var interval = setInterval(function () {
    countDown();
  }, 1000);
});

// serializeObject()