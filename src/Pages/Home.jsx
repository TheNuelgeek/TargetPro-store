import Grid from "../Components/Grids/Grid";
import HeroSection from "../Components/Hero/Hero";
import NavBar from "../Components/NavBar/NavBar";

function Home(){
    return(
        <div>
            <NavBar/>
            <HeroSection />
            <Grid />
        </div>
    )
}

export default Home;