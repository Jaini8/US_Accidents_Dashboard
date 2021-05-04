am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var container = am4core.create("ageofcar", am4core.Container);
container.width = am4core.percent(100);
container.height = am4core.percent(100);
container.layout = "horizontal";


var chart = container.createChild(am4charts.PieChart);

// Add data
chart.data= [{
    'Make': 'Ford', 
    'Count': 169465,
    "subData": [{ name: "(0-5) yrs", value: 55160 }, { name: "(6-10) yrs", value: 50172}, { name: "(11-15) yrs", value: 38325 }, { name: "(16-20) yrs", value: 17136 }, { name: "(21-25) yrs", value: 5451 }, { name: "(26-30) yrs", value: 1702 }, { name: "(31-40) yrs", value: 1059 }, { name: "(41-60) yrs", value: 304 }, { name: "(61-100) yrs", value: 156 }]
}, {
    'Make': 'Chevrolet', 
    'Count': 155662,
    "subData": [{ name: "(0-5) yrs", value: 48106 }, { name: "(6-10) yrs", value: 44530}, { name: "(11-15) yrs", value: 36148 }, { name: "(16-20) yrs", value: 16567 }, { name: "(21-25) yrs", value: 6019 }, { name: "(26-30) yrs", value: 2280 }, { name: "(31-40) yrs", value: 1504 }, { name: "(41-60) yrs", value: 463 }, { name: "(61-100) yrs", value: 45 }]
}, {
    'Make': 'Toyota', 
    'Count': 68356,
    "subData": [{ name: "(0-5) yrs", value: 23160 }, { name: "(6-10) yrs", value: 18640}, { name: "(11-15) yrs", value: 15216 }, { name: "(16-20) yrs", value: 8137 }, { name: "(21-25) yrs", value: 2433 }, { name: "(26-30) yrs", value: 612 }, { name: "(31-40) yrs", value: 151 }, { name: "(41-60) yrs", value: 7 }]
}, {
    'Make': 'Honda', 
    'Count': 67134,
    "subData": [{ name: "(0-5) yrs", value: 21649 }, { name: "(6-10) yrs", value: 17229}, { name: "(11-15) yrs", value: 15601 }, { name: "(16-20) yrs", value: 8365 }, { name: "(21-25) yrs", value: 2822 }, { name: "(26-30) yrs", value: 984 }, { name: "(31-40) yrs", value: 444 }, { name: "(41-60) yrs", value: 40 }]
}, {
    'Make': 'Dodge', 
    'Count': 64660,
    "subData": [{ name: "(0-5) yrs", value: 24923 }, { name: "(6-10) yrs", value: 19401}, { name: "(11-15) yrs", value: 13267 }, { name: "(16-20) yrs", value: 5140 }, { name: "(21-25) yrs", value: 1374 }, { name: "(26-30) yrs", value: 372 }, { name: "(31-40) yrs", value: 153 }, { name: "(41-60) yrs", value: 30 }]
}, {
    'Make': 'Datsun-Nissan', 
    'Count': 40354,
    "subData": [{ name: "(0-5) yrs", value: 15110 }, { name: "(6-10) yrs", value: 11716}, { name: "(11-15) yrs", value: 8631 }, { name: "(16-20) yrs", value: 3557 }, { name: "(21-25) yrs", value: 1010 }, { name: "(26-30) yrs", value: 255 }, { name: "(31-40) yrs", value: 67 }, { name: "(41-60) yrs", value: 8 }]
}, {
    'Make': 'Harley-Davidson', 
    'Count': 31353,
    "subData": [{ name: "(0-5) yrs", value: 14396 }, { name: "(6-10) yrs", value: 7635}, { name: "(11-15) yrs", value: 4699 }, { name: "(16-20) yrs", value: 2233 }, { name: "(21-25) yrs", value: 1138 }, { name: "(26-30) yrs", value: 597 }, { name: "(31-40) yrs", value: 472 }, { name: "(41-60) yrs", value: 160 }, { name: "(61-100) yrs", value: 23 }]
}, {
    'Make': 'GMC', 
    'Count': 30831,
    "subData": [{ name: "(0-5) yrs", value: 9691 }, { name: "(6-10) yrs", value: 8467}, { name: "(11-15) yrs", value: 7121 }, { name: "(16-20) yrs", value: 3574 }, { name: "(21-25) yrs", value: 1271 }, { name: "(26-30) yrs", value: 457 }, { name: "(31-40) yrs", value: 216 }, { name: "(41-60) yrs", value: 33 }, { name: "(61-100) yrs", value: 1 }]
}, {
    'Make': 'Pontiac', 
    'Count': 25802,
    "subData": [{ name: "(0-5) yrs", value: 6957 }, { name: "(6-10) yrs", value: 8956}, { name: "(11-15) yrs", value: 7073 }, { name: "(16-20) yrs", value: 2175 }, { name: "(21-25) yrs", value: 442 }, { name: "(26-30) yrs", value: 108 }, { name: "(31-40) yrs", value: 69 }, { name: "(41-60) yrs", value: 20 }, { name: "(61-100) yrs", value: 2 }]
}, {
    'Make': 'Jeep', 
    'Count': 24144,
    "subData": [{ name: "(0-5) yrs", value: 7721 }, { name: "(6-10) yrs", value: 6913}, { name: "(11-15) yrs", value: 5579 }, { name: "(16-20) yrs", value: 2649 }, { name: "(21-25) yrs", value: 841 }, { name: "(26-30) yrs", value: 246 }, { name: "(31-40) yrs", value: 149 }, { name: "(41-60) yrs", value: 39 }, { name: "(61-100) yrs", value: 7 }]
}, {
    'Make': 'Freightliner', 
    'Count': 22027,
    "subData": [{ name: "(0-5) yrs", value: 11585 }, { name: "(6-10) yrs", value: 6000}, { name: "(11-15) yrs", value: 2956 }, { name: "(16-20) yrs", value: 1113 }, { name: "(21-25) yrs", value: 296 }, { name: "(26-30) yrs", value: 59 }, { name: "(31-40) yrs", value: 17 }, { name: "(41-60) yrs", value: 1 }]
}, {
    'Make': 'Buick-Opel', 
    'Count': 21449,
    "subData": [{ name: "(0-5) yrs", value: 4556 }, { name: "(6-10) yrs", value: 6046}, { name: "(11-15) yrs", value: 6562 }, { name: "(16-20) yrs", value: 3197 }, { name: "(21-25) yrs", value: 823 }, { name: "(26-30) yrs", value: 186 }, { name: "(31-40) yrs", value: 62 }, { name: "(41-60) yrs", value: 17}]
}, {
    'Make': 'Chrysler', 
    'Count': 16713,
    "subData": [{ name: "(0-5) yrs", value: 6247 }, { name: "(6-10) yrs", value: 5534}, { name: "(11-15) yrs", value: 3677 }, { name: "(16-20) yrs", value: 1001 }, { name: "(21-25) yrs", value: 196 }, { name: "(26-30) yrs", value: 41 }, { name: "(31-40) yrs", value: 12 }, { name: "(41-60) yrs", value: 5 }]
}, {
    'Make': 'Suzuki', 
    'Count': 16352,
    "subData": [{ name: "(0-5) yrs", value: 7810 }, { name: "(6-10) yrs", value: 4256}, { name: "(11-15) yrs", value: 2756 }, { name: "(16-20) yrs", value: 906 }, { name: "(21-25) yrs", value: 355 }, { name: "(26-30) yrs", value: 158}, { name: "(31-40) yrs", value: 110 }, { name: "(41-60) yrs", value: 1 }]
},{
    'Make': 'Mercury', 
    'Count': 15671,
    "subData": [{ name: "(0-5) yrs", value: 3355 }, { name: "(6-10) yrs", value: 5131}, { name: "(11-15) yrs", value: 4749 }, { name: "(16-20) yrs", value: 1914 }, { name: "(21-25) yrs", value: 395 }, { name: "(26-30) yrs", value: 79 }, { name: "(31-40) yrs", value: 37 }, { name: "(41-60) yrs", value: 10 }, { name: "(61-100) yrs", value: 1 }]
}, {
    'Make': 'Oldsmobile', 
    'Count': 14338,
    "subData": [{ name: "(0-5) yrs", value: 1994 }, { name: "(6-10) yrs", value: 3865}, { name: "(11-15) yrs", value: 4685 }, { name: "(16-20) yrs", value: 2636 }, { name: "(21-25) yrs", value: 840 }, { name: "(26-30) yrs", value: 203 }, { name: "(31-40) yrs", value: 94 }, { name: "(41-60) yrs", value: 21 }]
}, {
    'Make': 'International-Harvester', 
    'Count': 14273,
    "subData": [{ name: "(0-5) yrs", value: 6300 }, { name: "(6-10) yrs", value: 4042}, { name: "(11-15) yrs", value: 2139 }, { name: "(16-20) yrs", value: 1039 }, { name: "(21-25) yrs", value: 422 }, { name: "(26-30) yrs", value: 160 }, { name: "(31-40) yrs", value: 129 }, { name: "(41-60) yrs", value: 40 }, { name: "(61-100) yrs", value: 2 }]
}, {
    'Make': 'Hyundai', 
    'Count': 13580,
    "subData": [{ name: "(0-5) yrs", value: 7355 }, { name: "(6-10) yrs", value: 4038}, { name: "(11-15) yrs", value: 1884 }, { name: "(16-20) yrs", value: 294 }, { name: "(21-25) yrs", value: 7 }, { name: "(26-30) yrs", value: 2 }]
}, {
    'Make': 'Yamaha', 
    'Count': 13053,
    "subData": [{ name: "(0-5) yrs", value: 6240 }, { name: "(6-10) yrs", value: 3107}, { name: "(11-15) yrs", value: 2053 }, { name: "(16-20) yrs", value: 823 }, { name: "(21-25) yrs", value: 420 }, { name: "(26-30) yrs", value: 242 }, { name: "(31-40) yrs", value: 164 }, { name: "(41-60) yrs", value: 4 }]
}, {
    'Make': 'Mazda', 
    'Count': 12867,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 3781 }, { name: "(6-10) yrs", value: 4055}, { name: "(11-15) yrs", value: 3317 }, { name: "(16-20) yrs", value: 1262 }, { name: "(21-25) yrs", value: 341 }, { name: "(26-30) yrs", value: 96 }, { name: "(31-40) yrs", value: 15 }]
}, {
    'Make': 'Peterbilt', 
    'Count': 10630,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 4632 }, { name: "(6-10) yrs", value: 2769}, { name: "(11-15) yrs", value: 1719 }, { name: "(16-20) yrs", value: 905 }, { name: "(21-25) yrs", value: 392 }, { name: "(26-30) yrs", value: 150 }, { name: "(31-40) yrs", value: 53 }, { name: "(41-60) yrs", value: 10 }]
}, {
    'Make': 'Mitsubishi', 
    'Count': 10359,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 3940 }, { name: "(6-10) yrs", value: 3469}, { name: "(11-15) yrs", value: 2178 }, { name: "(16-20) yrs", value: 650 }, { name: "(21-25) yrs", value: 109 }, { name: "(26-30) yrs", value: 12 }, { name: "(31-40) yrs", value: 1 }]
}, {
    'Make': 'Cadillac', 
    'Count': 10092,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 2639 }, { name: "(6-10) yrs", value: 2924}, { name: "(11-15) yrs", value: 2786 }, { name: "(16-20) yrs", value: 1227 }, { name: "(21-25) yrs", value: 363 }, { name: "(26-30) yrs", value: 102 }, { name: "(31-40) yrs", value: 44 }, { name: "(41-60) yrs", value: 6 }, { name: "(61-100) yrs", value: 1 }]
}, {
    'Make': 'KIA', 
    'Count': 9976,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 5962 }, { name: "(6-10) yrs", value: 2802}, { name: "(11-15) yrs", value: 1087 }, { name: "(16-20) yrs", value: 120 }, { name: "(21-25) yrs", value: 5 }]
}, {
    'Make': 'Kawasaki', 
    'Count': 9942,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 4579 }, { name: "(6-10) yrs", value: 2585}, { name: "(11-15) yrs", value: 1514 }, { name: "(16-20) yrs", value: 673 }, { name: "(21-25) yrs", value: 329 }, { name: "(26-30) yrs", value: 164 }, { name: "(31-40) yrs", value: 94 }, { name: "(41-60) yrs", value: 4 }]
}, {
    'Make': 'Kenworth', 
    'Count': 9808,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 4557 }, { name: "(6-10) yrs", value: 2507}, { name: "(11-15) yrs", value: 1505 }, { name: "(16-20) yrs", value: 738 }, { name: "(21-25) yrs", value: 308 }, { name: "(26-30) yrs", value: 123 }, { name: "(31-40) yrs", value: 58 }, { name: "(41-60) yrs", value: 12 }]
}, {
    'Make': 'Saturn', 
    'Count': 9575,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 2588 }, { name: "(6-10) yrs", value: 3495}, { name: "(11-15) yrs", value: 2598 }, { name: "(16-20) yrs", value: 795 }, { name: "(21-25) yrs", value: 99 }]
}, {
    'Make': 'Volvo', 
    'Count': 9093,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 4518 }, { name: "(6-10) yrs", value: 2365}, { name: "(11-15) yrs", value: 1435 }, { name: "(16-20) yrs", value: 589 }, { name: "(21-25) yrs", value: 141 }, { name: "(26-30) yrs", value: 34 }, { name: "(31-40) yrs", value: 10 }, { name: "(41-60) yrs", value: 1 }]
}, {
    'Make': 'Volkswagen', 
    'Count': 8660,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 3323 }, { name: "(6-10) yrs", value: 2391}, { name: "(11-15) yrs", value: 1753 }, { name: "(16-20) yrs", value: 670 }, { name: "(21-25) yrs", value: 114 }, { name: "(26-30) yrs", value: 122 }, { name: "(31-40) yrs", value: 201 }, { name: "(41-60) yrs", value: 86 }]
}, {
    'Make': 'Lincoln', 
    'Count': 8377,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 2093 }, { name: "(6-10) yrs", value: 2545}, { name: "(11-15) yrs", value: 2352 }, { name: "(16-20) yrs", value: 1051 }, { name: "(21-25) yrs", value: 261 }, { name: "(26-30) yrs", value: 54 }, { name: "(31-40) yrs", value: 15 }, { name: "(41-60) yrs", value: 5 }, { name: "(61-100) yrs", value: 1 }]
}, {
    'Make': 'BMW', 
    'Count': 7495,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 2615 }, { name: "(6-10) yrs", value: 1885}, { name: "(11-15) yrs", value: 1642 }, { name: "(16-20) yrs", value: 941 }, { name: "(21-25) yrs", value: 261 }, { name: "(26-30) yrs", value: 87 }, { name: "(31-40) yrs", value: 55 }, { name: "(41-60) yrs", value: 9 }]
}, {
    'Make': 'Acura', 
    'Count': 7473,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 1820 }, { name: "(6-10) yrs", value: 2065}, { name: "(11-15) yrs", value: 2268 }, { name: "(16-20) yrs", value: 1022 }, { name: "(21-25) yrs", value: 262 }, { name: "(26-30) yrs", value: 35 }, { name: "(31-40) yrs", value: 1 }]
}, {
    'Make': 'Mack', 
    'Count': 7132,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 3136 }, { name: "(6-10) yrs", value: 1918}, { name: "(11-15) yrs", value: 1128 }, { name: "(16-20) yrs", value: 582 }, { name: "(21-25) yrs", value: 229 }, { name: "(26-30) yrs", value: 94 }, { name: "(31-40) yrs", value: 39 }, { name: "(41-60) yrs", value: 6 }]
}, {
    'Make': 'Subaru', 
    'Count': 6868,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 2670 }, { name: "(6-10) yrs", value: 1773}, { name: "(11-15) yrs", value: 1543 }, { name: "(16-20) yrs", value: 685 }, { name: "(21-25) yrs", value: 167 }, { name: "(26-30) yrs", value: 27 }, { name: "(31-40) yrs", value: 3 }]
}, {
    'Make': 'Plymouth', 
    'Count': 6775,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 1137 }, { name: "(6-10) yrs", value: 2466}, { name: "(11-15) yrs", value: 2144 }, { name: "(16-20) yrs", value: 710 }, { name: "(21-25) yrs", value: 180 }, { name: "(26-30) yrs", value: 59 }, { name: "(31-40) yrs", value: 51 }, { name: "(41-60) yrs", value: 18 }, { name: "(41-60) yrs", value: 10 }]
}, {
    'Make': 'Lexus', 
    'Count': 6118,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 2005 }, { name: "(6-10) yrs", value: 1774}, { name: "(11-15) yrs", value: 1432 }, { name: "(16-20) yrs", value: 710 }, { name: "(21-25) yrs", value: 174 }, { name: "(26-30) yrs", value: 23 }]
}, {
    'Make': 'Mercedes-Benz', 
    'Count': 5820,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 2073 }, { name: "(6-10) yrs", value: 1455}, { name: "(11-15) yrs", value: 1109 }, { name: "(16-20) yrs", value: 762 }, { name: "(21-25) yrs", value: 260 }, { name: "(26-30) yrs", value: 101 }, { name: "(31-40) yrs", value: 54 }, { name: "(41-60) yrs", value: 6 }]
}, {
    'Make': 'Isuzu', 
    'Count': 4659,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 1372 }, { name: "(6-10) yrs", value: 1489}, { name: "(11-15) yrs", value: 1157 }, { name: "(16-20) yrs", value: 499 }, { name: "(21-25) yrs", value: 118 }, { name: "(26-30) yrs", value: 21 }, { name: "(31-40) yrs", value: 3 }]
}, {
    'Make': 'Infiniti', 
    'Count': 3791,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 1307 }, { name: "(6-10) yrs", value: 1208}, { name: "(11-15) yrs", value: 969 }, { name: "(16-20) yrs", value: 271 }, { name: "(21-25) yrs", value: 32 }, { name: "(26-30) yrs", value: 4 }]
}, {
    'Make': 'Audi', 
    'Count': 1973,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 771 }, { name: "(6-10) yrs", value: 592}, { name: "(11-15) yrs", value: 427 }, { name: "(16-20) yrs", value: 172 }, { name: "(21-25) yrs", value: 11 }]
}, {
    'Make': 'Autocar-White', 
    'Count': 1295,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 183 }, { name: "(6-10) yrs", value: 500}, { name: "(11-15) yrs", value: 360 }, { name: "(16-20) yrs", value: 143 }, { name: "(21-25) yrs", value: 70 }, { name: "(26-30) yrs", value: 29 }, { name: "(31-40) yrs", value: 8 }, { name: "(41-60) yrs", value: 2}]
}, {
    'Make': 'Land Rover', 
    'Count': 988,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 435 }, { name: "(6-10) yrs", value: 328}, { name: "(11-15) yrs", value: 171 }, { name: "(16-20) yrs", value: 47 }, { name: "(21-25) yrs", value: 5 }, { name: "(26-30) yrs", value: 1 }, { name: "(31-40) yrs", value: 1 }]
}, {
    'Make': 'Jaguar', 
    'Count': 977,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 292 }, { name: "(6-10) yrs", value: 291}, { name: "(11-15) yrs", value: 248 }, { name: "(16-20) yrs", value: 104 }, { name: "(21-25) yrs", value: 22 }, { name: "(26-30) yrs", value: 12}, { name: "(31-40) yrs", value: 7 }, { name: "(41-60) yrs", value: 1 }]
},{
    'Make': 'Triumph', 
    'Count': 846,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 478 }, { name: "(6-10) yrs", value: 172}, { name: "(11-15) yrs", value: 101 }, { name: "(16-20) yrs", value: 30 }, { name: "(21-25) yrs", value: 7 }, { name: "(26-30) yrs", value: 13 }, { name: "(31-40) yrs", value: 23 }, { name: "(41-60) yrs", value: 22 }]
}, {
    'Make': 'Saab', 
    'Count': 771,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 185 }, { name: "(6-10) yrs", value: 241}, { name: "(11-15) yrs", value: 242 }, { name: "(16-20) yrs", value: 88 }, { name: "(21-25) yrs", value: 11 }, { name: "(26-30) yrs", value: 2 }, { name: "(31-40) yrs", value: 2 }]
}, {
    'Make': 'Eagle', 
    'Count': 689,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 51 }, { name: "(6-10) yrs", value: 330}, { name: "(11-15) yrs", value: 239 }, { name: "(16-20) yrs", value: 54 }, { name: "(21-25) yrs", value: 14 }, { name: "(26-30) yrs", value: 1 }]
}, {
    'Make': 'Other Import', 
    'Count': 663,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 348 }, { name: "(6-10) yrs", value: 187}, { name: "(11-15) yrs", value: 91 }, { name: "(16-20) yrs", value: 15 }, { name: "(21-25) yrs", value: 3 }, { name: "(26-30) yrs", value: 4 }, { name: "(31-40) yrs", value: 7 }, { name: "(41-60) yrs", value: 6 }, { name: "(61-100) yrs", value: 2 }]
}, {
    'Make': 'Porsche', 
    'Count': 624,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 213 }, { name: "(6-10) yrs", value: 126}, { name: "(11-15) yrs", value: 95 }, { name: "(16-20) yrs", value: 81 }, { name: "(21-25) yrs", value: 46 }, { name: "(26-30) yrs", value: 30 }, { name: "(21-25) yrs", value: 28 }, { name: "(26-30) yrs", value: 5 }]
}, {
    'Make': 'Ducati', 
    'Count': 600,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 379 }, { name: "(6-10) yrs", value: 143}, { name: "(11-15) yrs", value: 52 }, { name: "(16-20) yrs", value: 18 }, { name: "(21-25) yrs", value: 4 }, { name: "(26-30) yrs", value: 2 }, { name: "(31-40) yrs", value: 2 }]
}, {
    'Make': 'AM General', 
    'Count': 548,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 234 }, { name: "(6-10) yrs", value: 170}, { name: "(11-15) yrs", value: 102 }, { name: "(16-20) yrs", value: 13 }, { name: "(21-25) yrs", value: 13 }, { name: "(26-30) yrs", value: 6 }, { name: "(31-40) yrs", value: 9 }, { name: "(31-40) yrs", value: 1 }]
}, {
    'Make': 'Gillig', 
    'Count': 455,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 216 }, { name: "(6-10) yrs", value: 148}, { name: "(11-15) yrs", value: 76 }, { name: "(16-20) yrs", value: 10 }, { name: "(21-25) yrs", value: 3 }, { name: "(26-30) yrs", value: 2 }]
}, {
    'Make': 'MCI', 
    'Count': 433,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 152 }, { name: "(6-10) yrs", value: 127}, { name: "(11-15) yrs", value: 79 }, { name: "(16-20) yrs", value: 42 }, { name: "(21-25) yrs", value: 25 }, { name: "(26-30) yrs", value: 6 }, { name: "(31-40) yrs", value: 2 }]
}, {
    'Make': 'Bluebird', 
    'Count': 414,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 202 }, { name: "(6-10) yrs", value: 108}, { name: "(11-15) yrs", value: 77 }, { name: "(16-20) yrs", value: 17 }, { name: "(21-25) yrs", value: 6 }, { name: "(26-30) yrs", value: 2 }, { name: "(31-40) yrs", value: 2 }]
}, {
    'Make': 'Daewoo', 
    'Count': 396,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 251 }, { name: "(6-10) yrs", value: 97}, { name: "(11-15) yrs", value: 43 }, { name: "(16-20) yrs", value: 5 }]
}, {
    'Make': 'Victory', 
    'Count': 305,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 185 }, { name: "(6-10) yrs", value: 78}, { name: "(11-15) yrs", value: 36 }, { name: "(16-20) yrs", value: 6 }]
}, {
    'Make': 'Thomas Built', 
    'Count': 293,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 151 }, { name: "(6-10) yrs", value: 86}, { name: "(11-15) yrs", value: 42 }, { name: "(16-20) yrs", value: 10 }, { name: "(21-25) yrs", value: 4 }]
}, {
    'Make': 'Scion', 
    'Count': 278,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 250 }, { name: "(6-10) yrs", value: 28}]
}, {
    'Make': 'Fiat', 
    'Count': 132,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 107 }, { name: "(6-10) yrs", value: 12}, { name: "(11-15) yrs", value: 2 }, { name: "(16-20) yrs", value: 4 }, { name: "(21-25) yrs", value: 1 }, { name: "(26-30) yrs", value: 5 }, { name: "(31-40) yrs", value: 1 }]
}, {
    'Make': 'Other Domestic Manufacturers', 
    'Count': 96,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 80 }, { name: "(6-10) yrs", value: 2}, { name: "(11-15) yrs", value: 1}, { name: "(16-20) yrs", value: 1}, { name: "(21-25) yrs", value: 2 }, { name: "(26-30) yrs", value: 5 }, { name: "(31-40) yrs", value: 5 }]
},{
    'Make': 'American Motors', 
    'Count': 92,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 8 }, { name: "(6-10) yrs", value: 25}, { name: "(11-15) yrs", value: 24 }, { name: "(16-20) yrs", value: 16 }, { name: "(21-25) yrs", value: 14 }, { name: "(26-30) yrs", value: 5 }]
}, {
    'Make': 'Smart', 
    'Count': 86,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 53 }, { name: "(6-10) yrs", value: 29}, { name: "(11-15) yrs", value: 4 }]
}, {
    'Make': 'Moto-Guzzi', 
    'Count': 62,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 23 }, { name: "(6-10) yrs", value: 14}, { name: "(11-15) yrs", value: 9 }, { name: "(16-20) yrs", value: 5 }, { name: "(21-25) yrs", value: 4 }, { name: "(26-30) yrs", value: 1 }, { name: "(31-40) yrs", value: 2 }, { name: "(41-60) yrs", value: 4 }]
}, {
    'Make': 'Daihatsu', 
    'Count': 38,
    "hidden": true,
    "subData": [{ name: "(6-10) yrs", value: 8}, { name: "(11-15) yrs", value: 21 }, { name: "(16-20) yrs", value: 5 }, { name: "(21-25) yrs", value: 3 }, { name: "(26-30) yrs", value: 1 }]
}, {
    'Make': 'Grumman', 
    'Count': 33,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 2 }, { name: "(6-10) yrs", value: 7}, { name: "(11-15) yrs", value: 3 }, { name: "(16-20) yrs", value: 5 }, { name: "(21-25) yrs", value: 11 }, { name: "(26-30) yrs", value: 4 }, { name: "(26-30) yrs", value: 1 }]
}, {
    'Make': 'MG', 
    'Count': 31,
    "hidden": true,
    "subData": [{ name: "(21-25) yrs", value: 6 }, { name: "(26-30) yrs", value: 8 }, { name: "(31-40) yrs", value: 10 }, { name: "(41-60) yrs", value: 7 }]
}, {
    'Make': 'FWD', 
    'Count': 30,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 12 }, { name: "(6-10) yrs", value: 8}, { name: "(11-15) yrs", value: 4 }, { name: "(16-20) yrs", value: 4 }, { name: "(21-25) yrs", value: 2 }]
}, {
    'Make': 'Alfa Romeo', 
    'Count': 26,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 7 }, { name: "(6-10) yrs", value: 1}, { name: "(11-15) yrs", value: 4 }, { name: "(16-20) yrs", value: 3 }, { name: "(21-25) yrs", value: 4 }, { name: "(26-30) yrs", value: 2 }, { name: "(31-40) yrs", value: 4 }, { name: "(41-60) yrs", value: 1 }]
}, {
    'Make': 'Merkur', 
    'Count': 21,
    "hidden": true,
    "subData": [{ name: "(11-15) yrs", value: 12 }, { name: "(16-20) yrs", value: 6 }, { name: "(21-25) yrs", value: 3 }]
}, {
    'Make': 'Sterling', 
    'Count': 12,
    "hidden": true,
    "subData": [{ name: "(6-10) yrs", value: 1}, { name: "(11-15) yrs", value: 9 }, { name: "(16-20) yrs", value: 2 }]
}, {
    'Make': 'Austin Healey', 
    'Count': 11,
    "hidden": true,
    "subData": [{ name: "(31-40) yrs", value: 4 }, { name: "(41-60) yrs", value: 7 }]
}, {
    'Make': 'Renault', 
    'Count': 9,
    "hidden": true,
    "subData": [{ name: "(11-15) yrs", value: 5 }, { name: "(16-20) yrs", value: 3 },{ name: "(26-30) yrs", value: 1 }]
}, {
    'Make': 'Peugeot', 
    'Count': 9,
    "hidden": true,
    "subData": [{ name: "(11-15) yrs", value: 3 }, { name: "(16-20) yrs", value: 3 }, { name: "(21-25) yrs", value: 3}]
}, {
    'Make': 'BSA', 
    'Count': 8,
    "hidden": true,
    "subData": [{ name: "(31-40) yrs", value: 3 }, { name: "(41-60) yrs", value: 5 }]
}, {
    'Make': 'Diamond Reo', 
    'Count': 7,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 1 }, { name: "(26-30) yrs", value: 4 }, { name: "(31-40) yrs", value: 1 }, { name: "(41-60) yrs", value: 1 }]
}, {
    'Make': 'Eagle Coach', 
    'Count': 6,
    "hidden": true,
    "subData": [{ name: "(11-15) yrs", value: 1 }, { name: "(16-20) yrs", value: 1 }, { name: "(26-30) yrs", value: 1 }, { name: "(31-40) yrs", value: 2 }, { name: "(41-60) yrs", value: 1 }]
}, {
    'Make': 'Iveco-Magirus', 
    'Count': 6,
    "hidden": true,
    "subData": [{ name: "(6-10) yrs", value: 1}, { name: "(11-15) yrs", value: 1 }, { name: "(16-20) yrs", value: 3 }, { name: "(21-25) yrs", value: 1 }]
}, {
    'Make': 'Yugo', 
    'Count': 6,
    "hidden": true,
    "subData": [{ name: "(6-10) yrs", value: 1}, { name: "(11-15) yrs", value: 5 }]
}, {
    'Make': 'Norton', 
    'Count': 5,
    "subData": [{ name: "(31-40) yrs", value: 5 }],
    "hidden": true
}, {
    'Make': 'Brockway', 
    'Count': 3,
    "subData": [{ name: "(26-30) yrs", value: 3 }],
    "hidden": true
}, {
    'Make': 'Imperial', 
    'Count': 1,
    "subData": [{ name: "(31-40) yrs", value: 1 }],
    "hidden": true
},{
    'Make': 'Other Make', 
    'Count': 14705,
    "hidden": true,
    "subData": [{ name: "(0-5) yrs", value: 7988 }, { name: "(6-10) yrs", value: 3371}, { name: "(11-15) yrs", value: 1809 }, { name: "(16-20) yrs", value: 683 }, { name: "(21-25) yrs", value: 270 }, { name: "(26-30) yrs", value: 170 }, { name: "(31-40) yrs", value: 232 }, { name: "(41-60) yrs", value: 162 }, { name: "(61-100) yrs", value: 20 }]
}];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "Count";
pieSeries.dataFields.category = "Make";
pieSeries.dataFields.hidden = "hidden";
pieSeries.slices.template.states.getKey("active").properties.shiftRadius = 0;
// pieSeries.labels.template.text = "{category}\n{value.percent.formatNumber('#.#')}%";
chart.radius = am4core.percent(50);
pieSeries.slices.template.events.on("hit", function(event) {
  selectSlice(event.target.dataItem);
})
// Disable ticks and labels
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

