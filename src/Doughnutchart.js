import {Doughnut} from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement,Tooltip,Legend);

function doughnutchart() {
    const expData = {
        labels :["Good","SoSo","Bad"],
        datasets:[
          {
            labels:["Good","SoSo","Bad"],
            data:[60,13,27],
            borderWidth:2,
            hoverBorderWidth: 3,
            backgroundColor:[
              "red",
              "yellow",
              "green"
            ],
          fill: true
          }
        ] 
      };
    
      return (
        <div>
          <Doughnut
            options={{
              legend: {
                display: true,
                position: "right"
              }
            }}
            data={expData}
            height={120}
          />
        </div>
      );
}
export default doughnutchart;