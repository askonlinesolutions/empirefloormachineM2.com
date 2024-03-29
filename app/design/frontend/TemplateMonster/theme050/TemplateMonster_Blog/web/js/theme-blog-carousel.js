/**
 * Copyright © 2015. All rights reserved.
 */

define([
    'jquery',
    'jquery/ui',
    'owlcarousel'
], function($){
    "use strict";

    $.widget('TemplateMonster.themeBlogCarousel', {

        options: {
            nav: true,
            navText: false,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        },

        _create: function() {
            this.element.owlCarousel(this.options);
        }
        
    });

    return $.TemplateMonster.themeBlogCarousel;

});
