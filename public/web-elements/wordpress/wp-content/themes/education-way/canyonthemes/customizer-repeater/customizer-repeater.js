( function( $ ) {
    /*Drag and drop to change order*/
    $(document).ready(function () {
        var customize_theme_controls = $(document);
        function refresh_repeater_values(){
            $(".pt-repeater-field-control-wrap").each(function(){
                var values = [];
                var $this = $(this);
                $this.find(".repeater-field-control").each(function(){
                    var valueToPush = {};
                    $(this).find('[data-name]').each(function(){
                        if( $(this).attr('type') === 'checkbox'){
                            if($(this).is(':checked')){
                                var dataValue = 1;
                            }
                            else {
                                var dataValue = '';
                            }
                        }
                        else{
                            var dataValue = $(this).val();
                        }
                        var dataName = $(this).attr('data-name');
                        valueToPush[dataName] = dataValue;
                    });
                    values.push(valueToPush);
                });
                $this.next('.pt-repeater-collection').val(JSON.stringify(values)).trigger('change');
            });
        }

        customize_theme_controls.on('click','.repeater-field-title',function(){
            $(this).next().slideToggle();
            $(this).closest('.repeater-field-control').toggleClass('expanded');
        });
        customize_theme_controls.on('click', '.repeater-field-close', function(){
            $(this).closest('.repeater-fields').slideUp();
            $(this).closest('.repeater-field-control').toggleClass('expanded');
        });
        customize_theme_controls.on("click",'.pt-repeater-add-control-field', function(){
            var $this = $(this).parent();
            if(typeof $this !== 'undefined') {
                var field = $this.find(".pt-repeater-field-control-generator").html();
                var field = $($.parseHTML(field));
                if(typeof field !== 'undefined'){
                    field.find("input[type='text'][data-name]").each(function(){
                        var defaultValue = $(this).attr('data-default');
                        $(this).val(defaultValue);
                    });
                    field.find("textarea[data-name]").each(function(){
                        var defaultValue = $(this).attr('data-default');
                        $(this).val(defaultValue);
                    });
                    field.find("select[data-name]").each(function(){
                        var defaultValue = $(this).attr('data-default');
                        $(this).val(defaultValue);
                    });

                    field.find('.single-field').show();

                    $this.find('.pt-repeater-field-control-wrap').append(field);

                    field.addClass('expanded').find('.repeater-fields').show();
                    $('.accordion-section-content').animate({ scrollTop: $this.height() }, 1000);
                    refresh_repeater_values();
                }

            }
            return false;
        });

        customize_theme_controls.on("click", ".repeater-field-remove",function(){
            if( typeof	$(this).parent() != 'undefined'){
                $(this).closest('.repeater-field-control').slideUp('normal', function(){
                    $(this).remove();
                    refresh_repeater_values();
                });
            }
            return false;
        });

        customize_theme_controls.on('keyup change', '[data-name]',function(){
            refresh_repeater_values();
            return false;
        });
        $(".pt-repeater-field-control-wrap").sortable({
            orientation: "vertical",
            update: function( event, ui ) {
                refresh_repeater_values();
            }
        });

        /**
         * Script for Customizer icons
         */
        customize_theme_controls.on('click', '.pt-customize-icons .single-icon', function() {
            var single_icon = $(this),
                at_customize_icons = single_icon.closest( '.pt-customize-icons' ),
                icon_display_value = single_icon.children('i').attr('class'),
                icon_split_value = icon_display_value.split(' '),
                icon_value = icon_split_value[1];

            single_icon.siblings().removeClass('selected');
            single_icon.addClass('selected');
            at_customize_icons.find('.pt-icon-value').val( icon_value );
            at_customize_icons.find('.icon-preview').html('<i class="' + icon_display_value + '"></i>');
            at_customize_icons.find('.pt-icon-value').trigger('change');
        });

        customize_theme_controls.on('click', '.pt-customize-icons .icon-toggle ,.pt-customize-icons .icon-preview', function() {
            var icon_toggle = $(this),
                at_customize_icons = icon_toggle.closest( '.pt-customize-icons' ),
                icons_list_wrapper = at_customize_icons.find( '.icons-list-wrapper' ),
                dashicons = at_customize_icons.find( '.dashicons' );

            if ( icons_list_wrapper.is(':hidden') ) {
                icons_list_wrapper.slideDown();
                dashicons.removeClass('dashicons-arrow-down');
                dashicons.addClass('dashicons-arrow-up');
            } else {
                icons_list_wrapper.slideUp();
                dashicons.addClass('dashicons-arrow-down');
                dashicons.removeClass('dashicons-arrow-up');
            }

        });
        customize_theme_controls.on('keyup', '.pt-customize-icons .icon-search', function() {
            var text = $(this),
                value = this.value,
                at_customize_icons = text.closest( '.pt-customize-icons' ),
                icons_list_wrapper = at_customize_icons.find( '.icons-list-wrapper' );

            icons_list_wrapper.find('i').each(function () {
                if ($(this).attr('class').search(value) > -1) {
                    $(this).parent('.single-icon').show();
                } else {
                    $(this).parent('.single-icon').hide();

                }
            });
        });
    })

} )( jQuery );