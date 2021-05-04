PLOT1 = document.getElementById('plot1');
PLOT2 = document.getElementById('plot2');
PLOT3 = document.getElementById('plot3');
PLOT4 = document.getElementById('plot4');
PLOT5 = document.getElementById('plot5');
COUNT = document.getElementById('count')


////////////////////////////////////////////////////////////////////////

let minYear = 2000
let maxYear = 2019
let newState = undefined
let currentState = undefined
let gender = 'Both'
let legendChange = false

let plot = (data2, data3, data4, data5) => {
    
    d3.json('https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json').then((geoData) => {


        let unpack = (rows, key) => {
            return rows.map(function(row) { return row[key]; });
        }

        stateDict = {1: 'AL', 2: 'AK', 4: 'AZ', 5: 'AR', 6: 'CA', 8: 'CO', 9: 'CT', 10: 'DE', 11: 'DC', 12: 'FL', 13: 'GA', 
            15: 'HI', 16: 'ID', 17: 'IL', 18: 'IN', 19: 'IA', 20: 'KS', 21: 'KY', 22: 'LA', 23: 'ME', 24: 'MD', 25: 'MA', 
            26: 'MI', 27: 'MN', 28: 'MS', 29: 'MO', 30: 'MT', 31: 'NE', 32: 'NV', 33: 'NH', 34: 'NJ', 35: 'NM', 36: 'NY', 
            37: 'NC', 38: 'ND', 39: 'OH', 40: 'OK', 41: 'OR', 42: 'PA', 44: 'RI', 45: 'SC', 46: 'SD', 47: 'TN', 48: 'TX', 
            49: 'UT', 50: 'VT', 51: 'VA', 53: 'WA', 54: 'WV', 55: 'WI', 56: 'WY'}

        stateDict2 = { 'Alabama': 'AL', 'Alaska': 'AK', 'American Samoa': 'AS', 'Arizona': 'AZ', 'Arkansas': 'AR', 
            'California': 'CA', 'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE', 'District of Columbia': 'DC', 
            'Florida': 'FL', 'Georgia': 'GA', 'Guam': 'GU', 'Hawaii': 'HI', 'Idaho': 'ID', 'Illinois': 'IL', 'Indiana': 'IN', 
            'Iowa': 'IA', 'Kansas': 'KS', 'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME', 'Maryland': 'MD', 
            'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN', 'Mississippi': 'MS', 'Missouri': 'MO', 
            'Montana': 'MT', 'Nebraska': 'NE', 'Nevada': 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM', 
            'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', 'Northern Mariana Islands':'MP', 'Ohio': 'OH', 
            'Oklahoma': 'OK', 'Oregon': 'OR', 'Pennsylvania': 'PA', 'Puerto Rico': 'PR', 'Rhode Island': 'RI', 
            'South Carolina': 'SC', 'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT', 'Vermont': 'VT',
            'Virgin Islands': 'VI', 'Virginia': 'VA', 'Washington': 'WA', 'West Virginia': 'WV', 'Wisconsin': 'WI', 
            'Wyoming': 'WY' }



        stateDict3 = {'01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA', '08': 'CO', '09': 'CT', '10': 'DE', 
            '11': 'DC', '12': 'FL', '13': 'GA', '15': 'HI', '16': 'ID', '17': 'IL', '18': 'IN', '19': 'IA', '20': 'KS', 
            '21': 'KY', '22': 'LA', '23': 'ME', '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', '28': 'MS', '29': 'MO', 
            '30': 'MT', '31': 'NE', '32': 'NV', '33': 'NH', '34': 'NJ', '35': 'NM', '36': 'NY', '37': 'NC', '38': 'ND', 
            '39': 'OH', '40': 'OK', '41': 'OR', '42': 'PA', '44': 'RI', '45': 'SC', '46': 'SD', '47': 'TN', '48': 'TX', 
            '49': 'UT', '50': 'VT', '51': 'VA', '53': 'WA', '54': 'WV', '55': 'WI', '56': 'WY'}

        geoCenter = {1: {'lat': 32.7794, 'long': -86.8287}, 2: {'lat': 64.0685, 'long': -152.2782}, 
            4: {'lat': 34.2744, 'long': -111.6602}, 5: {'lat': 34.8938, 'long': -92.4426}, 6: {'lat': 37.1841, 'long': -119.4696}, 
            8: {'lat': 38.9972, 'long': -105.5478}, 9: {'lat': 41.6219, 'long': -72.7273}, 10: {'lat': 38.9896, 'long': -75.505}, 
            11: {'lat': -38.9101, 'long': 77.0147}, 12: {'lat': 28.6305, 'long': -82.4497}, 13: {'lat': 32.6415, 'long': -83.4426}, 
            15: {'lat': 20.2927, 'long': -156.3737}, 16: {'lat': 44.3509, 'long': -114.613}, 17: {'lat': 40.0417, 'long': -89.1965}, 
            18: {'lat': 39.8942, 'long': -86.2816}, 19: {'lat': 42.0751, 'long': -93.496}, 20: {'lat': 38.4937, 'long': -98.3804}, 
            21: {'lat': 37.5347, 'long': -85.3021}, 22: {'lat': 31.0689, 'long': -91.9968}, 23: {'lat': 45.3695, 'long': -69.2428}, 
            24: {'lat': 39.055, 'long': -76.7909}, 25: {'lat': 42.2596, 'long': -71.8083}, 26: {'lat': 44.3467, 'long': -85.4102}, 
            27: {'lat': 46.2807, 'long': -94.3053}, 28: {'lat': 32.7364, 'long': -89.6678}, 29: {'lat': 38.3566, 'long': -92.458}, 
            30: {'lat': 47.0527, 'long': -109.6333}, 31: {'lat': 41.5378, 'long': -99.7951}, 32: {'lat': 39.3289, 'long': -116.6312}, 
            33: {'lat': 43.6805, 'long': -71.5811}, 34: {'lat': 40.1907, 'long': -74.6728}, 35: {'lat': 34.4071, 'long': -106.1126}, 
            36: {'lat': 42.9538, 'long': -75.5268}, 37: {'lat': 35.5557, 'long': -79.3877}, 38: {'lat': 47.4501, 'long': -100.4659}, 
            39: {'lat': 40.2862, 'long': -82.7937}, 40: {'lat': 35.5889, 'long': -97.4943}, 41: {'lat': 43.9336, 'long': -120.5583}, 
            42: {'lat': 40.8781, 'long': -77.7996}, 44: {'lat': 41.6762, 'long': -71.5562}, 45: {'lat': 33.9169, 'long': -80.8964}, 
            46: {'lat': 44.4443, 'long': -100.2263}, 47: {'lat': 35.858, 'long': -86.3505}, 48: {'lat': 31.4757, 'long': -99.3312}, 
            49: {'lat': 39.3055, 'long': -111.6703}, 50: {'lat': 44.0687, 'long': -72.6658}, 51: {'lat': 37.5215, 'long': -78.8537}, 
            53: {'lat': 47.3826, 'long': -120.4472}, 54: {'lat': 38.6409, 'long': -80.6227}, 55: {'lat': 44.6243, 'long': -89.9941}, 
            56: {'lat': 42.9957, 'long': -107.5512}}


        let getKeyByValue = (object, value) => {
            return Object.keys(object).find(key => object[key] === value);
        }

        let zeroPad = (num, dig) => {
            num = String(num)
            while (num.length<dig) {num = '0' + num}
            return num
        }
        
        /////////////////////////////////////////////////////////////
        
        let onChange = () => {
            plot1Update(data3)
            if (newState != undefined) {
                plot2Update(data2)
            }
            plot3Update(data3)
            plot4Update(data4)
            plot5Update(data5)
        }
    
        /////////////////////////////////////////////////////////////

        let plot1Filter = (data) => {
            
            let dict = {}

            data.forEach(d => {

                if ((newState == undefined) || (d.STATE == getKeyByValue(stateDict, newState))) {

                    if ((d.YR_NO <= maxYear) && (d.YR_NO >= minYear)) {

                        if ((gender == 'Both') || (d.SEX == gender)) {

                            if (!(stateDict[d.STATE] in dict)) {
                                dict[stateDict[d.STATE]] = 0
                            }

                            dict[stateDict[d.STATE]] += d.FATALS
                        }
                    }
                }
            })        

            COUNT.innerText = Object.values(dict).reduce((a, b) => a + b, 0)

            return dict
        }
        
        let plot1Update = (data) => {

            let dict = plot1Filter(data)

            let update = {
                locations: [Object.keys(dict)],
                z: [Object.values(dict)],
                text: [Object.keys(dict)],
            }

            Plotly.restyle(PLOT1, update);
        }

        let plot1 = (data) => {

            let dict = plot1Filter(data)

            var dataArr = [{
                type: 'choropleth',
                locationmode: 'USA-states',
                locations: Object.keys(dict),
                z: Object.values(dict),
                text: Object.keys(dict),
                zmax:75000,
                zmin:0
            }];

            var layout = {
                geo:{
                    scope: 'usa',
                    countrycolor: 'rgb(255, 255, 255)',
                    showland: true,
                    landcolor: 'rgb(217, 217, 217)',
                    showlakes: true,
                    lakecolor: 'rgb(255, 255, 255)',
                    subunitcolor: 'rgb(255, 255, 255)',
                    lonaxis: {},
                    lataxis: {}
                },
                automargin:false,
                margin:{pad:0,l:35,r:35,t:0,b:0}, 
                height:450,
                // width: 1000
            };

            Plotly.newPlot(PLOT1, dataArr, layout, {showLink: false});

        }

        plot1(data3)

        PLOT1.on('plotly_click', function(data){

            newState = data.points[0]['location']
            if (newState == currentState) {
                newState = undefined
            }
            currentState = newState
            if (newState != undefined) {
                plot2(data2)
            }
            onChange()

        });

        var mySlider = new rSlider({
            target: '#slider',
            values: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
            range: true,
            tooltip: false,
            scale: true,
            labels: true,
            width: '775px',
            set: [2000, 2019],
            onChange: function (range) {
                
                minYear = parseInt(range.split(',')[0])
                maxYear = parseInt(range.split(',')[1])

                onChange();
                
            }
        });

        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////

        let plot2Filter = (data) => {

            state = getKeyByValue(stateDict, newState) 

            dict = {}
            county = {}

            geoData['features'].forEach((d) => {
                if (d['properties']['STATE'] == zeroPad(state,2)) {
                    dict[d['id']] = 0
                    county[parseInt(d.properties.COUNTY)] = {'Name':d.properties.NAME, 'Code':d['id']}
                }

            })            

            data.forEach(d => {
                if (d.YR_NO <= maxYear && d.YR_NO >= minYear) {
                    if ((gender == 'Both') || (d.SEX == gender)) {
                        if (d.STATE == state) {
                            if (county[d.COUNTY] != undefined) {
                                dict[county[d.COUNTY]['Code']] += d.FATALS
                            }
                        }
                    }

                }
            })

            lat = geoCenter[state]['lat']
            long = geoCenter[state]['long']

            return [dict, lat, long]

        }

        let plot2Update = (data) => {

            [dict, lat, long] = plot2Filter(data)

            let dataArr = {
                locations: [Object.keys(dict)], 
                z: [Object.values(dict)]
            }

            let layout = {
                'mapbox.center.lat': lat,
                'mapbox.center.lon': long,
            }

            Plotly.update(PLOT2, dataArr, layout)

        }

        let plot2 = (data) => {
                
            [dict, lat, long] = plot2Filter(data)
            
            var dataArr = [{
                type: "choroplethmapbox", 
                locations: Object.keys(dict), 
                z: Object.values(dict),
                geojson: geoData,
                colorscale:  `[[0, '#FFFFFF'], [1, '#FFFFFF']]`,
                showscale: false,
                hoverinfo: 'z',
                zmax:10000,
                zmin:0
            }];
            
            var layout = {

                mapbox: {
                    zoom: 3.5,
                    center: {
                        lat: lat,
                        lon: long,
                    },
                    style: 'white-bg'
                },
                automargin:false,
                margin:{pad:5,l:15,r:15,t:10,b:10}, 
                height: 275
            };
            
            var config = {mapboxAccessToken: "pk.eyJ1IjoiYXJ1bnNwIiwiYSI6ImNrbnhtYjdkMjBuZmoybm1wdG11dm1tdDcifQ.m8lpKD96od7myxOeNNGf5w"};
            
            Plotly.newPlot(PLOT2, dataArr, layout, config);

        }


        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////

        let plot3Filter = (data) => {
            
            male = {}
            female = {} 

            data.forEach(d => {

                if ((newState == undefined) || (d.STATE == getKeyByValue(stateDict, newState))) {

                    if (d.YR_NO <= maxYear && d.YR_NO >= minYear) {

                        if ((d.AGE<110)) {           

                            if (d.SEX == 'Male') {
                                
                                if (!((Math.ceil(d.AGE/5)*5) in male)) {
                                    male[(Math.ceil(d.AGE/5)*5)] = 0
                                }
                                male[(Math.ceil(d.AGE/5)*5)] += d.FATALS
                            }
            
                            if (d.SEX == 'Female') {
                                
                                if (!((Math.ceil(d.AGE/5)*5) in female)) {
                                    female[(Math.ceil(d.AGE/5)*5)] = 0
                                }
                                female[(Math.ceil(d.AGE/5)*5)] += d.FATALS
                            }
                        }
                    }
                }
            })

            return [male, female]
        }

        let plot3Update = (data) => {

            let [male, female] = plot3Filter(data)

            let update1 = {
                x: [Object.keys(male)],
                y: [Object.values(male)]
            }

            let update2 = {
                x: [Object.keys(female)],
                y: [Object.values(female)]
            }

            Plotly.restyle(PLOT3, update1, 0);
            Plotly.restyle(PLOT3, update2, 1);
        }

        let plot3 = (data) => {

            [male, female] = plot3Filter(data)

            var dataArr1 = {
                x: Object.keys(male),
                y: Object.values(male),
                name: 'Male',
                type: 'bar'
            };
            
            var dataArr2 = {
            x: Object.keys(female),
            y: Object.values(female),
            name: 'Female',
            type: 'bar'
            };

            var layout = {
                barmode: 'stack',
                height: 400,
                automargin:false,
                margin:{pad:15,l:100,r:60,t:30,b:80},
                xaxis: {
                    title: {text: 'Age'},
                    standoff: 30
                },
                yaxis: {
                    title: {text: 'Fatalities'},
                    standoff: 80
                },
            
            
            };
            
            Plotly.newPlot(PLOT3, [dataArr1, dataArr2], layout);

        }

        plot3(data3)

        PLOT3.on('plotly_legendclick', function(){
            legendChange = true            
        });

        PLOT3.on('plotly_restyle', function() {

            if (legendChange) {

                legendChange = false 

                if ((PLOT3.data[0].visible == 'legendonly') && (PLOT3.data[1].visible == 'legendonly')) {
                    gender = 'None'
                } else if (PLOT3.data[0].visible == 'legendonly') {
                    gender = PLOT3.data[1].name
                } else if (PLOT3.data[1].visible == 'legendonly') {
                    gender = PLOT3.data[0].name
                } else {
                    gender = 'Both'
                }
    
                onChange()
            }
        })

        /////////////////////////////////////////////////////////////


        let plot4Filter = (data) => {
            
            dict = {'Monday': 0, 'Tuesday': 0, 'Wednesday': 0, 'Thursday': 0, 'Friday': 0, 'Saturday': 0, 'Sunday': 0 }

            data.forEach(d => {

                if ((newState == undefined) || (d.STATE == getKeyByValue(stateDict, newState))) {

                    if (d.YR_NO <= maxYear && d.YR_NO >= minYear) {
                        
                        if ((gender == 'Both') || (d.SEX == gender)) {
                                                        
                            dict[d.DAY_WEEK] += d.FATALS
                        }
                    }
                }
            })

            return dict
        }

        let plot4Update = (data) => {

            let dict = plot4Filter(data)

            let update = {
                x: [Object.keys(dict)],
                y: [Object.values(dict)]
            }

            Plotly.restyle(PLOT4, update);
        }

        let plot4 = (data) => {

            let dict = plot4Filter(data)

            var dataArr = [{
                    x: Object.keys(dict),
                    y: Object.values(dict),
                    type: 'bar',
                    height:350
                }];
            let layout = {
                xaxis: {
                    title: {text: 'Day of the Week'},
                    standoff: 20
                },
                yaxis: {
                    title: {text: 'Fatalities'},
                    standoff: 50
                },
                
            };
            Plotly.newPlot(PLOT4, dataArr, layout);
        }

        plot4(data4)

        /////////////////////////////////////////////////////////////


        let plot5Filter = (data) => {
            
            dict = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0,
                 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 
                 21: 0, 22: 0, 23: 0}

            data.forEach(d => {

                if ((newState == undefined) || (d.STATE == getKeyByValue(stateDict, newState))) {

                    if (d.YR_NO <= maxYear && d.YR_NO >= minYear) {
                        
                        if ((gender == 'Both') || (d.SEX == gender)) {
                            if (d.HOUR<24) {
                                dict[d.HOUR] += d.FATALS
                            }
                        }
                    }
                }
            })

            return dict
        }

        let plot5Update = (data) => {

            let dict = plot5Filter(data)

            let update = {
                x: [Object.keys(dict)],
                y: [Object.values(dict)]
            }

            Plotly.restyle(PLOT5, update);
        }

        let plot5 = (data) => {

            let dict = plot5Filter(data)

            var dataArr = [{
                x: Object.keys(dict),
                y: Object.values(dict),
                type: 'scatter',
                height:350
            }];
            
            let layout = {
                xaxis: {
                    title: {text: 'Time of the Day'},
                    standoff: 20
                },
                yaxis: {
                    title: {text: 'Fatalities'},
                    standoff: 50,
                    rangemode: 'tozero'
                },
                margin: {pad:10}
            };

            Plotly.newPlot(PLOT5, dataArr, layout);
        }

        plot5(data5)
    })
}




/////////////////////////////////////////////////////////////


// plot1Data = JSON.parse(plot2Data)
plot2Data = JSON.parse(plot2Data);
plot3Data = JSON.parse(plot3Data);
plot4Data = JSON.parse(plot4Data);
plot5Data = JSON.parse(plot5Data);
// cumData = JSON.parse(cumData)
console.log("inside home ")

// console.log(plot2Data)

// plot(plot1Data, plot2Data, plot3Data)
plot(plot2Data, plot3Data, plot4Data, plot5Data)
