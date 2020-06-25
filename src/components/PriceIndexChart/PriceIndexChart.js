import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import Card from 'react-bootstrap/Card';

class Dimensions {
  constructor(
    width = 900,
    height = 700,
    margins = {
      top: 20,
      right: 20,
      bottom: 50,
      left: 50,
    }
  ) {
    this.width = width;
    this.height = height;
    this.margins = margins;
  }

  get graphWidth() {
    return this.width - this.margins.right - this.margins.left;
  }

  get graphHeight() {
    return this.height - this.margins.top - this.margins.bottom;
  }
}

export default function PriceIndexChart(props) {
  const { data } = props;

  const [priceIndex, setPriceIndex] = useState([]);
  const [svg, setSvg] = useState(null);

  const displayArea = useRef(null);

  useEffect(() => {
    const svgEl = d3
      .select(displayArea.current)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%');

    setSvg(svgEl);

    return () => {
      setSvg(null);
      d3.select(svg).remove();
    };
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    setPriceIndex(
      Object.keys(data).map((date) => {
        return { date: date, price: data[date] };
      })
    );
  }, [data]);

  useEffect(() => {
    if (priceIndex.length === 0) return;

    const computedStyle = window.getComputedStyle(svg._groups[0][0]);
    const computedWidth = computedStyle.width.replace('px', '') * 1;
    const computedHeight = computedStyle.height.replace('px', '') * 1;

    const dimensions = new Dimensions(computedWidth, computedHeight);

    svg.select('g').remove();

    const graph = svg
      .append('g')
      .attr('width', dimensions.graphWidth)
      .attr('height', dimensions.graphHeight)
      .attr(
        'transform',
        `translate(${dimensions.margins.left}, ${dimensions.margins.top})`
      );

    const x = d3.scaleTime().range([0, dimensions.graphWidth]);
    const y = d3.scaleLinear().range([dimensions.graphHeight, 0]);

    const xAxisGroup = graph
      .append('g')
      .attr('transform', `translate(0, ${dimensions.graphHeight})`);
    const yAxisGroup = graph.append('g');

    const line = d3
      .line()
      .x(function (d) {
        return x(new Date(d.date));
      })
      .y(function (d) {
        return y(d.price);
      });

    const path = graph.append('path');

    update(priceIndex);

    function update(data) {
      const dates = data.map((d) => new Date(d.date));
      const dataDates = data.map((d) => {
        return {
          date: new Date(d.date),
          price: d.price,
        };
      });
      const prices = data.map((d) => d.price);
      const max = minMaxScale(d3.max(prices));
      const min = minMaxScale(d3.min(prices), 'min');

      x.domain(d3.extent(dates));
      y.domain([min, max]);

      const xAxis = d3
        .axisBottom(x)
        .ticks(7)
        .tickFormat(d3.timeFormat('%b %d'));
      const yAxis = d3.axisLeft(y);

      xAxisGroup.call(xAxis);
      yAxisGroup.call(yAxis);

      xAxisGroup
        .selectAll('text')
        .attr('transform', 'rotate(-40)')
        .attr('text-anchor', 'end');

      path
        .data([data])
        .attr('fill', 'none')
        .attr('stroke', '#00bfa5')
        .attr('stroke-width', 2)
        .attr('d', line);

      // the data method is not limited to the data passed into this function
      // you can pass any source of data to use
      // like this modified version of the sourse data which uses date objects
      const circles = graph.selectAll('circle').data(dataDates);

      circles.attr('cx', (d) => x(d.date)).attr('cy', (d) => y(d.price));

      circles
        .enter()
        .append('circle')
        .attr('r', 4)
        .attr('cx', (d) => x(d.date))
        .attr('cy', (d) => y(d.price))
        .attr('fill', '#ccc');

      circles.exit().remove();
    }

    function minMaxScale(num, minMax = 'max') {
      const int = parseInt(num, 10);
      const str = parseInt(int.toString().substring(1)).toString();
      const len = str.length;
      let divisor = '1';

      for (let i = 0; i < len - 1; i++) {
        divisor = divisor + '0';
      }

      divisor *= 1;

      if (minMax === 'max') {
        return Math.ceil(num / divisor) * divisor;
      } else {
        return Math.floor(num / divisor) * divisor;
      }
    }
  }, [priceIndex]);

  return (
    <Card className='mt-2' style={{ height: '100%' }}>
      <Card.Header>Historical Bitcoin Price Data</Card.Header>
      <Card.Body ref={displayArea}></Card.Body>
    </Card>
  );
}
