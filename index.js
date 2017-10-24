$( document ).ready(function() {



// var card = $('.card-action')[0];
//
var order=0;
var tax=.05;
var total=0;

var burger = $('#burger');

burger.click(function(event){
  event.preventDefault();
order+=8.99;
$('#subtotal').text((order).toFixed(2))
$('#tax').text((order*tax).toFixed(2))
$('#total').text((order*1.05).toFixed(2));
var newTable = '<tr><td>' + 'burger' + '</td><td>' + 8.99 + '</td></tr>'
    $('table tbody').append(newTable)


})

var arugula=$('#pizza');

arugula.click(function(event){
  event.preventDefault();
order+=11.99;

$('#subtotal').text((order).toFixed(2))
$('#tax').text((order*tax).toFixed(2));
$('#total').text((order*1.05).toFixed(2));
var newTable = '<tr><td>' + 'arugula' + '</td><td>' + 11.99 + '</td></tr>'
    $('table tbody').append(newTable)


})

var ribs= $("#ribs");

ribs.click(function(event){
  event.preventDefault();
  order+=14.99;

  $('#subtotal').text((order).toFixed(2));
  $('#tax').text((order*tax).toFixed(2));
  $('#total').text((order*1.05).toFixed(2));
  var newTable = '<tr><td>' + 'swine' + '</td><td>' + 14.99 + '</td></tr>'
      $('table tbody').append(newTable);
})

var iceCream= $('#ice-cream');

iceCream.click(function(event){
  event.preventDefault();
  order+=7.99;

  $('#subtotal').text((order).toFixed(2));
  $('#tax').text((order*tax).toFixed(2));
  $('#total').text((order*1.05).toFixed(2));
  var newTable = '<tr><td>' + 'ice cream' + '</td><td>' + 7.99 + '</td></tr>'
      $('table tbody').append(newTable);
})


var name= $('#name').val();
// submitBtn=$('#submit');
function showToast(message, duration) {
           Materialize.toast(message, duration
           );
        }



$('#submit').click(function(event){
event.preventDefault();
if(($('#name').val()==='')||($('#address').val()==='')||($('#phone').val()==='')||(order===0)){

showToast('All forms must be filled',3000)
}
else{
  showToast('order has been submited',3000)
}




})

$('.button-collapse').sideNav()




















// console.log($('p')[0].innerText)















});
