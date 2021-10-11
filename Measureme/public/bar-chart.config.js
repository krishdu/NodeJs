/* ---------bar chart -------------*/

const margins = { horizontal: 24, vertical: 24 };
const chartWidth = 800 - (margins.horizontal * 2);
const chartHeight = 320 - (margins.vertical * 2);

const chartContainer = d3
    .select('svg')
    .attr('width', chartWidth + (margins.horizontal * 2))
    .attr('height', chartHeight + (margins.vertical * 2));

const chart = chartContainer.append('g');

function renderChart(chartData) {
    const x = d3
        .scaleBand()
        .rangeRound([margins.horizontal * 2, chartWidth])
        .padding(0.1)
        .domain(chartData.map(d => d.tName));
    const y = d3
        .scaleLinear()
        .range([chartHeight, 0])
        .domain([0, d3.max(chartData, d => d.tTime) + 3]);

    chart.selectAll('g').remove();

    chart
        .append('g')
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .attr('transform', `translate(0, ${chartHeight + margins.vertical})`)
        .attr('color', '#4f009e');
    chart
        .append('g')
        .call(d3.axisLeft(y).tickSizeOuter(0))
        .attr('transform', `translate(${margins.horizontal}, 0)`)
        .attr('color', '#4f009e');


    chart.selectAll('.bar').remove();

    chart
        .selectAll('.bar')
        .data(chartData, d => d.id)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', x.bandwidth())
        .attr('height', d => chartHeight - y(d.tTime))
        .attr('x', d => x(d.tName))
        .attr('y', d => y(d.tTime));

    chart.selectAll('.label').remove();

    chart
        .selectAll('.label')
        .data(chartData, d => d.id)
        .enter()
        .append('text')
        .text(d => d.tTime+'h')
        .attr('x', d => x(d.tName) + x.bandwidth() / 2)
        .attr('y', d => y(d.tTime) - 20)
        .attr('text-anchor', 'middle')
        .classed('label', true);
}

/*--------------- get bar chart data --------------*/
let json = document.querySelector('#barChartData').value;
let totalTaskTimeElement = document.querySelector('#totalTaskTime');
try{
    let totalTaskTime = 0;
    json = JSON.parse(json);
    json.forEach(function(element, index) {
        element.tTime = +element['tTime'];
        totalTaskTime  = totalTaskTime + element.tTime;
    });

    totalTaskTimeElement.innerHTML = totalTaskTime + 'H';
    renderChart(json);
}catch(e){
    console.log(e);
}
    


// function showBarChart(json){
//    json = JSON.parse(json);
//     json.forEach(function(element, index) {
//       element.tTime = +element['tTime'];
//     });

//    renderChart(json);
// }