// Disable tooltips
// pieSeries.slices.template.tooltipText = "";

// Add a legend
chart.legend = new am4charts.Legend();
chart.legend.scrollable = true;
chart.legend.position = "left";

var chart2 = container.createChild(am4charts.PieChart);
chart2.width = am4core.percent(20);
chart2.radius = am4core.percent(60);

// Add and configure Series
var pieSeries2 = chart2.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "value";
pieSeries2.dataFields.category = "name";
pieSeries2.slices.template.states.getKey("active").properties.shiftRadius = 0;
//pieSeries2.labels.template.radius = am4core.percent(50);
pieSeries2.labels.template.inside = true;
// pieSeries2.labels.template.fill = am4core.color("#ffffff");
pieSeries2.labels.template.disabled = true;
pieSeries2.ticks.template.disabled = true;
pieSeries2.alignLabels = false;
pieSeries2.events.on("positionchanged", updateLines);

var interfaceColors = new am4core.InterfaceColorSet();

var line1 = container.createChild(am4core.Line);
line1.strokeDasharray = "2,2";
line1.strokeOpacity = 0.5 ;
line1.stroke = interfaceColors.getFor("alternativeBackground");
line1.isMeasured = false;

var line2 = container.createChild(am4core.Line);
line2.strokeDasharray = "2,2";
line2.strokeOpacity = 0.5;
line2.stroke = interfaceColors.getFor("alternativeBackground");
line2.isMeasured = false;

