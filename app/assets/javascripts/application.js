// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery/dist/jquery.min
//= require jquery.turbolinks
//= require jquery_ujs
//= require jquery-easing-original/jquery.easing.1.3.min
//= require turbolinks
//= require fotorama/fotorama
//= require jstree/dist/jstree.min
//= require spree/frontend/spree_contact_us
//= require sly/dist/sly.min

$(function(){
    $frame = $('.frame');
    $wrap = $('.products');
    $frame.sly({
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBar: $wrap.find('.scrollbar'),
        scrollBy: 0,
//        pagesBar: $wrap.find('.pages'),
        activatePageOn: 'click',
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,

        // Cycling
        cycleBy: 'pages',
        cycleInterval: 1000,
        pauseOnHover: 1,
        startPaused: 1,

        // Buttons
        prevPage: $('i.prevPage'),
        nextPage: $('i.nextPage')
    });


    $('#leftMenu > .categories, #leftMenu > .brands').jstree({
        core : {
            themes : {
                variant: "small",
                dots : false,
                icons : false,
                responsive: false
            }
        }
    }).on("activate_node.jstree", function(e,data){
        window.location.href = data.node.a_attr.href;
    });





});
