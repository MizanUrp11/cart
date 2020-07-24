$(document).ready(function () {
    var amount = 0;
    var unitPrice = 130;
   $('#inc').on('click', function () {
        amount++;
        var totalCost = unitPrice * amount;
        $('#amount').text(amount);
        $('#total-cost').text(totalCost);
    });
    $('#dec').on('click', function () {
        amount--;
        if(amount < 0){
            amount = 0;
        }
        var totalCost = unitPrice * amount;
        $('#amount').text(amount);
        $('#total-cost').text(totalCost);
    });

    $('#stamp1').on('click',function () { 
        var src = $(this).attr('src');
        var featuredImage = $('#featured').attr('src');
        $('#featured').attr('src', src);
     });
    $('#stamp2').on('click',function () { 
        var src = $(this).attr('src');
        var featuredImage = $('#featured').attr('src');
        $('#featured').attr('src', src);
     });
    $('#stamp3').on('click',function () { 
        var src = $(this).attr('src');
        var featuredImage = $('#featured').attr('src');
        $('#featured').attr('src', src);
     });
});