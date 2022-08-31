jQuery(document).ready(function() {
    jQuery("#item1_Xemthem").click(function(e) {
        e.preventDefault();
        jQuery(".poup_overlay").show();
    });
    jQuery(".poup_overlay ").click(function() {
        jQuery(".poup_overlay").hide();
    });
    jQuery("#tat").click(function() {
        jQuery(".poup_overlay").hide();
    });

});