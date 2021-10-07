/* ---------bar chart -------------*/
const myData = [
    { region: 'USA', value: 12 },
    { region: 'China', value: 16 },
    { region: 'Germany', value: 10 },
    { region: 'England', value: 8 },
    { region: 'Engld', value: 9 },
    { region: 'Eland', value: 12 },
    { region: 'Engld', value: 3 },
];

const margins = { horizontal: 20, vertical: 20 };
const chartWidth = 800 - (margins.horizontal * 2);
const chartHeight = 300 - (margins.vertical * 2);

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
        .domain(chartData.map(d => d.region));
    const y = d3
        .scaleLinear()
        .range([chartHeight, 0])
        .domain([0, d3.max(chartData, d => d.value) + 3]);

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
        .attr('height', d => chartHeight - y(d.value))
        .attr('x', d => x(d.region))
        .attr('y', d => y(d.value));

    chart.selectAll('.label').remove();

    chart
        .selectAll('.label')
        .data(chartData, d => d.id)
        .enter()
        .append('text')
        .text(d => d.value)
        .attr('x', d => x(d.region) + x.bandwidth() / 2)
        .attr('y', d => y(d.value) - 20)
        .attr('text-anchor', 'middle')
        .classed('label', true);
}

renderChart(myData);
