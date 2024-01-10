import React, { useEffect } from 'react';
import ChartJS from 'chart.js/auto';

ChartJS.register(require('chartjs-plugin-datalabels'));
function Chart({ metric, data }) {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    if (ctx.chart) {
      ctx.chart.destroy(); 
    }

    const myChart = new ChartJS(ctx, {
      type: 'horizontalBar', 
      data: {
        labels: data.map((item) => item.location || item.jobType), 
        datasets: [
          {
            label: metric,
            data: data.map((item) => item.revenue),
            backgroundColor: 'green', 
            
          },
        ],
      },
      options: {
       
      },
    });

    
    return () => myChart.destroy();
  }, [data, metric]); 

  return <canvas ref={canvasRef} />;
}

export default Chart;

