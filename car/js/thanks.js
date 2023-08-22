$(document).ready(function() {
    $("#contact-form").submit(function(e) {
        e.preventDefault();
        var form = $(this);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success: function(response) {
                $("#contact-form").trigger("reset");
                $("#thank-you-message").addClass("show");
            }
        });
    });
});
