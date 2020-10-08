(function () {

    $('#contact_form').validator();

    $('#contact_form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact_form/contact_form.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact_form').find('.messages').html(alertBox);
                        $('#contact_form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
});
function sunsetHills() {
    let building1 = parseInt(document.getElementById("sun1").value);
    let building2 = parseInt(document.getElementById("sun2").value);
    let building3 = parseInt(document.getElementById("sun3").value);
    let building4 = parseInt(document.getElementById("sun4").value);
    let building5 = parseInt(document.getElementById("sun5").value);
    let buildingArr = [building1, building2, building3, building4, building5];
    let canSee = ["Building 1 can see the sunset"];
    let tallest = buildingArr[0];
    for (i = 1; i < buildingArr.length; i++) {
        if (buildingArr[i] > tallest) {
            tallest = buildingArr[i];
            canSee.push("Building " + (i + 1) + " can see the sunset");
        }
    }

    let resultS = canSee.join(", ");
    document.getElementById("resultS").innerHTML = `<b>${resultS}</b>`;
    document.getElementById("build1").style.height = (building1 * 10)+ "%";
    document.getElementById("build2").style.height = (building2 * 10)+ "%";
    document.getElementById("build3").style.height = (building3 * 10)+ "%";
    document.getElementById("build4").style.height = (building4 * 10)+ "%";
    document.getElementById("build5").style.height = (building5 * 10)+ "%";

}