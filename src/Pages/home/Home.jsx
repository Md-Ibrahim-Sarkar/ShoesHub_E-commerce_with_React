import React from 'react'
import TopBar from '../../Components/header/TopBar'
import Navbar from '../../Components/header/Navbar'
import Banner from '../../Components/banner/Banner'
import Best_Seller_Nav from '../../Components/best_Seller/Best_Seller_Nav'

function Home() {
  return (
      <div>
          <TopBar />
          <Navbar />
          <Banner />
          <Best_Seller_Nav />
    </div>
  )
}

export default Home