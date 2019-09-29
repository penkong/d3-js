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
d3.json('data/buildings.json').then(data => {
    // console.log(data);
    // turn data to integer by this trick
    data.forEach(d => d.height = +d.height);
    // make svg
    let svg = d3
        .select('#chart-area')
        .append('svg')
        .attr('width', 400)
        .attr('height', 400);

    // define shapes
    let circles = svg
        .selectAll('circle').data(data);


    // add attrs .
    circles
        .enter()
        .append('circle')
        .attr('cx', (d, i) => {
            return (i * 70) + 45;
        })
        .attr('cy', 45)
        .attr('r', (d) => {
            return d.height / 10;
        })
        .attr('fill', d => {
            if (d.name == "Shanghai Tower") return 'blue'
            else return 'red';
        });
}).catch(err => console.log(err));