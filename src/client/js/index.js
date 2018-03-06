require('../styles/index.css');

// import * as d3 from 'd3';
const d3 = require('d3');

const d3Selection = (element) => {
  d3.select(element)
    .on('submit', () => {
      d3.event.preventDefault();
      const input = d3.select('input');
      const text = input.property('value');

      d3.select('#letters')
        .selectAll('.letter')
        .data(getCharacterFrequency(text))
        .enter()
        .append('div')
        .classed('letter', true)
        .style('width', '20px')
        .style('line-height', '20px')
        .style('margin-right', '5px')
        .style('height', (d) => {
          return `${d.count * 80}px`
        })
        .text((d) => {
          return d.character
        });

      d3.select('#phrase')
        .text(`Analysis of: ${text}`)
    })
}

const getCharacterFrequency = (str) => {

  const sortedStrArr = str.split('').sort();
  console.log(sortedStrArr);
  const data = [];
  sortedStrArr.forEach((currentValue, index) => {
    let last = data[data.length - 1];
    if (last && currentValue === last.character) {
      data[data.length - 1].count++;
    } else {
      data.push({ character: currentValue, count: 1 });
    }
  });

  return data;
}

document.addEventListener('DOMContentLoaded', () => {
  d3Selection('form');
})
