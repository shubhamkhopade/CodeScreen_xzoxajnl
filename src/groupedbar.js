import {Bar} from "react-chartjs-2";
import React from "react";
import App from "./App"


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
      
    ],
  xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
      
    ],
  },
};

export default function GroupedBar(props){
 return <>    
 <div className='header'>
      <h1 className='title'>Bar Chart</h1>
      
    </div>
    <Bar data={props.ChartData} options={options} />
  </>
}
