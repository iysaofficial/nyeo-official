import HeroComp from '../../components/home/HeroComp'
import '../../assets/css/home/Home.css'
import LogoComp from '../../components/home/LogoComp'
import ContactComp from '../../components/home/ContactComp'
import AboutComp from '../../components/home/AboutComp'
import NewsletterComp from '../../components/home/NewsletterComp'
import CategoryComp from '../../components/home/CategoryComp'
import AfterEventComp from '../../components/home/AfterEventComp'



const HomePage = () =>{
    return(
        <>
        <HeroComp></HeroComp>
        <AboutComp></AboutComp>
        <CategoryComp></CategoryComp>
        <AfterEventComp></AfterEventComp>
        <ContactComp></ContactComp>
        <LogoComp></LogoComp>
        <NewsletterComp></NewsletterComp>
        </>
    )
}

export default HomePage