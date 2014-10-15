$(document).ready(function() {
    //diables submit button until text is input
    $('form').bind('keyup', function() {
        var nameLength = $('input').length;
        if (nameLength > 0) {
            $('.button').removeAttr('disabled');
        }
    });

   //makes fizzbuzz list with submitted number
    $('.button').on('click', function() {
    var input = $('input').val(); 
    var i;

    for (i=1; i<=input; i++) {
        //check to see if value is 100 or less
        if (input > 100) {
            alert('Value must be 100 or less!');
            return;
        }
        //checks for integer
        else if (input%1 != 0) {
            alert("Must supply an integer!");
            return;
        }
        //run function # 1-100
        else if (i%15===0) {
            $('.list').append('<li id="num">FizzBuzz</li>'); 
        }
        else if  (i%3===0) {
            $('.list').append('<li id="num">Fizz</li>'); 
        }
        else if (i%5===0) {
            $('.list').append('<li id="num">Buzz</li>');
        }
        else {
            $('.list').append('<li id="num">' + i + '</li>');
        }
    }
    //checks to see if input is a number
        if (isNaN(input)) {
            alert('Must supply a number!');
        }

    //clear input text on submit            
        $('input').val('');
    
})

    
});