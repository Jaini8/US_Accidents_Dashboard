PLOT1 = document.getElementById('plot1');
PLOT2 = document.getElementById('plot2');
PLOT3 = document.getElementById('plot3');
PLOT4 = document.getElementById('plot4');
PLOT5 = document.getElementById('plot5');
PLOT6 = document.getElementById('plot6');
PLOT7 = document.getElementById('plot7');
PLOT8 = document.getElementById('plot8');
PLOT9 = document.getElementById('plot9');
PLOT10 = document.getElementById('plot10');

/////////////////////////////////////////////////////////////

let startDate = new Date("1999-01-01")
let endDate = new Date("2021-12-31")

let month =  [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"]

let dayDict = {'Monday':6, 'Tuesday':5, 'Wednesday':4, 'Thursday':3, 'Friday':2, 'Saturday':1, 'Sunday':0}

/////////////////////////////////////////////////////////////

let plot = (data1) => {
    
    let unpack = (rows, key) => {
        return rows.map(function(row) { return row[key]; });
    }

    let zeroPad = (num, dig) => {
        num = String(num)
        while (num.length<dig) {num = '0' + num}
        return num
    }

    let unpackYM = (rows, key) => {
            
        return rows.map(function(row) { 
            dt = new Date(row[key])
            return (new Date(dt.getFullYear(),dt.getMonth())) 
        });
    }
    
    let unpackMD = (rows, key) => {
            
        return rows.map(function(row) { 
            dt = new Date(row[key])
            //return (new Date(1004,dt.getMonth(),dt.getDate)) 
            return ((1004).toString()+'-'+(dt.getMonth()+1).toString()+'-'+(dt.getDate()).toString())
        });
    }

    let maxArray = (arr) => {

        let max = arr.reduce(function(a, b) {
            return Math.max(a, b);
        });

        return max
    }

    /////////////////////////////////////////////////////////////

    let onChange = () => {
        plot2Update(data1) 
        plot3Update(data1)
        plot4Update(data1)
    }
 

    /////////////////////////////////////////////////////////////

    let plot1 = (data) => {
    
        data.sort((a,b) => (new Date(b.date_acc) - new Date(a.date_acc)));

        var x = unpackYM(data, 'date_acc');
        var y = unpack(data, 'fatals');
    
        var dataArr = [{ 
            x: x,
            y: y,
            type: 'scatter',
            line: {shape: 'linear', 'smoothing': 2}, 
            fill: 'tozeroy',
            fillcolor: '#B5A4DD',
            transforms: [{
                type: 'aggregate',
                groups: x,
                aggregations: [
                    {target: 'y', func: 'sum', enabled: true},
                ]
            }]
        }];
    
        var layout = {
            colorway: ['#3A0CA3'],
            xaxis: {
                title: 'Time Period',
                rangeslider: {},
                //automargin: true,
                showgrid: false
            },
            yaxis: {
                title: 'Fatalities',
                //range: [0, 180],
                //automargin: true,
                //zeroline: false,
            },
            margin: {
                pad:10,t:10,b:50,r:80,l:100
            },
        };
    
        Plotly.newPlot(PLOT1, dataArr, layout);
    }
    
    plot1(data1)    

    PLOT1.on('plotly_relayout', function(eventdata){

        startDate = new Date(eventdata["xaxis.range"][0].split(' ')[0])
        endDate = new Date(eventdata["xaxis.range"][1].split(' ')[0])
        
        onChange()

    })

    /////////////////////////////////////////////////////////////

    let plot2Radius = (fatals1, fatals2) => {

        r1 = [0]; r2 = [0]; 

        for (let i=0; i<12; i++) {

            r1.push(fatals1[i])
            r1.push(fatals1[i])
            r1.push(0)

            r2.push(fatals2[i])
            r2.push(fatals2[i])
            r2.push(0)

        }

        return [r1, r2];
    }


    let plot2PivotFilter = (data) => {
        
        dict1 = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0};
        dict2 = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0};

        data.forEach(d => {
            if ((new Date(d.date_acc)>startDate) && (new Date(d.date_acc)<endDate)){
                if (d.hour>11) {
                    dict2[d.hour-12]+=d.fatals;
                } else {
                    dict1[d.hour]+=d.fatals;
                }
            }
        })

        fatals1 = Object.values(dict1);
        fatals2 = Object.values(dict2);
        
        return [fatals1, fatals2];
    }


    let plot2Update = (data) => {

        let [fatals1, fatals2] = plot2PivotFilter(data)

        let r = plot2Radius(fatals1, fatals2)

        Plotly.restyle(PLOT2, {r: [r[0]]}, [0]);
        Plotly.restyle(PLOT2, {r: [r[1]]}, [1]);

        let update = {
            'polar.radialaxis.range':[0, maxArray(r[1])*1.1],
            'polar2.radialaxis.range':[0, maxArray(r[1])*1.1]
        }

        Plotly.relayout(PLOT2, update, [0,1])

    }

    let plot2 = (data) => {
    
        let [fatals1, fatals2] = plot2PivotFilter(data)
        
        theta = [0];
        let partition = 30;

        for (let i=0; i<12; i++) {
            theta.push(i*partition + 2)
            theta.push((i+1)*partition - 2)
            theta.push(0)
        }

        let r = plot2Radius(fatals1, fatals2)
        let fillColor = ['#23cc23', '#ff7621']
        let subplot = ['polar', 'polar2']

        let dataArr = []

        for (i=0; i<2; i++) {

            dataArr.push({
                
                type: "scatterpolar",
                mode: "lines",
                r: r[i],
                theta: theta,
                fill: "toself",
                //marker: {colorscale:[[0, 'rgb(0,0,255)'], [1, 'rgb(255,0,0)']]},
                fillcolor: fillColor[i],
                line: {
                    color: 'black',
                    width: 0.25
                },
                subplot: subplot[i]
            })
        }

        let domainX = [[0,0.435], [0.565,1]]

        let layout = {
            showlegend: false,
            automargin: false,
            margin: {pad:0,l:35,r:35,t:0,b:0}, 
            height: 300
        }

        for (i=0; i<2; i++) {

            layout[subplot[i]] = {
                
                angularaxis: {
                    direction: 'clockwise',
                    visible: true,
                    showticklabels: true,
                    rotation:90,
                    showgrid:false,
                    tickvals: [30,60,90,120,150,180,210,240,270,300,330,0],
                    ticktext: ['1','2','3','4','5','6','7','8','9','10','11','12'],
                    tickfont: {size:8.2,},
                },
                radialaxis: {
                    range: [0, maxArray(r[1])*1.1],
                    // nticks: 6,
                    tickfont: {size:9,},
                },
                domain: {
                    x: domainX[i]
                },
            }
        }

        Plotly.newPlot(PLOT2, dataArr, layout);   
    }
    
    plot2(data1)

    /////////////////////////////////////////////////////////////

    let plot3Filter = (data) => {

        dict = {}

        data.forEach(d => {

            dDate = new Date(d.date_acc)

            dt = month[dDate.getMonth()] + ' ' + zeroPad(dDate.getDate(), 2)

            if (dict[dt]==undefined) {
                dict[dt] = 0
            }

            if ((dDate > startDate) && (dDate < endDate)) {
                dict[dt] += d.fatals
            }
        })                

        return dict
    }


    let plot3Update = (data) => {

        let dict = plot3Filter(data)

        let dataArr = {
            x: [Object.keys(dict)], 
            y: [Object.values(dict)]
        }

        Plotly.restyle(PLOT3, dataArr)
    }


    let plot3 = (data) => {
    
        let dict = plot3Filter(data)

        console.log(dict)
        var dataArr = [{
            x: Object.keys(dict),
            y: Object.values(dict),
            fill: 'tozeroy',
            fillcolor: '#B5A4DD',
            type: 'scatter',
            line: {
                shape: 'linear', 
                smoothing: 2,
                color: '#3A0CA3'
            },
        }];

        var layout = {

            height: 300,
        
            xaxis: {
                rangeslider: {yanchor: 'top'},
                tickformat: '%b %d',
                // tickformat: '%b %d',
                title:'Months',
                nticks:12,
                tickfont: {
                    size:8,
                },
                tickangle: 0,
                autorange: "reversed",
                tickvals: ['January 01', 'February 01', 'March 01', 'April 01', 'May 01', 'June 01', 'July 01', 'August 01', 'September 01', 'October 01', 'November 01', 'December 01'],
                ticktext: ['Jan 1', 'Feb 1', 'Mar 1', 'Apr 1', 'May 1', 'Jun 1', 'Jul 1', 'Aug 1', 'Sep 1', 'Oct 1', 'Nov 1', 'Dec 1']
            },  
            yaxis: {
                title:'Fatality Count',
                // range: [0,maxArray(vals)*1.2],
            },
            // automargin: false,
            margin: {pad:10,t:30,b:50,r:50,l:100},  
        };
    
        Plotly.newPlot(PLOT3, dataArr, layout);
    }
    
    plot3(data1)

    /////////////////////////////////////////////////////////////

    let plot4Filter = (data) => {

        let z = Array(7).fill().map(() => Array(24).fill(0))        

        data.forEach(d => {

            dDate = new Date(d.date_acc)

            if ((dDate > startDate) && (dDate < endDate)) {

                day = dayDict[d.day_week]
                z[day][d.hour] += d.fatals
            }
        })

        return z
    }

    let plot4Update = (data) => {

        let z = plot4Filter(data)
        let dataArr = {
            z:[z], 
        }

        Plotly.restyle(PLOT4, dataArr)
    }

    let plot4 = (data) => {

        let z = plot4Filter(data)

        var dataArr = [{
            z: z,
            type: 'heatmap',
            y: ['Sun', 'Sat', 'Fri', 'Thurs', 'Wed', 'Tues', 'Mon'],
        }];
        
        let layout = {      
            xaxis: {
                tickmode: 'array',
                tickvals: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
                ticktext: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
                title: 'Hour of the Day',
                standoff: 50
            },
            yaxis: {
                title: 'Day of the Week',
                standoff: 50,
                // ticktext: ['Sun', 'Sat', 'Fri', 'Thurs', 'Wed', 'Tues', 'Mon'],
            },
            margin:{l:100, t:20},
            height: 320
        }
        
        Plotly.newPlot(PLOT4, dataArr, layout);
    }

    plot4(data1)
}

