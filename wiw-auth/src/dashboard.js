import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './dashboard.css';

const Dashboard = () => {
  const data = {
    totalRevenue: 50000,
    totalJobsAvg: 15,
    ticketsCreated: 120,
    ticketsScheduled: 80,
    outstandingAmount: 8000,
    membershipSold: 50,
    jobsCompleted: 90,
    totalCancelled: 10,
    revenueByLocation: [
      { location: 'City A', revenue: 20000 },
      { location: 'City B', revenue: 15000 },
      { location: 'City C', revenue: 10000 },
      { location: 'City D', revenue: 5000 },
    ],
    revenueByJobType: [
      { jobType: 'Type A', revenue: 30000 },
      { jobType: 'Type B', revenue: 15000 },
      { jobType: 'Type C', revenue: 5000 },
    ],
  };

  const chartRefLocation = useRef(null);
  const chartRefJobType = useRef(null);

  useEffect(() => {
    const destroyCharts = () => {
      if (chartRefLocation.current) {
        const chartLocation = Chart.getChart(chartRefLocation.current);
        if (chartLocation) {
          chartLocation.destroy();
        }
      }

      if (chartRefJobType.current) {
        const chartJobType = Chart.getChart(chartRefJobType.current);
        if (chartJobType) {
          chartJobType.destroy();
        }
      }
    };

    destroyCharts();
    const configLocation = {
      type: 'bar',
      data: {
        labels: data.revenueByLocation.map((item) => item.location),
        datasets: [
          {
            label: 'Revenue by Location',
            data: data.revenueByLocation.map((item) => item.revenue),
            backgroundColor: 'green',
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        layout: {
          padding: {
            left: 50,
          },
        },
      },
    };

    const configJobType = {
      type: 'bar',
      data: {
        labels: data.revenueByJobType.map((item) => item.jobType),
        datasets: [
          {
            label: 'Revenue by Job Type',
            data: data.revenueByJobType.map((item) => item.revenue),
            backgroundColor: 'green',
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        layout: {
          padding: {
            left: 50,
          },
        },
      },
    };

    if (chartRefLocation.current && chartRefJobType.current) {
      new Chart(chartRefLocation.current, configLocation);
      new Chart(chartRefJobType.current, configJobType);
    }

    return destroyCharts;
  }, []);

  return (
    <div className="dashboard-container">
      <div className="cards-container">
        {/* First row of cards */}
        <div className="card-container">
          <div className="card">
            <p>Total Revenue</p>
            <p className="green-text">${data.totalRevenue}</p>
          </div>
          <div className="card">
            <p>Total Jobs Avg</p>
            <p>{data.totalJobsAvg}</p>
          </div>
          <div className="card">
            <p>Tickets Created</p>
            <p>{data.ticketsCreated}</p>
          </div>
          <div className="card">
            <p>Tickets Scheduled</p>
            <p>{data.ticketsScheduled}</p>
          </div>
        </div>

        {/* Second row of cards */}
        <div className="card-container">
          <div className="card red-background">
            <p>Outstanding Amount</p>
            <p className="red-text">${data.outstandingAmount}</p>
          </div>
          <div className="card">
            <p>Membership Sold</p>
            <p>{data.membershipSold}</p>
          </div>
          <div className="card">
            <p>Jobs Completed</p>
            <p>{data.jobsCompleted}</p>
          </div>
          <div className="card">
            <p>Total Cancelled</p>
            <p>{data.totalCancelled}</p>
          </div>
        </div>
      </div>

      <div className="bar-graphs-container">
        <div className="bar-graph">
          <canvas ref={chartRefLocation} width={200} height={150}></canvas>
        </div>
        <div className="bar-graph">
          <canvas ref={chartRefJobType} width={200} height={150}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
