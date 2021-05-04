/*Creates a map that is interactive and shows data based on user selection*/

var years = "all";
var year1 = 2000;
var year2 = 2020;
var allStates = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN",
"IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
"NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
var allStatesFull = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",	"Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas",	"Kentucky",	"Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",	"New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
var allHours = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
var allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthDivision = ["End", "Middle", "Beginning"];
var allAgeInts = ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100"];
var mapData = [];
var hourData = [];
var weekdayData = [];
var monthData = [];
var ageDataF = [];
var ageDataCountF = [];
var ageDataM = [];
var ageDataCountM = [];
var fatalities = [];
var showWomen = true;
var showMen = true;
var mapping = new Map();

var mapDiv = document.getElementById('mapDiv');
var subDiv = document.getElementById('subplotDiv');

// var year_min = document.getElementById('min_year').value;
// var year_max = document.getElementById('max_year').value;


//variable for the currently selected state
var currentState = 'none';

//function test(allData, personData){}
function test(personData, allData){

function unpack2(personData, key) {
    return personData.map(function(row) { return row[key]; });
}
testDummy(allData)

function testDummy(allData){

    /*Maps the data*/
function unpack(allData, key) {
    return allData.map(function(row) { return row[key]; });
}

// console.log("Accident.csv loaded");

/*Used to initialize an array of whatever size full of zeroes*/
function arrZeros(num){
    var arr = [];
    for (i = 0; i < num; i++){
        arr = arr.concat(0);
    }
    return arr;
}

function initialziation(){
    /*Uses the dictionary to create an array of the values for a particular attribute*/
    fatalities = unpack(allData, 'FATALS');
    var stCase = unpack(allData, "ST_CASE");
    var perstCase = unpack2(personData, "ST_CASE");
    var listStates = unpack(allData, 'STATENAME');
    var listHours = unpack(allData, 'HOUR');
    var listAge = unpack2(personData, "AGE");
    var listGender = unpack2(personData, "SEX");
    var listYear = unpack(allData, 'YR_NO');
    var perYear = unpack2(personData, "YR_NO");
    var listWeekDay = unpack(allData, 'DAY_WEEK');
    var listDay = unpack(allData, 'DAY');
    var listMonth = unpack(allData, 'MONTH');
    //traverse on ACCIDENTS YR.NO, valid year, check if the rest is valid; then retrieve from PERSONS to see if valid
    //if valid apply

    mapData = arrZeros(50);
    hourData = arrZeros(24);
    weekdayData = arrZeros(7);
    monthData = [arrZeros(12), arrZeros(12), arrZeros(12)];
    ageDataF = arrZeros(21);
    ageDataM = arrZeros(21);
    //an array of data for age is created for men and another is created women
    /*
        The position of a single record will be the same in each of the arrays for their attributes (ex.: listTemp, listSeverity), because
        they are all from the same data set. Using this logic validIndices returns whether or not the record at a given index fits the criteria
        a user provides from the dropdown menu and state selection.
    */
    //determines whether or not a record is valid based on the circumstances sent in by the user
    function createValidIndices(ind){
        //if the user selects the one state option
        //creates unique id based on statecase and year - values are in the 100s of millions so need to worry about accidentally using a statecase #
        var id = listYear[ind] + "" + stCase[ind] + "";
        if (year1 != 2000){
            if (listYear[ind] < year1){
                return false;
            }
        }
        if (year2 != 2020){
            if (listYear[ind] > year2){
                return false;
            }
        }
        mapping.set(id, {validity: true, female: [], male: []});
        return true;
    }

    stCase.forEach(function(curr, ind){
        if (createValidIndices(ind)){
            fCount = parseInt(fatalities[ind]);
            sIndex = allStatesFull.indexOf(listStates[ind]);
            if (sIndex != -1){
                mapData[sIndex] += fCount;
            }

            var hIndex = allHours.indexOf(listHours[ind].toString());
            if (hIndex != -1){
                hourData[hIndex] += fCount;
            }

            var wIndex = allDays.indexOf(listWeekDay[ind]);
            if (wIndex != -1){
                weekdayData[wIndex] += fCount;
            }

            var day = parseInt(listDay[ind]);
            var dIndex;
            if (day > 20){
                dIndex = 0;
            } else if (day > 10){
                dIndex = 1;
            } else {
                dIndex = 2;
            }

            var mIndex = listMonth[ind] - 1;
            if (mIndex > -1 && mIndex < 12){
                monthData[dIndex][mIndex] += fCount;
            }
        }
    });

    listGender.forEach(function(curr, ind) {
        var id = perYear[ind] + "" + perstCase[ind] + "";
        if (mapping.has(id)){ 
            var aIndex = 0;
            var age = listAge[ind];
            for(i = 20; i > 0; i--){
                if (age > parseInt(allAgeInts[i])){
                    aIndex = i;
                break;
                }
            }
            var spot = mapping.get(id);
            if (curr == "Female"){
                ageDataF[aIndex] += 1;
                spot.female = spot.female.concat(aIndex);
            } else {
                ageDataM[aIndex] += 1;
                spot.male = spot.male.concat(aIndex);
            }
        }
    });
}

function getData(oneState){

    /*Uses the dictionary to create an array of the values for a particular attribute*/
    fatalities = unpack(allData, 'FATALS');
    var stCase = unpack(allData, "ST_CASE");
    var listStates = unpack(allData, 'STATENAME');
    var listHours = unpack(allData, 'HOUR');
    var listYear = unpack(allData, 'YR_NO');
    var listWeekDay = unpack(allData, 'DAY_WEEK');
    var listDay = unpack(allData, 'DAY');
    var listMonth = unpack(allData, 'MONTH');
    //traverse on ACCIDENTS YR.NO, valid year, check if the rest is valid; then retrieve from PERSONS to see if valid
    //if valid apply

    mapData = arrZeros(50);
    hourData = arrZeros(24);
    weekdayData = arrZeros(7);
    monthData = [arrZeros(12), arrZeros(12), arrZeros(12)];
    ageDataF = arrZeros(21);
    ageDataM = arrZeros(21);
    //an array of data for age is created for men and another is created women
    /*
        The position of a single record will be the same in each of the arrays for their attributes (ex.: listTemp, listSeverity), because
        they are all from the same data set. Using this logic validIndices returns whether or not the record at a given index fits the criteria
        a user provides from the dropdown menu and state selection.
    */
    //determines whether or not a record is valid based on the circumstances sent in by the user
    function validIndices(ind){
        //if the user selects the one state option
        //creates unique id based on statecase and year - values are in the 100s of millions so need to worry about accidentally using a statecase #
        var id = listYear[ind] + "" + stCase[ind] + "";
        if (oneState){
            /*
                check to see if the value of the current record's state paramater matches the state that's currently selected, 
                return false if they don't match
            */
            if (listStates[ind] != allStatesFull[allStates.indexOf(currentState)]){
                return false;
            }
        }
        //uses the value set in the drop down to check if a records temperature is in the correct range
        //javascript uses == and != for string comparison
        if (year1 != 2000){
            if (listYear[ind] < year1){
                return false;
            }
        }
        if (year2 != 2020){
            if (listYear[ind] > year2){
                return false;
            }
        }

        if (!showWomen){
            var spot = mapping.get(id);
            if (spot.female.length > 0){
                return false;
            }
        }

        if (!showMen){
            var spot = mapping.get(id);
            if (spot.male.length > 0){
                return false;
            }
        }
        return true;
    }

    stCase.forEach(function(curr, ind){
        if (validIndices(ind)){
            var id = listYear[ind] + "" + curr + "";
            fCount = parseInt(fatalities[ind]);
            sIndex = allStatesFull.indexOf(listStates[ind]);
            if (sIndex != -1){
                mapData[sIndex] += fCount;
            }

            var hIndex = allHours.indexOf(listHours[ind].toString());
            if (hIndex != -1){
                hourData[hIndex] += fCount;
            }

            var wIndex = allDays.indexOf(listWeekDay[ind]);
            if (wIndex != -1){
                weekdayData[wIndex] += fCount;
            }

            var day = parseInt(listDay[ind]);
            var dIndex;
            if (day > 20){
                dIndex = 0;
            } else if (day > 10){
                dIndex = 1;
            } else {
                dIndex = 2;
            }

            var mIndex = listMonth[ind] - 1;
            if (mIndex > -1 && mIndex < 12){
                monthData[dIndex][mIndex] += fCount;
            }

            if (mapping.has(id)){
                var spot = mapping.get(id);
                spot.female.forEach(function(curr2, ind2){
                    ageDataF[curr2] += 1;
                });

                spot.male.forEach(function(curr2, ind2){
                    ageDataM[curr2] += 1;
                });
            }
        }
    });
}

//Updates the data's values when conditions are changed and all of the states are selected
function updateData(){
    getData(false);
    //Plotly.restyle updates the data being used by the map
    /*
        Plotly.restyle takes in a target div as the first argument and the second argument is any trace changes
        y here is referring to the subplot data that uses the first y-axis which is the hour line chart
        z here is referring to the subplot data that uses the first z-axis which is the map
        Each of them take in the updated data, but this data could possibly include other data sets, so it is a 2D array
        The last array determines which trace indices are being update. If all the arrays are updated then all of the subplots' information
        is changed to be the same thing
    */
    Plotly.restyle(mapDiv, {'z': [mapData]});
    //Domain needed or else it'll reset this property
    //Plotly.relayout updates the look of the plot, only being used to update the titles of the groups
    Plotly.relayout(mapDiv, {title:'Fatalities in US Traffic Accidents (' + year1 + ' - ' + year2 + ')', 'yaxis2': {domain: [0, 0.25], 'title': "Total Fatalities"}});
    //Shows y using two data sets for the trace for the female ages and for the male ages
    Plotly.restyle(subDiv, {'y': [hourData, ageDataF, ageDataM, weekdayData, monthDivision], 'z': [monthData]}, [0, 1, 2, 3, 4]);
}

//Updates the data's values when conditions are changed and one of the states is selected
function updateStateData(){
    getData(true);
    //Map data not changed here because it is already being changed in another function
    Plotly.relayout(mapDiv, {title:'Fatalities in '+ currentState + ' Traffic Accidents (' + year1 + ' - ' + year2 + ')', 'yaxis2': { domain: [0, 0.25], 'title': currentState + "'s Fatalities"}});
    Plotly.restyle(subDiv, {'y': [hourData, ageDataF, ageDataM, weekdayData, monthDivision], 'z': [monthData]}, [0, 1, 2, 3, 4]);
}

initialziation();

var trace = {
    /*
        all inputs that are not variables or integers must be written as strings, almost all the strings listed are from a set of options
        Plotly has, which can be found on thier website
    */
    //sets the type of plot a trace will be
    type: 'choropleth',
    //chooses from a set of maps plotly has
    locationmode: 'USA-states',
    //chooses which states will receive the data
    locations: allStates,
    //what color scale will the map use -- can actually write our own if we want to
    colorscale: 'Reds',
    //Uses the z-axis to store the data for the map and maps these z-values to the locations listed in the locations attribute from earlier
    z: mapData,
    //Sets the min and max of the color scale
    zmin: 0,
    zmax: 40000
};

var trace2 = {
    //Sets values for the x and y axis
    x: allHours,
    y: hourData,
    //Scatter is type for line charts
    type: 'scatter',
    //turns off the legend
    showlegend: false,
    /*
        For subplots which x axis and which y axis they use must be specified. The default is x1 and y1. If this is not done,
        the plots will be drawn one over the other
    */
}

var trace3 = {
    x: allAgeInts,
    y: ageDataF,
    type: 'bar',
    //Changing the name of the trace determines what will come up when it is being hovered over by the user as well as how it appears in the legend
    name: 'Women',
    showlegend: true,
    xaxis: 'x2',
    yaxis: 'y2',
    marker: {
        //changes the color the bar is
        color: 'rgb(142,124,195)'
    }
}

var trace4 = {
    x: allAgeInts,
    y: ageDataM,
    type: 'bar',
    name: 'Men',
    showlegend: true,
    //Uses the same x and y axis as trace 3, so that they can be drawn stacked
    xaxis: 'x2',
    yaxis: 'y2'
}

var trace5 = {
    x: allDays,
    y: weekdayData,
    type: 'bar',
    showlegend: false,
    xaxis: 'x3',
    yaxis: 'y3'
}

var trace6 = {
    x: allMonths,
    y: monthDivision,
    z: monthData,
    type: 'heatmap',
    showlegend: false,
    xaxis: 'x4',
    yaxis: 'y4'
}

//Data is the array of all the traces to be drawn by Plotly
var data = [trace2, trace3, trace4, trace5, trace6];

//temporary alert of what values have been selected in the drop down
// function queryMaker(){
//     alert("Years: " + year1 + "\nSeverity: " + severity + "\nTemperature: " + temperature + "\nWeather: " + weather + "\nRoad Visibility: " + rdVisibility + "\nTraffic Signal: " + traffic);
// }

// var min_year = parseInt(($("#min_year").val('2016')))
// var max_year= parseInt(($("#max_year").val('2020')))
//Slider
//Uses JQuery for creation -- I'm not too well-versed in JQuery, so I'm sorry if any notes I write aren't too helpful
$(function() {
    console.log(min_year)
    console.log(max_year)
    $( "#slider" ).slider({
        //Sets that the slider is a range slider, which is not possible in Plotly, D3, or regular HTML
       range: true,
       //Sets the currently selected range
       
       min: parseInt(min_year),
       max: parseInt(max_year),
       values: [parseInt(min_year), parseInt(max_year)],
    //    values: min_year,
       //Use change to update the sldider as soon as the user interacts with it with no delay
       change : function(event, ui){
           //Updates the global year values to match the slider input
           console.log("coming in change", typeof(min_year),typeof(max_year));
           year1 = $("#slider").slider("values", 0);
           year2 = $("#slider").slider("values", 1);
           updateData();
       }
    })
    
});


var layout = {
    title:'Fatalities in US Traffic Accidents from ' + min_year + ' to ' + max_year, 
    height: 500,
    barmode: 'stack',
    geo:{
        scope: 'usa'
    },
    margin: {
        l: 5
    }
};

var sublayout = {
    grid: {rows: 1, columns: 4, pattern: 'independent'},
    barmode: 'stack',
    yaxis: {
        title: 'Total Fatalities'
    },
    xaxis: {
        title : 'Time'
    },
    yaxis2: {
        /*
            Ensures that the third y-axis is placed directly next to the third x-axis or else it will not be placed correctly in position
            since the domain for the x-axis is not the default values
        */
        anchor: 'x2'
    },
    xaxis2: {
        title: 'Age'
    },

    yaxis3: {
        anchor: 'x3'
    },
    legend:{
        x: 0.47,
        xanchor: 'right',
        y: 1
    },
    margin: {
        t: 10
    }
};
//modeBarButtonsToRemove determines which buttons from the options provided will not be available for the user to use
// Plotly.newPlot(mapDiv, [trace], layout, {modeBarButtonsToRemove: ['lasso2d', 'select2d']});

Plotly.newPlot(mapDiv, [trace], layout, {modeBarButtonsToRemove: ['lasso2d', 'select2d']}).then(function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("optbox").style.display = "block";
    document.getElementById("mapDiv").style.display = "block";
    document.getElementById("subplotDiv").style.display = "block";
});

Plotly.newPlot(subDiv, data, sublayout, {modeBarButtonsToRemove: ['lasso2d', 'select2d']})

//sets the currently selected state and allows the user to deselect the state, having all the states selected again
/*
    .on Generates an event listener with the first argument being the event it is supposed to listen for and the second being the function
    it carries out on that event occuring with the annonymous function taking in the data of whatever was clicked in this case
*/
mapDiv.on('plotly_click', function(data){
    var pointnum = '';
    var tracenum = '';
    var stateName = '';
    var stateVal = 0;
    for(var i=0; i < data.points.length; i++){
        //data.points[i] has the same properties as trace data from earlier (still a bit confused on data.points to be honest)
        stateName = data.points[i].location;
        stateVal = data.points[i].z;
    }
    stateQuery(stateName, stateVal);
})

function stateQuery(stateName, stateVal){
    //if the same state is reselected all the states data will show again
    if (stateName == currentState){
        //sets the current state back to none
        currentState = 'none';
        //all the location data is shown
        Plotly.restyle(mapDiv, {'locations': [allStates]});
        //update all the data again repopulating the z-axis and all the other attributes
        updateData();
    } else {
        //set the currently state to the selected state
        currentState = stateName;
        /* 
            the only location that receives data is the selected state as done by changing the value of the locations attribute,
            while the actual data being changed is the state's values
        */
        Plotly.restyle(mapDiv, {'locations': [[stateName]], 'z': [[stateVal]]});
        //update all the other plots so that only the currently selected state's data is being shown
        updateStateData();
    }
}

var legendChanged = false;

subDiv.on('plotly_legendclick', function(){
    legendChanged = true;
    console.log(legendChanged);
});

subDiv.on('plotly_restyle', function() {
    if (legendChanged){

        legendChanged = false;
        if (subDiv.data[1].visible == "legendonly"){
            showWomen = false;
        } else if (subDiv.data[2].visible == "legendonly"){
            showMen = false;
        } else {
            showWomen = true;
            showMen = true;
        }
        
        updateData();
    }
});

};
};

var t0 = performance.now()

test(JSON.parse(personData), JSON.parse(allData));

var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
// console.log(personData[0])