/////////////////////////////////////////////////////////////

plot1Data = JSON.parse(plot1Data)

plot(plot1Data)

// AmPlot5

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create('amplot5', am4charts.XYChart3D);
    
    // Add data
    chart.data = [{
      "country": "Alcholol Involved",
      "visits": 9
    }, {
      "country": "Not Involved",
      "visits": 2
    }];
    
    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.labels.template.rotation = 0;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.label.rotation = 0;
    categoryAxis.tooltip.label.horizontalCenter = "right";
    categoryAxis.tooltip.label.verticalCenter = "middle";
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Chance of a Fatal Accident";
    // valueAxis.title.fontWeight = "bold";
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;
    
    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#FFFFFF");
    
    columnTemplate.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })
    
    columnTemplate.adapter.add("stroke", function(stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })
    
}); // end am4core.ready()
    

/////////////////////////////////////////////////////////////

// AmPlot6

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("amplot6", am4charts.RadarChart);

    // Add data
    chart.data = [{
        "category": "Snow",
        "value": 0.88,
        "full": 5   
    },{
        "category": "Rain",
        "value": 1.44,
        "full": 5
    }, {
        "category": "Clear",
        "value": 1.89,
        "full": 5
    }, {
        "category": "Cloudy",
        "value": 2.0,
        "full": 5
    }, {
        "category": "Fog, Smoke, Smog",
        "value": 3.57,
        "full": 5
    }, {
        "category": "Severe Crosswinds",
        "value": 4.47,
        "full": 5
    }];

    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);

    // Set number format
    chart.numberFormatter.numberFormat = "#.#'%'";

    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
    return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 5;
    valueAxis.strictMinMax = true;

    // Create series
    var series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;

    var series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;

    series2.columns.template.adapter.add("fill", function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
    });

    // Add cursor
    chart.cursor = new am4charts.RadarCursor();

}); // end am4core.ready()


