"use client"
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
import { MutableRefObject, useRef } from 'react';

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

  // reference a specific el in our react DOM
  const lineChart = useRef(null)

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

  const defaultData = {
    labels: [...Array(100).keys()],
    datasets: [
      { data: generateYoutubeGrowthData(10, 105) }
    ]
  }

  function renderChart() {
    const chart = lineChart.current
    const totalDays = (document.getElementById("total-days") as HTMLInputElement).value
    const viewsPerDay = (document.getElementById("views-per-day") as HTMLInputElement).value

    // parse the string values
    let parsedDays = parseInt(totalDays)
    let parsedViews = parseInt(viewsPerDay)

    if (chart !== null) {

      chart.data = {
        labels: [...Array(100).keys()],
        datasets: [
          { data: generateYoutubeGrowthData(10, 105) }
        ]
      }
      chart.update()
    }
  }

  return (
    <main className={styles.main}>
      <Line data={defaultData} width={100} height={40} options={options} ref={lineChart}></Line>
    </main>
  )
}
