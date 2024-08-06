import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './ActivityChart.css'

const data = [
  { name: '5', uv: 3000 },
  { name: '9', uv: 5000 },
  { name: '11',uv: 10000 },
  { name: '13',uv: 15000},
  { name: '15',uv: 5000},
  { name: '17',uv: 16000},
  { name: '19',uv: 10000},
  { name: '21',uv: 5000},
  { name: '23',uv: 13000},
  { name: '25',uv: 15000},
  { name: '27',uv: 5000}
];

const ActivityChart = () => {
  return (
    <div className="activity-chart">
      <h3>Activity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
