'use client'
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement,Tooltip, Legend} from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend);


interface DoughnutChartProps {
    accounts?: any; // Define the appropriate type for accounts or remove it if not needed
  }

const DoughnutChart = ({ accounts } : DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250,2000,3450],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }

  return(
        <Doughnut 
        data={data} 
        options={{
            cutout: '60%',
            plugins: {
                legend: {
                    display: false,
                }
            }
        }}
        />
  )
}

export default DoughnutChart
