"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js"

// Chart Js stuff
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default function Home() {

  function generateYoutubeGrowthData(viewsPerDay: number, totalDays: number) {

    // return an array of the views per day
    const totalViewsArr = [viewsPerDay]

    for (let i = 1; i < totalDays; i++) {
      let videoCount = i + 1
      let totalViews = totalViewsArr[i - 1] + (videoCount * viewsPerDay); // 10 + 20
      totalViewsArr.push(totalViews)
    }

    return totalViewsArr;
  }
  const options = {
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Youtube Growth Over Time with Daily Uploads",
        color: "white",
        font: {
          size: 18
        }
      }
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 1,
        borderColor: "lightblue",
        fill: "start",
        backgroundColor: "lightblue"
      },
      point: {
        radius: 10,
        hitRadius: 10
      }
    },
    scales: {
      x: {
        display: true,
        ticks: {
          color: "white"
        }
      },
      y: {
        display: true,
        ticks: {
          color: "white"
        }
      }
    }
  }

  return (
    <main className={styles.main}>
      <Line data={defaultData} width={100} height={40} options={options}></Line>
    </main>
  )
}