/////////////////////////////////////////////////////////////

// AmPlot7

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("amplot7", am4charts.RadarChart);
    // chart.scrollbarX = new am4core.Scrollbar();
    
    var data = [];
    
    let labels = ['Frontside', 'Front-Right', 'Right', 'Back-Right', 'Backside', 'Back-Left', 'Leftside', 'Front-Left']
    let vals = [1.05, 1.1, 1.40, 0.33, 0.2, 0.3, 1.2, 0.73]

    for(var i = 0; i < 8; i++){
        data.push({category: labels[i], value:vals[i]});
    }
    
    chart.data = data;
    chart.radius = am4core.percent(100);
    chart.innerRadius = am4core.percent(50);
    chart.startAngle = -112.5;
    chart.endAngle = 247.5;

    var label = chart.seriesContainer.createChild(am4core.Label);
    label.text = "Impact\nDirection";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 25;
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;
    categoryAxis.renderer.grid.template.disabled = true;
    // categoryAxis.renderer.labels.template.fontSize = 12;
    categoryAxis.renderer.labels.template.disabled = true;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.tooltip.disabled = true;
    
    // Create series
    var series = chart.series.push(new am4charts.RadarColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "category";
    series.columns.template.strokeWidth = 0;
    series.tooltipText = "{valueY}";
    series.columns.template.radarColumn.cornerRadius = 10;
    series.columns.template.radarColumn.innerCornerRadius = 0;
    
    series.tooltip.pointerOrientation = "vertical";
    
    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.radarColumn.states.create("hover");
    hoverState.properties.cornerRadius = 0;
    hoverState.properties.fillOpacity = 1;
    
    
    series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
    })
    
    // Cursor
    chart.cursor = new am4charts.RadarCursor();
    chart.cursor.innerRadius = am4core.percent(50);
    chart.cursor.lineY.disabled = true;
    
}); // end am4core.ready()

/////////////////////////////////////////////////////////////

// AmPlot8

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("amplot8", am4charts.XYChart3D);
    
    // Add data
    chart.data = [{
        "year": 'Dark -Not\nLighted',
        "income": 5.03,
        "color": chart.colors.next()
    }, {
      "year": 'Dark-\nLighted',
      "income": 2.42,
      "color": chart.colors.next()
    }, {
      "year": 'Daylight',
      "income": 0.83,
      "color": chart.colors.next()
    }, {
      "year": 'Dawn',
      "income": 2.22,
      "color": chart.colors.next()
    }, {
      "year": 'Dusk',
      "income": 1.4,
      "color": chart.colors.next()
    }];
    
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.labels.template.fontSize = 15;
    
    var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueX = "income";
    series.dataFields.categoryY = "year";
    series.name = "Income";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.tooltipText = "{valueX}";
    series.columns.template.column3D.stroke = am4core.color("#fff");
    series.columns.template.column3D.strokeOpacity = 0.2;
    
}); // end am4core.ready()