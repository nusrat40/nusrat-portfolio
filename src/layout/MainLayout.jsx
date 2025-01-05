import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutMe from "../sections/AboutMe";
import Contact from "../sections/Contact";
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <AboutMe></AboutMe>
            <Resume></Resume>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;