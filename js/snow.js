// Snow Falling
    function fallingSnow() {

        var snowflake = $('<div class="snowflakes"></div>');
        $('#snowZone').prepend(snowflake);
        snowX = Math.floor(Math.random() * $('#site').width());
        snowSpd = Math.floor(Math.random() + 5000);

        snowflake.css({'left':snowX+'px'});
        snowflake.animate({
            top: "500px",
            opacity : "0",

        }, snowSpd, function(){
            $(this).remove();
            fallingSnow();
        });

    }
    var timer = Math.floor(Math.random() +1000);

    window.setInterval(function(){
        fallingSnow();
    }, timer);


// Snow Falling ALL AT ONCE
    // function fallingSnow() {
    //
    //     var $snowflakes = $(), qt = 20;
    //
    //     for (var i = 0; i < qt; ++i) {
    //         var $snowflake = $('<div class="snowflakes"></div>');
    //         $snowflake.css({
    //             'left': (Math.random() * $('#site').width()) + 'px',
    //             'top': (- Math.random() * $('#site').height()) + 'px'
    //         });
    //         // add this snowflake to the set of snowflakes
    //         $snowflakes = $snowflakes.add($snowflake);
    //     }
    //     $('#snowZone').prepend($snowflakes);
    //
    //     $snowflakes.animate({
    //         top: "500px",
    //         opacity : "0",
    //     }, Math.random() + 5000, function(){
    //         $(this).remove();
    //         // run again when all 20 snowflakes hit the floor
    //         if (--qt < 1) {
    //             fallingSnow();
    //         }
    //     });
    // }
    // fallingSnow();
    //
