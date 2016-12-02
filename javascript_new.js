var sliderControl = null;
    var myMap = L.map('map').setView([52.06, 7.40], 10);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    //Fetch some data from a GeoJSON file
    $.getJSON("points.json", function(json) {
        var testlayer = L.geoJson(json),
            sliderControl = L.control.sliderControl({
                position: "topright",
                layer: testlayer
            });
        //For a Range-Slider use the range property:
        sliderControl = L.control.sliderControl({
            position: "topright",
            layer: testlayer,
            range: true
        });
        //Make sure to add the slider to the map ;-)
        myMap.addControl(sliderControl);
        //And initialize the slider
        sliderControl.startSlider();
    });
