/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    2.8 - Activity: Your first visualization!
 */
// d3.select();
// d3.selectAll();
// append ;
// let svg = d3.select();
// let rect = svg.append('rect');
// rect.attr("x", 26);

// d3.select('#id').append("rect or circle").attr('fill', 'blue');
// let svg = d3
//     .select('#chart-area')
//     .append('svg')
//     .attr('width', 400)
//     .attr('height', 400);

// let circle = svg.append('circle').attr('cx', 100).attr('cy', 200).attr('r', 100).attr('fill', 'blue')
// let rect = svg.append('rect')
// .attr('x', 100).attr('y', 200).attr('width', 100).attr('height', 100).attr('fill', 'blue');

// tying data; data driven document;

// let data = [25, 20, 10, 12, 15];



// let circles = svg
//     .selectAll('circle').data(data);

// circles
//     .enter() 
//     .append('circle')
//     // item data and index
//     .attr('cx', (d, i) => {
//         // console.log('item' + d, 'index' + i);
//         return (i * 50) + 25;
//     })
//     .attr('cy', 45)
//     .attr('r', (d) => {
//         return d
//             // console.log('item' + d);
//     })
//     .attr('fill', 'blue');

// loading data from csv tsv and json files. using map to format raw data.
// can do request to out data source.

// bring in data from out source
// d3.json('data/buildings.json').then(data => {
//     // console.log(data);
//     // turn data to integer by this trick
//     data.forEach(d => d.height = +d.height);
//     // make svg
//     let svg = d3
//         .select('#chart-area')
//         .append('svg')
//         .attr('width', 400)
//         .attr('height', 400);

//     // define shapes
//     let circles = svg
//         .selectAll('circle').data(data);


//     // add attrs .
//     circles
//         .enter()
//         .append('circle')
//         .attr('cx', (d, i) => {
//             return (i * 70) + 45;
//         })
//         .attr('cy', 45)
//         .attr('r', (d) => {
//             return d.height / 10;
//         })
//         .attr('fill', d => {
//             if (d.name == "Shanghai Tower") return 'blue'
//             else return 'red';
//         });
// }).catch(err => console.log(err));


// d3.json('data/buildings.json').then(data => {
//     data.forEach(d => d.height = +d.height);
//     let svg = d3
//         .select('#chart-area')
//         .append('svg')
//         .attr('width', 400)
//         .attr('height', 400);

//     let circles = svg
//         .selectAll('rect').data(data);


//     circles
//         .enter()
//         .append('rect')
//         .attr('x', (d, i) => {
//             return (i * 70) + 45;
//         })
//         .attr('y', 20)
//         .attr('height', (d) => {
//             return d.height / 2;
//         })
//         .attr('width', 30)
//         .attr('fill', d => {
//             if (d.name == "Shanghai Tower") return 'blue'
//             else return 'grey';
//         });
// }).catch(err => console.log(err));
//-----------------------------------------------------------------------
// because size of svg.
// scales are funcs that map from an input domain to an output range
// base on min and max
// const y = d3.scaleLinear().domain([0, 828]).range([0, 200]); 
// clg(y(100)) 48.8         clg(y.invert(48.8))

// let svg = d3
//     .select('#chart-area')
//     .append('svg')
//     .attr('width', 400)
//     .attr('height', 400);

// d3.json('data/buildings.json').then(data => {

//     data.forEach(d => d.height = +d.height);

//     let y = d3.scaleLinear()
//         .domain([0, 350])
//         .range([0, 300]);

//     let rects = svg
//         .selectAll('rect')
//         .data(data)
//         .enter()
//         .append('rect')
//         .attr('x', (d, i) => {
//             return (i * 70) + 20;
//         })
//         .attr('y', 40)
//         .attr('height', (d) => {
//             return y(d.height);
//         })
//         .attr('width', 30)
//         .attr('fill', d => {
//             if (d.name == "Shanghai Tower") return 'blue'
//             else return 'grey';
//         });
// }).catch(err => console.log(err));


//------------------------------------------------
// logarithm scales.
// usage like population scale
// min max and base 
// base 1 is linear 
// it must negative or positive not zero for log undefined.

//  let y = d3.scaleLog()
//    .domain([0, 350])
//    .range([0, 300])
//    .base(10);

//---------------------------------------------------
// time scales.
// linear by data works with date object in js.

// let y = d3.scaleTime()
//     .domain([new Date(2000, 0, 1), new Date(2001, 0, 1)])
//     .range([0, 300])

//-------------------------------------------------------
// ordinal scales 
// when use color in visualization .
// africa red asia blue pangaea yellow and ...
// if we dont  define it loop back to index zero;

let y = d3.scaleOrdinal()
    .domain(['africa', 'europe', 'asia'])
    .range(['red', 'orange', 'teal'])

let y = d3.scaleOrdinal()
    .domain(['africa', 'europe', 'asia'])
    // category color defined on d3 find list .
    .range(d3.schemeCategory10);

// no invert method for ordinal scale.


//-------------------------------------------------------
// band scales  or bar charts;
//
// x scale width
// y scale height
// range 
// step : width of 
// padding inner : space between;
// padding outer : space from edge;

// it take min max padding 
// we can not add new value to domains  like before .

let x = d3.scaleOrdinal()
    .domain(['africa', 'europe', 'asia'])
    .range([0, 400])
    .paddingInner(0.3)
    .paddingOuter(0.2);

x.bandwidth();








let svg = d3
    .select('#chart-area')
    .append('svg')
    .attr('width', 400)
    .attr('height', 400);

d3.json('data/buildings.json').then(data => {

    data.forEach(d => d.height = +d.height);

    let x = d3.scaleBand().domain('adding to arr cause adjust info').range().paddingInner().paddingOuter();
    let y = d3.scaleLinear()
        .domain([0, 350])
        .range([0, 300]);
    let rects = svg
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('y', 20)
        .attr('x', d => {
            return x(d.name);
        })
        .attr('width', x.bandwidth)
        .attr('height', (d) => {
            return y(d.height);
        })
        .attr('fill', d => {
            if (d.name == "Shanghai Tower") return 'blue'
            else return 'grey';
        });
}).catch(err => console.log(err));

//----------------------------------------------------------
// d3 min and max and extent  also map
// min 2 max 4 extent [2,4] , map [2,3,4]
// remember domain take array of info.

let min = d3.min(data, d => d.value);

data.map();


//------------------------------------------------------ 
// margins and groups
// svg groups: invisible for organizing data
// to structure elements on the page
// translate(margin.left, margin.top);
// using margin : attach everything to svg groups;
// by translate move mulitple svgs at once

// svg > <g transform=translate(200, 0)> many rects </g> svg
// lesson 20

//------------------------------------------------
// axis and tables
// d3.axisLeft axisTio axisBottom axisRight
// axis generators : 
let leftAxis = d3.axisLeft(Y - SCALE);
g.append('g').attr('classs', 'left axis').call(leftAxis);
// tick size '   '    '     '    '
// by 3 methods tickSizeOuter() tickSize()== effect all, tickSizeInner()
// how many ticks with ticks();
// tickFormate(d3.format())
// explicit values tickValues([1,2,3,4,5,6,7]);

//------------------------------------------------
//bar chart reverse y-scale and y-axis