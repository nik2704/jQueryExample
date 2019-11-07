$(document).ready(function() {
    $('.main_btna').on('click', function() {
        showModal();
    });

    $('.main_btn').on('click', function() {
        showModal();     
    });
    
    $('.col-sm-7>nav>ul>li:eq(1)').on('click', function() {
        showModal();
    });

    $('.close').on('click', function() {
        console.log('CLOSE!!!');
        $('.modal').animate(
            {
                opacity: 'hide',
                height: 'hide'
            }, 3000, null, function () {
                $(".overlay").fadeTo(1000, 0.0).hide();
            }
        );
    });

    function showModal() {
        $(".overlay").fadeTo(1000, 0.9, null, function() {
            $('.modal').animate(
                {
                    opacity: 'toggle',
                    height: 'toggle'
                }, 3000
            );
        });
    }
});
