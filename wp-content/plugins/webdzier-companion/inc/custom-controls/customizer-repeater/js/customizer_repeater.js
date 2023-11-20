/* global jQuery */
/* global wp */
function hotelgalaxy_media_upload(button_class) {
    'use strict';
    jQuery('body').on('click', button_class, function () {
        var button_id = '#' + jQuery(this).attr('id');
        var display_field = jQuery(this).parent().children('input:text');
        var _custom_media = true;

        wp.media.editor.send.attachment = function (props, attachment) {

            if (_custom_media) {
                if (typeof display_field !== 'undefined') {
                    switch (props.size) {
                        case 'full':
                            display_field.val(attachment.sizes.full.url);
                            display_field.trigger('change');
                            break;
                        case 'medium':
                            display_field.val(attachment.sizes.medium.url);
                            display_field.trigger('change');
                            break;
                        case 'thumbnail':
                            display_field.val(attachment.sizes.thumbnail.url);
                            display_field.trigger('change');
                            break;
                        default:
                            display_field.val(attachment.url);
                            display_field.trigger('change');
                    }
                }
                _custom_media = false;
            } else {
                return wp.media.editor.send.attachment(button_id, [props, attachment]);
            }
        };
        wp.media.editor.open(button_class);
        window.send_to_editor = function (html) {

        };
        return false;
    });
}

/********************************************
 *** Generate unique id ***
 *********************************************/
function hotelgalaxy_customizer_repeater_uniqid(prefix, more_entropy) {
    'use strict';
    if (typeof prefix === 'undefined') {
        prefix = '';
    }

    var retId;
    var php_js;
    var formatSeed = function (seed, reqWidth) {
        seed = parseInt(seed, 10)
            .toString(16); // to hex str
        if (reqWidth < seed.length) { // so long we split
            return seed.slice(seed.length - reqWidth);
        }
        if (reqWidth > seed.length) { // so short we pad
            return new Array(1 + (reqWidth - seed.length))
                .join('0') + seed;
        }
        return seed;
    };

    // BEGIN REDUNDANT
    if (!php_js) {
        php_js = {};
    }
    // END REDUNDANT
    if (!php_js.uniqidSeed) { // init seed with big random int
        php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
    }
    php_js.uniqidSeed++;

    retId = prefix; // start with prefix, add current milliseconds hex string
    retId += formatSeed(parseInt(new Date()
        .getTime() / 1000, 10), 8);
    retId += formatSeed(php_js.uniqidSeed, 5); // add seed hex string
    if (more_entropy) {
        // for more entropy we add a float lower to 10
        retId += (Math.random() * 10)
            .toFixed(8)
            .toString();
    }

    return retId;
}


/********************************************
 *** General Repeater ***
 *********************************************/
function hotelgalaxy_customizer_repeater_refresh_social_icons(th) {
    'use strict';
    var icons_repeater_values = [];
    th.find('.customizer-repeater-social-repeater-container').each(function () {
        var icon = jQuery(this).find('.icp').val();
        var link = jQuery(this).find('.customizer-repeater-social-repeater-link').val();
        var id = jQuery(this).find('.customizer-repeater-social-repeater-id').val();

        if (!id) {
            id = 'customizer-repeater-social-repeater-' + hotelgalaxy_customizer_repeater_uniqid();
            jQuery(this).find('.customizer-repeater-social-repeater-id').val(id);
        }

        if (icon !== '' && link !== '') {
            icons_repeater_values.push({
                'icon': icon,
                'link': link,
                'id': id
            });
        }
    });

    th.find('.social-repeater-socials-repeater-colector').val(JSON.stringify(icons_repeater_values));
    hotelgalaxy_customizer_repeater_refresh_general_control_values();
}


