import Image from 'next/image'
import styles from './page.module.css'

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

  return (
    <main className={styles.main}>

    </main>
  )
}
