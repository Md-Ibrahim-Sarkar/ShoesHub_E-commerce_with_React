import React from 'react'
import TopBar from '../../Components/header/TopBar'
import Navbar from '../../Components/header/Navbar'
import Banner from '../../Components/Home/banner/Banner'
import Best_Seller_Nav from '../../Components/Home/best_Seller/Best_Seller_Nav'
import Adidos_Banner from '../../Components/Home/adidos_Banner/Adidos_Banner'
import ShipRefSup from '../../Components/Home/shipRefSup/ShipRefSup'
import Latest_News from '../../Components/Home/latest-News/Latest_News'
import FeaturedItemList from '../../Components/Home/Featured-Products/FeaturedItemList'
import Footer_Search from '../../Components/Home/footer-Search/Footer_Search'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
      <div>
          <TopBar />
          <Navbar />
          <Banner />
      <Best_Seller_Nav />
      <Adidos_Banner />
      <ShipRefSup />
      <Latest_News />
      <FeaturedItemList />
      <Footer_Search />
      <Footer />
    </div>
  )
}

export default Home