function hotelgalaxy_customizer_repeater_refresh_general_control_values() {
    'use strict';
    jQuery('.customizer-repeater-general-control-repeater').each(function () {
        var values = [];
        var th = jQuery(this);
        th.find('.customizer-repeater-general-control-repeater-container').each(function () {

            var icon_value = jQuery(this).find('.icp').val();
            var text = jQuery(this).find('.customizer-repeater-text-control').val();
            var link = jQuery(this).find('.customizer-repeater-link-control').val();
            var text2 = jQuery(this).find('.customizer-repeater-text2-control').val();
            var link2 = jQuery(this).find('.customizer-repeater-link2-control').val();
            var link3 = jQuery(this).find('.customizer-repeater-link3-control').val();
            var color = jQuery(this).find('input.customizer-repeater-color-control').val();
            var color2 = jQuery(this).find('input.customizer-repeater-color2-control').val();
            var image_url = jQuery(this).find('.custom-media-url').val();
            var video_url = jQuery(this).find('.customizer-repeater-video-control').val();
            var choice = jQuery(this).find('.customizer-repeater-image-choice').val();
            var number = jQuery(this).find('.customizer-repeater-number-control').val();
            var title = jQuery(this).find('.customizer-repeater-title-control').val();
            var subtitle = jQuery(this).find('.customizer-repeater-subtitle-control').val();
            var subtitle2 = jQuery(this).find('.customizer-repeater-subtitle2-control').val();
            var btn3 = jQuery(this).find('.customizer-repeater-btn3-control').val();
            var button_second = jQuery(this).find('.customizer-repeater-button2-control').val();
            var slide_align = jQuery(this).find('.customizer-repeater-slide-align').val();
            var open_new_tab = jQuery(this).find('.customizer-repeater-checkbox').attr("checked") ? 'yes' : 'no';
            var id = jQuery(this).find('.social-repeater-box-id').val();
            if (!id) {
                id = 'social-repeater-' + hotelgalaxy_customizer_repeater_uniqid();
                jQuery(this).find('.social-repeater-box-id').val(id);
            }
            var social_repeater = jQuery(this).find('.social-repeater-socials-repeater-colector').val();
            var shortcode = jQuery(this).find('.customizer-repeater-shortcode-control').val();

            if (text !== '' || image_url !== '' || number !== '' || title !== '' || subtitle !== '' || btn3 !== '' || icon_value !== '' || link !== '' || choice !== '' || social_repeater !== '' || shortcode !== '' || slide_align !== '' || color !== '') {
                values.push({
                    'icon_value': (choice === 'customizer_repeater_none' ? '' : icon_value),
                    'color': color,
                    'color2': color2,
                    'text': hotelgalaxyescapeHtml(text),
                    'link': link,
                    'text2': hotelgalaxyescapeHtml(text2),
                    'button_second': hotelgalaxyescapeHtml(button_second),
                    'link2': link2,
                    'link3': link3,
                    'image_url': (choice === 'customizer_repeater_none' ? '' : image_url),
                    'video_url':  video_url,
                    'choice': choice,
                    'number': hotelgalaxyescapeHtml(number),
                    'title': hotelgalaxyescapeHtml(title),
                    'subtitle': hotelgalaxyescapeHtml(subtitle),
                    'subtitle2': hotelgalaxyescapeHtml(subtitle2),
                    'btn3': hotelgalaxyescapeHtml(btn3),
                    'slide_align': hotelgalaxyescapeHtml(slide_align),
                    'open_new_tab' : open_new_tab,
                    'social_repeater': hotelgalaxyescapeHtml(social_repeater),
                    'id': id,
                    'shortcode': hotelgalaxyescapeHtml(shortcode)
                });
            }

        });
        th.find('.customizer-repeater-colector').val(JSON.stringify(values));
        th.find('.customizer-repeater-colector').trigger('change');
    });
}


