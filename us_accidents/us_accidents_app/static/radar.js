am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    /**
     * This is a copy of a chart created by Antti Lipponen: https://twitter.com/anttilip?lang=en Thanks a lot!
     */
    
    // disclaimer: this data is not accuarate, don't use it for any puroposes
    // first temperature is average for 1973-1980 period
    
    var temperatures = {
        "NORTHEAST": [
            ["Connecticut", 24.094, 27.483, 24.941, 26.914, 21.14, 21.078, 22.788, 25.672, 22.683, 30.795, 24.413, 26.19, 22.133, 24.041, 22.807, 25.926, 20.358, 26.494, 23.614, 20.354],
            ["Maine", 18.182, 20.229, 15.809, 21.053, 25.0, 22.222, 24.39, 30.172, 22.549, 21.61, 20.69, 24.852, 27.442, 27.66, 28.324, 37.895, 27.805, 19.124, 23.596, 24.084],
            ["Massachusetts", 19.408, 19.807, 20.288, 19.709, 14.677, 16.027, 19.089, 22.281, 24.324, 18.222, 24.053, 17.589, 20.0, 21.826, 21.909, 16.993, 21.357, 22.766, 24.074, 22.517],
            ["New Hampshire", 25.294, 27.692, 25.543, 22.024, 22.269, 22.907, 26.257, 19.337, 24.227, 20.69, 24.405, 19.167, 19.728, 26.786, 24.603, 23.077, 22.414, 16.901, 21.244, 23.611],
            ["Rhode Island", 29.167, 32.174, 30.508, 30.07, 26.087, 24.779, 29.0, 27.848, 28.395, 32.353, 34.091, 32.927, 36.364, 26.506, 21.875, 31.034, 27.273, 28.037, 25.61, 43.243],
            ["Vermont", 35.484, 24.167, 22.936, 23.469, 23.622, 28.431, 23.585, 30.233, 11.765, 26.804, 28.736, 31.343, 24.742, 25.843, 19.672, 20.0, 36.364, 22.34, 22.093, 19.118],
            ["New Jersey", 17.49, 15.848, 16.012, 16.172, 16.359, 18.354, 18.969, 20.299, 19.431, 16.647, 17.603, 19.612, 17.705, 15.867, 15.716, 12.583, 16.187, 13.924, 15.109, 15.661],
            ["New York", 15.792, 15.552, 13.873, 12.305, 14.47, 16.562, 15.701, 16.396, 17.016, 17.214, 17.259, 15.53, 16.405, 17.213, 15.22, 14.689, 12.751, 12.427, 16.377, 14.286],
            ["Pennsylvania", 23.518, 22.346, 25.614, 22.75, 23.728, 23.72, 23.862, 23.856, 26.01, 24.035, 23.556, 22.615, 23.562, 23.159, 20.601, 20.012, 16.372, 16.189, 16.548, 16.522]
        ],
        "MIDWEST": [
            ["Illinois", 24.077, 23.497, 25.825, 23.757, 23.998, 23.299, 26.994, 25.98, 25.487, 25.98, 25.438, 22.578, 26.737, 24.686, 22.692, 22.23, 20.089, 20.804, 20.527, 18.741],
            ["Indiana", 18.59, 16.977, 18.583, 15.904, 16.384, 18.561, 18.536, 16.855, 17.876, 18.63, 16.621, 17.416, 18.671, 15.953, 13.523, 12.651, 12.717, 13.212, 11.529, 11.488],
            ['Michigan', 19.444, 20.793, 18.696, 17.912, 19.322, 18.838, 22.149, 20.48, 21.146, 21.578, 20.622, 20.307, 20.777, 20.176, 17.877, 17.936, 16.786, 21.438, 18.813, 17.885],
            ['Ohio', 21.643, 25.995, 24.65, 22.222, 23.407, 23.109, 25.503, 25.444, 24.121, 25.088, 25.083, 22.986, 24.096, 19.865, 23.666, 20.256, 22.243, 20.89, 19.226, 21.011],
            ['Wisconsin', 24.126, 28.335, 26.256, 29.313, 27.845, 28.692, 33.679, 33.3, 27.421, 31.276, 27.15, 25.949, 25.216, 24.095, 26.156, 23.067, 22.778, 24.791, 26.625, 24.246],
            ['Iowa', 15.906, 17.19, 16.08, 17.491, 13.37, 13.356, 15.808, 15.717, 12.609, 17.694, 11.905, 15.222, 15.447, 20.276, 18.894, 19.477, 17.647, 17.738, 14.925, 18.085], 
            ['Kansas', 23.053, 20.373, 21.502, 21.966, 18.81, 20.761, 19.904, 17.949, 27.163, 24.4, 34.669, 21.875, 18.914, 21.564, 20.849, 15.632, 15.206, 13.738, 10.702, 12.341],
            ['Minnesota', 25.452, 23.165, 23.543, 27.107, 19.482, 23.735, 23.401, 22.544, 24.062, 20.578, 19.73, 22.441, 21.402, 18.65, 18.371, 21.044, 17.163, 19.663, 21.747, 19.12], 
            ['Missouri', 19.318, 23.4, 21.212, 21.648, 21.362, 23.04, 24.898, 24.042, 23.703, 25.261, 23.003, 24.104, 24.593, 23.653, 21.456, 17.413, 19.169, 17.978, 16.518, 18.608], 
            ['Nebraska', 21.237, 23.851, 24.697, 25.377, 23.011, 20.325, 24.324, 26.536, 23.592, 25.076, 20.482, 20.623, 31.579, 25.09, 26.71, 21.386, 25.658, 21.317, 18.414, 18.466], 
            ['North Dakota', 38.679, 37.313, 32.8, 36.232, 27.206, 35.821, 32.09, 41.935, 36.496, 28.994, 29.655, 29.787, 37.156, 32.093, 30.508, 30.357, 35.971, 33.333, 22.069, 28.906], 
            ['South Dakota', 27.397, 30.455, 34.862, 33.04, 25.957, 25.664, 29.958, 26.705, 26.667, 34.694, 26.486, 22.059, 25.714, 20.652, 25.414, 24.118, 31.655, 24.528, 27.027, 21.212]
        ],
        "SOUTH": [
            ['Delaware', 26.374, 26.486, 19.774, 23.077, 20.207, 25.263, 18.932, 25.786, 36.601, 26.623, 27.206, 29.078, 26.027, 28.667, 26.506, 19.697, 22.807, 15.029, 16.667, 12.834], 
            ['Florida', 19.761, 18.548, 18.432, 18.705, 17.107, 16.693, 16.611, 17.67, 19.419, 20.023, 18.578, 21.606, 20.023, 20.352, 18.13, 15.466, 14.453, 14.375, 14.37, 13.235], 
            ['Georgia', 17.609, 15.015, 14.932, 13.834, 12.442, 16.096, 17.325, 16.123, 16.554, 16.497, 16.647, 15.094, 16.825, 16.076, 15.389, 14.837, 14.543, 12.968, 12.783, 9.968], 
            ['Maryland', 18.707, 22.116, 21.532, 20.879, 23.853, 19.801, 21.665, 21.673, 19.509, 22.208, 23.844, 24.711, 21.097, 21.914, 19.44, 20.902, 16.361, 20.101, 16.799, 18.039], 
            ['North Carolina', 16.467, 18.998, 20.158, 19.762, 18.939, 19.412, 20.823, 23.44, 24.828, 22.185, 23.356, 22.604, 25.314, 20.912, 20.99, 20.472, 19.871, 18.443, 17.821, 13.744], 
            ['South Carolina', 18.304, 35.786, 29.514, 26.226, 28.445, 27.33, 25.125, 29.005, 31.904, 30.942, 29.917, 30.22, 26.936, 28.058, 27.264, 21.505, 22.979, 22.801, 18.182, 20.258], 
            ['Virginia', 21.196, 20.669, 20.624, 22.273, 21.364, 22.213, 22.873, 24.426, 39.071, 25.128, 23.085, 23.547, 19.534, 23.676, 21.317, 21.906, 20.746, 19.657, 20.711, 21.159], 
            ['District of Columbia', 3.03, 7.955, 5.479, 6.186, 15.714, 28.07, 16.327, 22.917, 16.279, 21.622, 32.143, 27.586, 4.762, 19.355, 19.231, 16.667, 26.316, 34.211, 11.364, 8.824], 
            ['West Virginia', 29.087, 24.26, 27.855, 23.346, 21.025, 21.514, 20.145, 28.073, 29.019, 28.825, 25.369, 21.03, 21.951, 26.218, 24.138, 19.718, 19.008, 18.844, 14.181, 16.901], 
            ['Alabama', 22.734, 15.165, 19.355, 19.784, 15.191, 20.077, 18.434, 22.774, 22.506, 22.504, 20.601, 19.852, 18.97, 20.233, 22.233, 18.666, 19.915, 17.26, 16.048, 17.477], 
            ['Kentucky', 21.679, 18.777, 19.771, 18.14, 18.997, 20.03, 18.765, 20.707, 19.402, 19.534, 19.271, 18.327, 18.27, 20.568, 20.135, 18.148, 16.398, 17.197, 15.005, 14.962], 
            ['Mississippi', 20.21, 15.446, 18.626, 14.987, 13.996, 17.541, 13.581, 15.667, 16.142, 10.035, 17.625, 16.481, 15.936, 22.279, 17.585, 14.548, 11.656, 12.232, 12.723, 16.137], 
            ['Tennessee', 22.691, 17.87, 24.456, 16.513, 18.06, 15.174, 18.103, 18.663, 18.214, 20.169, 20.201, 18.127, 19.986, 17.76, 18.296, 20.147, 16.074, 15.342, 13.342, 16.241], 
            ['Arkansas', 20.281, 18.204, 21.227, 22.788, 20.734, 19.064, 21.67, 22.119, 21.939, 22.095, 23.373, 22.838, 20.961, 18.816, 17.012, 18.709, 15.995, 17.793, 17.321, 17.589], 
            ['Louisiana', 25.243, 24.028, 24.349, 18.022, 20.521, 20.805, 23.111, 26.09, 28.109, 28.296, 24.194, 22.646, 23.085, 24.561, 24.58, 24.639, 21.125, 21.878, 19.796, 21.135], 
            ['Oklahoma', 19.821, 21.951, 18.763, 23.316, 21.11, 21.495, 21.268, 19.96, 23.448, 24.522, 25.251, 24.723, 22.046, 17.798, 16.704, 18.253, 18.856, 17.201, 15.282, 17.005], 
            ['Texas', 18.207, 18.113, 20.744, 20.133, 20.292, 20.145, 18.344, 19.524, 22.175, 24.403, 24.611, 22.406, 20.264, 20.361, 19.796, 17.441, 17.236, 17.657, 16.351, 15.534]
        ],
        "WEST": [
            ['Arizona', 19.971, 19.847, 18.31, 17.772, 16.481, 17.862, 20.566, 22.047, 21.107, 20.278, 19.166, 17.72, 19.367, 17.391, 17.517, 19.422, 15.933, 16.977, 14.134, 14.897], 
            ['Colorado', 22.722, 27.834, 27.198, 24.886, 20.251, 25.029, 26.243, 23.574, 25.245, 25.496, 21.631, 26.235, 22.449, 24.089, 23.761, 22.25, 21.946, 21.292, 22.185, 21.724], 
            ['Idaho', 26.923, 22.43, 20.113, 23.249, 22.714, 18.935, 25.0, 24.742, 27.303, 20.486, 26.482, 22.222, 21.721, 23.466, 23.605, 25.714, 20.0, 20.0, 16.199, 23.934], 
            ['Montana', 28.125, 29.412, 37.54, 37.267, 34.909, 34.146, 33.11, 34.451, 31.818, 32.353, 36.073, 30.534, 42.8, 34.211, 37.22, 33.704, 38.498, 29.437, 38.389, 32.42], 
            ['Nevada', 24.876, 19.248, 19.223, 22.289, 19.626, 20.342, 21.845, 23.152, 24.664, 24.332, 22.478, 23.333, 21.727, 21.41, 22.414, 21.711, 20.771, 16.304, 17.556, 19.913], 
            ['New Mexico', 26.69, 26.491, 28.897, 31.474, 21.019, 22.642, 24.65, 26.0, 23.318, 25.934, 26.116, 25.721, 21.186, 23.274, 22.059, 21.932, 21.135, 18.994, 19.194, 18.44], 
            ['Utah', 16.916, 12.821, 13.706, 8.488, 14.209, 7.438, 12.877, 14.439, 13.675, 13.006, 14.154, 14.706, 12.881, 12.111, 14.444, 10.377, 12.935, 13.854, 15.691, 11.714], 
            ['Wyoming', 19.78, 27.053, 26.601, 24.873, 25.0, 34.872, 26.667, 29.944, 31.016, 32.432, 31.351, 23.926, 24.845, 27.358, 26.064, 28.125, 19.608, 26.897, 24.818, 16.848], 
            ['Alaska', 32.0, 30.233, 26.549, 21.6, 20.567, 27.184, 22.523, 23.276, 27.473, 25.843, 25.0, 26.087, 18.072, 22.388, 25.743, 27.273, 33.028, 21.359, 30.769, 26.667], 
            ['California', 19.637, 21.117, 21.129, 20.178, 21.703, 21.271, 21.311, 21.799, 22.257, 23.205, 20.887, 20.534, 20.595, 20.15, 20.21, 21.301, 19.664, 19.498, 18.5, 16.783], 
            ['Hawaii', 19.78, 25.0, 23.81, 32.934, 24.599, 31.638, 32.843, 33.918, 32.857, 38.129, 28.758, 32.143, 26.554, 30.081, 25.0, 21.774, 21.29, 25.694, 18.471, 21.088], 
            ['Oregon', 22.117, 21.327, 22.98, 22.843, 23.761, 19.331, 23.667, 25.641, 24.952, 24.131, 16.706, 22.936, 20.657, 26.603, 20.675, 26.043, 19.316, 22.278, 19.667, 22.29], 
            ['Washington', 26.99, 25.058, 27.945, 25.313, 25.627, 28.654, 27.546, 28.01, 29.536, 34.7, 28.387, 27.558, 24.456, 25.676, 23.36, 21.224, 20.991, 21.175, 20.955, 23.724]
        ],
    }
    
    var startYear = 2000;
    var endYear = 2019;
    var currentYear = 2010;
    var colorSet = new am4core.ColorSet();
    
    var chart = am4core.create("chartdiv", am4charts.RadarChart);
    chart.numberFormatter.numberFormat = "##.##";
    chart.hiddenState.properties.opacity = 0;
    
    chart.startAngle = 270 - 180;
    chart.endAngle = 270 + 180;
    
    chart.padding(5,15,5,10)
    chart.radius = am4core.percent(80);
    chart.innerRadius = am4core.percent(40);
    
    // year label goes in the middle
    var yearLabel = chart.radarContainer.createChild(am4core.Label);
    yearLabel.horizontalCenter = "middle";
    yearLabel.verticalCenter = "middle";
    yearLabel.fill = am4core.color("#673AB7");
    yearLabel.fontSize = 30;
    yearLabel.text = String(currentYear);
    
    // zoomout button
    var zoomOutButton = chart.zoomOutButton;
    zoomOutButton.dx = 0;
    zoomOutButton.dy = 0;
    zoomOutButton.marginBottom = 15;
    zoomOutButton.parent = chart.rightAxesContainer;
    
    // scrollbar
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.parent = chart.rightAxesContainer;
    chart.scrollbarX.orientation = "vertical";
    chart.scrollbarX.align = "center";
    chart.scrollbarX.exportable = false;
    
    // vertical orientation for zoom out button and scrollbar to be positioned properly
    chart.rightAxesContainer.layout = "vertical";
    chart.rightAxesContainer.padding(120, 20, 120, 20);
    
    // category axis
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    
    var categoryAxisRenderer = categoryAxis.renderer;
    var categoryAxisLabel = categoryAxisRenderer.labels.template;
    categoryAxisLabel.location = 0.5;
    categoryAxisLabel.radius = 28;
    categoryAxisLabel.relativeRotation = 90;
    
    categoryAxisRenderer.fontSize = 11;
    categoryAxisRenderer.minGridDistance = 10;
    categoryAxisRenderer.grid.template.radius = -25;
    categoryAxisRenderer.grid.template.strokeOpacity = 0.05;
    categoryAxisRenderer.grid.template.interactionsEnabled = false;
    
    categoryAxisRenderer.ticks.template.disabled = true;
    categoryAxisRenderer.axisFills.template.disabled = true;
    categoryAxisRenderer.line.disabled = true;
    
    categoryAxisRenderer.tooltipLocation = 0.5;
    categoryAxis.tooltip.defaultState.properties.opacity = 0;
    
    // value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 50;
    valueAxis.strictMinMax = true;
    valueAxis.tooltip.defaultState.properties.opacity = 0;
    valueAxis.tooltip.animationDuration = 0;
    valueAxis.cursorTooltipEnabled = true;
    valueAxis.zIndex = 10;
    
    var valueAxisRenderer = valueAxis.renderer;
    valueAxisRenderer.axisFills.template.disabled = true;
    valueAxisRenderer.ticks.template.disabled = true;
    valueAxisRenderer.minGridDistance = 20;
    valueAxisRenderer.grid.template.strokeOpacity = 0.05;
    
    
    // series
    var series = chart.series.push(new am4charts.RadarColumnSeries());
    series.columns.template.width = am4core.percent(90);
    series.columns.template.strokeOpacity = 0;
    series.dataFields.valueY = "value" + currentYear;
    series.dataFields.categoryX = "country";
    series.tooltipText = "{categoryX}:{valueY.value}";
    
    // this makes columns to be of a different color, depending on value
    series.heatRules.push({ target: series.columns.template, property: "fill", minValue: 0, maxValue: 50, min: am4core.color("#673AB7"), max: am4core.color("#F44336"), dataField: "valueY" });
    
    // cursor
    var cursor = new am4charts.RadarCursor();
    chart.cursor = cursor;
    cursor.behavior = "zoomX";
    
    cursor.xAxis = categoryAxis;
    cursor.innerRadius = am4core.percent(40);
    cursor.lineY.disabled = true;
    
    cursor.lineX.fillOpacity = 0.2;
    cursor.lineX.fill = am4core.color("#000000");
    cursor.lineX.strokeOpacity = 0;
    cursor.fullWidthLineX = true;
    
    // year slider
    var yearSliderContainer = chart.createChild(am4core.Container);
    yearSliderContainer.layout = "vertical";
    yearSliderContainer.padding(0, 38, 0, 38);
    yearSliderContainer.width = am4core.percent(100);
    
    var yearSlider = yearSliderContainer.createChild(am4core.Slider);
    yearSlider.events.on("rangechanged", function () {
        updateRadarData(startYear + Math.round(yearSlider.start * (endYear - startYear)));
    })
    yearSlider.orientation = "horizontal";
    yearSlider.start = 0.5;
    yearSlider.exportable = false;
    
    chart.data = generateRadarData();
    
    function generateRadarData() {
        var data = [];
        var i = 0;
        for (var continent in temperatures) {
            var continentData = temperatures[continent];
    
            continentData.forEach(function (country) {
                var rawDataItem = { "country": country[0] }
    
                for (var y = 1; y < country.length; y++) {
                    rawDataItem["value" + (startYear + y - 1)] = country[y];
                }
    
                data.push(rawDataItem);
            });
    
            createRange(continent, continentData, i);
            i++;
    
        }
        return data;
    }
    
    
    function updateRadarData(year) {
        if (currentYear != year) {
            currentYear = year;
            yearLabel.text = String(currentYear);
            series.dataFields.valueY = "value" + currentYear;
            chart.invalidateRawData();
        }
    }
    
    function createRange(name, continentData, index) {
    
        var axisRange = categoryAxis.axisRanges.create();
        axisRange.axisFill.interactionsEnabled = true;
        axisRange.text = name;
        // first country
        axisRange.category = continentData[0][0];
        // last country
        axisRange.endCategory = continentData[continentData.length - 1][0];
    
        // every 3rd color for a bigger contrast
        axisRange.axisFill.fill = colorSet.getIndex(index * 3);
        axisRange.grid.disabled = true;
        axisRange.label.interactionsEnabled = false;
        axisRange.label.bent = true;
    
        var axisFill = axisRange.axisFill;
        axisFill.innerRadius = -0.001; // almost the same as 100%, we set it in pixels as later we animate this property to some pixel value
        axisFill.radius = -20; // negative radius means it is calculated from max radius
        axisFill.disabled = false; // as regular fills are disabled, we need to enable this one
        axisFill.fillOpacity = 1;
        axisFill.togglable = true;
    
        axisFill.showSystemTooltip = true;
        axisFill.readerTitle = "click to zoom";
        axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    
        axisFill.events.on("hit", function (event) {
            var dataItem = event.target.dataItem;
            if (!event.target.isActive) {
                categoryAxis.zoom({ start: 0, end: 1 });
            }
            else {
                categoryAxis.zoomToCategories(dataItem.category, dataItem.endCategory);
            }
        })
    
        // hover state
        var hoverState = axisFill.states.create("hover");
        hoverState.properties.innerRadius = -10;
        hoverState.properties.radius = -25;
    
        var axisLabel = axisRange.label;
        axisLabel.location = 0.5;
        axisLabel.fill = am4core.color("#ffffff");
        axisLabel.radius = 3;
        axisLabel.relativeRotation = 0;
    }
    
    var slider = yearSliderContainer.createChild(am4core.Slider);
    slider.start = 1;
    slider.exportable = false;
    slider.events.on("rangechanged", function () {
        var start = slider.start;
    
        chart.startAngle = 270 - start * 179 - 1;
        chart.endAngle = 270 + start * 179 + 1;
    
        valueAxis.renderer.axisAngle = chart.startAngle;
    })
    
    }); // end am4core.ready()
    
    