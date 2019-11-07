# Simple example of animation using jQuery
____

* $(document).ready() - An event handler is enabled that prevents scripts from executing before the page loads,
* $('.main_btna').on('click'...) - An event handler for div of class 'main_btna',
* $('.main_btn').on('click',...) - An event handler for div of class 'main_btn',
* $('.col-sm-7>nav>ul>li:eq(1)').on('click', ...) - The event handler for a single element <li>, which is a child of <ul>,
 which in turn is a child of <nav> in the container <div> of class "col-sm-7".

Animation:
* $(".overlay").fadeTo(1000, 0.9, ...) - the underlay (overlay class) slowly appears on the page (through transparency),
* $('.modal').animate(...) - modal window (modal class) runs smoothly from above 
(animation of modal window run as Callback function for "fadeTo"),
* $('.close').on('click',..) - close modal window and hide div of class 'overlay' (now fadeTo run as Callback function).