jQuery(document).ready(function () {
    'use strict';
    var hotelgalaxy_theme_controls = jQuery('#customize-theme-controls');
    hotelgalaxy_theme_controls.on('click', '.customizer-repeater-customize-control-title', function () {
        jQuery(this).next().slideToggle('medium', function () {
            if (jQuery(this).is(':visible')){
                jQuery(this).prev().addClass('repeater-expanded');
                jQuery(this).css('display', 'block');
            } else {
                jQuery(this).prev().removeClass('repeater-expanded');
            }
        });
    });

    hotelgalaxy_theme_controls.on('change', '.icp',function(){
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
        return false;
    });
    
    hotelgalaxy_theme_controls.on('change','.customizer-repeater-slide-align', function(){
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
        return false;
        
    });
    
    hotelgalaxy_theme_controls.on('change', '.customizer-repeater-image-choice', function () {
        if (jQuery(this).val() === 'customizer_repeater_image') {
            jQuery(this).parent().parent().find('.social-repeater-general-control-icon').hide();
            jQuery(this).parent().parent().find('.customizer-repeater-image-control').show();
            jQuery(this).parent().parent().find('.customizer-repeater-color-control').prev().prev().hide();
            jQuery(this).parent().parent().find('.customizer-repeater-color-control').hide();

        }
        if (jQuery(this).val() === 'customizer_repeater_icon') {
            jQuery(this).parent().parent().find('.social-repeater-general-control-icon').show();
            jQuery(this).parent().parent().find('.customizer-repeater-image-control').hide();
            jQuery(this).parent().parent().find('.customizer-repeater-color-control').prev().prev().show();
            jQuery(this).parent().parent().find('.customizer-repeater-color-control').show();
        }
        if (jQuery(this).val() === 'customizer_repeater_none') {
            jQuery(this).parent().parent().find('.social-repeater-general-control-icon').hide();
            jQuery(this).parent().parent().find('.customizer-repeater-image-control').hide();
            jQuery(this).parent().parent().find('.customizer-repeater-color-control').prev().prev().hide();
            jQuery(this).parent().parent().find('.customizer-repeater-color-control').hide();
        }

        hotelgalaxy_customizer_repeater_refresh_general_control_values();
        return false;
    });
    hotelgalaxy_media_upload('.customizer-repeater-custom-media-button');
    jQuery('.custom-media-url').on('change', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
        return false;
    });

    var color_options = {
        change: function(event, ui){
            hotelgalaxy_customizer_repeater_refresh_general_control_values();
        }
    };

    /**
     * This adds a new box to repeater
     *
     */
    hotelgalaxy_theme_controls.on('click', '.customizer-repeater-new-field', function () {
        var split_add_more_button=jQuery(this).text();
        var split_add_more_button_split=split_add_more_button.substr(4, 12);
        var th = jQuery(this).parent();
        var id = 'customizer-repeater-' + hotelgalaxy_customizer_repeater_uniqid();
        
        if (typeof th !== 'undefined') {
            /* Clone the first box*/
            var field = th.find('.customizer-repeater-general-control-repeater-container:first').clone( true, true );

            if (typeof field !== 'undefined') {
                /*Set the default value for choice between image and icon to icon*/
                field.find('.customizer-repeater-image-choice').val('customizer_repeater_icon');

                /*Show icon selector*/
                field.find('.social-repeater-general-control-icon').show();

                /*Hide image selector*/
                if (field.find('.social-repeater-general-control-icon').length > 0) {
                    field.find('.customizer-repeater-image-control').hide();
                }

                /*Show delete box button because it's not the first box*/
                field.find('.social-repeater-general-control-remove-field').show();

                /* Empty control for icon */
                field.find('.input-group-addon').find('.fa').attr('class', 'fa');


                /*Remove all repeater fields except first one*/

                field.find('.customizer-repeater-social-repeater').find('.customizer-repeater-social-repeater-container').not(':first').remove();
                field.find('.customizer-repeater-social-repeater-link').val('');
                field.find('.social-repeater-socials-repeater-colector').val('');

                /*Remove value from icon field*/
                field.find('.icp').val('');

                /*Remove value from text field*/
                field.find('.customizer-repeater-text-control').val('');

                /*Remove value from link field*/
                field.find('.customizer-repeater-link-control').val('');

                /*Remove value from text field*/
                field.find('.customizer-repeater-text2-control').val('');
                
                /*Remove value from button field*/
                field.find('.customizer-repeater-button2-control').val('');
                
                /*Remove value from link field*/
                field.find('.customizer-repeater-link2-control').val('');
                
                 /*Remove value from link field*/
                field.find('.customizer-repeater-link3-control').val('');

                /*Remove value from link field*/
                field.find('.customizer-repeater-video-control').val('');
                
                /*Set the default value in slide align*/
                field.find('.customizer-repeater-slide-align').val('left');
                
                /*Set the default value in checkbox*/
                field.find('.customizer-repeater-checkbox').val('');
                
                /*Set box id*/
                field.find('.social-repeater-box-id').val(id);

                /*Remove value from media field*/
                field.find('.custom-media-url').val('');

                /*Remove value from number field*/
                field.find('.customizer-repeater-number-control').val('');

                /*Remove value from title field*/
                field.find('.customizer-repeater-title-control').val('');


                /*Remove value from color field*/
                field.find('div.customizer-repeater-color-control .wp-picker-container').replaceWith('<input type="text" class="customizer-repeater-color-control ' + id + '">');
                field.find('input.customizer-repeater-color-control').wpColorPicker(color_options);


                field.find('div.customizer-repeater-color2-control .wp-picker-container').replaceWith('<input type="text" class="customizer-repeater-color2-control ' + id + '">');
                field.find('input.customizer-repeater-color2-control').wpColorPicker(color_options);

                // field.find('.customize-control-notifications-container').remove();


                /*Remove value from subtitle field*/
                field.find('.customizer-repeater-subtitle-control').val('');

                /*Remove value from subtitle field*/
                field.find('.customizer-repeater-subtitle2-control').val('');
                
                
                /*Remove value from subtitle field*/
                field.find('.customizer-repeater-btn3-control').val('');

                /*Remove value from shortcode field*/
                field.find('.customizer-repeater-shortcode-control').val('');

                /*Append new box*/
                th.find('.customizer-repeater-general-control-repeater-container:first').parent().append(field);

                /*Refresh values*/
                hotelgalaxy_customizer_repeater_refresh_general_control_values();
            }

        }
        return false;
    });


    hotelgalaxy_theme_controls.on('click', '.social-repeater-general-control-remove-field', function () {
        var split_delete_button=jQuery(this).text();
        var split_delete_button_split=split_delete_button.substr(8, 12);
        if (typeof    jQuery(this).parent() !== 'undefined') {
            jQuery(this).parent().hide(500, function(){
                jQuery(this).parent().remove();
                hotelgalaxy_customizer_repeater_refresh_general_control_values();
                
            });
        }
        return false;
    });


    hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-number-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });

    hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-title-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });

    jQuery('input.customizer-repeater-color-control').wpColorPicker(color_options);
    jQuery('input.customizer-repeater-color2-control').wpColorPicker(color_options);

    hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-subtitle-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });

    hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-subtitle2-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });
    
     hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-btn3-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });
    

    hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-shortcode-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });

    hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-text-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });

    hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-link-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });

    hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-text2-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });
    
    hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-button2-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });

    hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-link2-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });
    
     hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-link3-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });

     hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-video-control', function () {
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });
    
    hotelgalaxy_theme_controls.on('change','.customizer-repeater-checkbox', function(){
        
        hotelgalaxy_customizer_repeater_refresh_general_control_values();
    });
    
    /*Drag and drop to change icons order*/

    jQuery('.customizer-repeater-general-control-droppable').sortable({
        axis: 'y',
        update: function () {
            hotelgalaxy_customizer_repeater_refresh_general_control_values();
        }
    });


    /*----------------- Socials Repeater ---------------------*/
    hotelgalaxy_theme_controls.on('click', '.social-repeater-add-social-item', function (event) {
        event.preventDefault();
        var th = jQuery(this).parent();
        var id = 'customizer-repeater-social-repeater-' + hotelgalaxy_customizer_repeater_uniqid();
        if (typeof th !== 'undefined') {
            var field = th.find('.customizer-repeater-social-repeater-container:first').clone( true, true );
            if (typeof field !== 'undefined') {
                field.find( '.icp' ).val('');
                field.find( '.input-group-addon' ).find('.fa').attr('class','fa');
                field.find('.social-repeater-remove-social-item').show();
                field.find('.customizer-repeater-social-repeater-link').val('');
                field.find('.customizer-repeater-social-repeater-id').val(id);
                th.find('.customizer-repeater-social-repeater-container:first').parent().append(field);
            }
        }
        return false;
    });

    hotelgalaxy_theme_controls.on('click', '.social-repeater-remove-social-item', function (event) {
        event.preventDefault();
        var th = jQuery(this).parent();
        var repeater = jQuery(this).parent().parent();
        th.remove();
        hotelgalaxy_customizer_repeater_refresh_social_icons(repeater);
        return false;
    });

    hotelgalaxy_theme_controls.on('keyup', '.customizer-repeater-social-repeater-link', function (event) {
        event.preventDefault();
        var repeater = jQuery(this).parent().parent();
        hotelgalaxy_customizer_repeater_refresh_social_icons(repeater);
        return false;
    });

    hotelgalaxy_theme_controls.on('change', '.customizer-repeater-social-repeater-container .icp', function (event) {
        event.preventDefault();
        var repeater = jQuery(this).parent().parent().parent();
        hotelgalaxy_customizer_repeater_refresh_social_icons(repeater);
        return false;
    });

});

var hotelgalaxyentityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;',
    '/': '&#x2F;'
};

function hotelgalaxyescapeHtml(string) {
    'use strict';
    //noinspection JSUnresolvedFunction
    string = String(string).replace(new RegExp('\r?\n', 'g'), '<br />');
    string = String(string).replace(/\\/g, '&#92;');
    return String(string).replace(/[&<>"'\/]/g, function (s) {
        return hotelgalaxyentityMap[s];
    });

}