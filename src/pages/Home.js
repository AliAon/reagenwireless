import { Fragment } from "react"
import Footer from "../common/Footer"
import Header from "../common/Header"
import HeroSlider from "../components/Home/HeroSlider"

const Home=()=>{
    return(
        <Fragment>
        <Header/>
        <main>
            <HeroSlider/>
        </main>
        <Footer/>
        </Fragment>
       
    )

}
export default Home