var selectedSlice;

function selectSlice(dataItem) {

  selectedSlice = dataItem.slice;

  var fill = selectedSlice.fill;

  var count = dataItem.dataContext.subData.length;
  pieSeries2.colors.list = [];
  for (var i = 0; i < count; i++) {
    pieSeries2.colors.list.push(fill.brighten(i * 8 / count));
  }

  chart2.data = dataItem.dataContext.subData;
  pieSeries2.appear();

  var middleAngle = selectedSlice.middleAngle;
  var firstAngle = pieSeries.slices.getIndex(0).startAngle;
  var animation = pieSeries.animate([{ property: "startAngle", to: firstAngle - middleAngle }, { property: "endAngle", to: firstAngle - middleAngle + 360 }], 600, am4core.ease.sinOut);
  animation.events.on("animationprogress", updateLines);

  selectedSlice.events.on("transformed", updateLines);

//  var animation = chart2.animate({property:"dx", from:-container.pixelWidth / 2, to:0}, 2000, am4core.ease.elasticOut)
//  animation.events.on("animationprogress", updateLines)
}


function updateLines() {
  if (selectedSlice) {
    var p11 = { x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle), y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle) };
    var p12 = { x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle + selectedSlice.arc), y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle + selectedSlice.arc) };

    p11 = am4core.utils.spritePointToSvg(p11, selectedSlice);
    p12 = am4core.utils.spritePointToSvg(p12, selectedSlice);

    var p21 = { x: 0, y: -pieSeries2.pixelRadius };
    var p22 = { x: 0, y: pieSeries2.pixelRadius };

    p21 = am4core.utils.spritePointToSvg(p21, pieSeries2);
    p22 = am4core.utils.spritePointToSvg(p22, pieSeries2);

    line1.x1 = p11.x;
    line1.x2 = p21.x;
    line1.y1 = p11.y;
    line1.y2 = p21.y;

    line2.x1 = p12.x;
    line2.x2 = p22.x;
    line2.y1 = p12.y;
    line2.y2 = p22.y;
  }
}

chart.events.on("datavalidated", function() {
  setTimeout(function() {
    selectSlice(pieSeries.dataItems.getIndex(0));
  }, 1000);
});


}); // end am4core.ready()

