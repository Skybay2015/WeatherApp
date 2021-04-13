import React from 'react';

import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { GridRows, GridColumns } from '@visx/grid';
import { curveBasis } from '@visx/curve';
import { scaleTime, scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';

// We'll use some mock data from `@visx/mock-data` for this.

// Define the graph dimensions and margins
const width = 1100;
const height = 500;
const margin = { top: 20, bottom: 30, left: 30, right: 20 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const date = (d) => new Date(d.dt * 1000);
const temp = (d) => d.main.temp;

const timeScale = (data) =>
   scaleTime({
      domain: [Math.min(...data.map(date)), Math.max(...data.map(date))],
      range: [0, xMax],
   });

const tempScale = (data) =>
   scaleLinear({
      domain: [Math.min(...data.map(temp)), Math.max(...data.map(temp))],
      range: [yMax, 0],
   });

// Finally we'll embed it all in an SVG
function Chart({ data }) {
   return (
      <svg width={width} height={height}>
         <Group left={margin.left} top={margin.top}>
            <GridRows
               scale={tempScale(data)}
               width={xMax}
               height={yMax}
               stroke='#e0e0e0'
            />
            <GridColumns
               scale={timeScale(data)}
               width={xMax}
               height={yMax}
               stroke='#e0e0e0'
               numTicks={25}
            />
            <AxisLeft scale={tempScale(data)} />
            <text x='-70' y='15' transform='rotate(-90)' fontSize={10}>
               Temperature (°C)
            </text>
            <AxisBottom numTicks={25} top={yMax} scale={timeScale(data)} />
            <LinePath
               data={data}
               curve={curveBasis}
               x={(d) => timeScale(data)(date(d))}
               y={(d) => tempScale(data)(temp(d))}
               stroke='#000'
               strokeWidth={1.5}
               strokeOpacity={1}
               strokeDasharray='1,5'
            />
         </Group>
      </svg>
   );
}

export default Chart;
