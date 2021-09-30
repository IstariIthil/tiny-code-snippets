var slider = document.getElementById("slider");

function change_color() {
    var slider_value = parseInt(slider.value , 10);
    if (slider_value >= 0 && slider_value <= 33) {
            slider.className = "slider_color_1";
        } else {
            if (slider_value >= 33 && slider_value <= 66) {
                slider.className = "slider_color_2";
            } else {
                if (slider_value >= 66 && slider_value <= 100) {
                    slider.className = "slider_color_3";
            }
        }
    }
};