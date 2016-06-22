$(document).ready(function(){
  var $ul = $('ul')
  var $body = $('body')

  // every time refresh, sets the html to nothing
  $ul.html('')

  var url = "http://localhost:3000/data.json"

  // $ <-- refers to the JQuery object. THIS FUNCTION WON'T COME BACK UNTIL AFTER IT'S GOT THE DATA.
  $.getJSON(url, function(data) {
    console.log(data)
    var employees = data.employees

    // JQuery loop
    $(employees).each(function(index){
      console.log((index + 1) + ": " + this.firstName);

      $ul.append('<li id="employee_id_' + (index + 1) + '">' + this.firstName + ' ' + this.lastName + '</li>')
    })
  })




})
