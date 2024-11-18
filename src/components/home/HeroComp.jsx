const HeroComp = () =>{
    return(
        <>
        <section className="home" id="home">
            <div className="home-img">
                <img src="./assets/images/logo/NYEO.png" alt="" />
            </div>
            <div className="home-content">
                <h1>NYEO</h1>
                <h3>National Youth Economy Olympiad</h3>
                <p>Pendaftaran National Youth Economy Olympiad telah dibuka! <br />
                    dengan acara bergengsi ini dan dapatkan pengalaman yang tak terlupakan!</p>
                    <br />
                    <div className="hero-social-icon">   
                        <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></a>
                        <a href="https://www.instagram.com/nyeo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></a>
                        <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></a>
                        <a href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></a>
                        <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></a>
                    </div>
                    <br />
                    <br />
                    <a href="#" className="btn">Pendaftaran di Tutup</a>
            </div>
        </section>
        </>
    )
}

export default HeroComp