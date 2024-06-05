const ContactComp = () =>{
    return(
        <>
         <section className="contact-section" id="contact-section">
            <div className="container contact__container">
                <aside className="contact__aside">
                    <div className="aside__image">
                        <img src="./assets/images/icon/contact.svg" alt="" />
                    </div>
                    <h2>Hubungi Kami</h2>
                    <p>Jangan ragu untuk menghubungi kami. Kami di sini untuk membantu Anda dengan semua kebutuhan Anda.</p>
                    <ul className="contact__details">
                        <li>
                            <i className="uil uil-phone-times"></i>
                            <a href='https://wa.me/+6281770914129' target='_blank'>+62817-7091-4129</a>
                        </li>
                        <li>
                            <i className="uil uil-envelope"></i>
                            <a href='mailto:nyeoofficial@gmail.com' target='_blank'>nyeoofficial@gmail.com</a>
                        </li>
                        <li>
                            <i className="uil uil-location-point"></i>
                            <a href='https://goo.gl/maps/9x18coXGCmSscKec6' target='_blank'>Jl. Kemang No. 63 RT 03 RW 06</a>
                        </li>
                    </ul>
                    <div className="contact-social-icon">   
                    <span>Follow us</span>
                        <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></a>
                        <a href="https://www.instagram.com/nyeo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></a>
                        <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></a>
                        <a href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></a>
                        <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></a>
                    </div>
                </aside>

                <form action="https://formspree.io/f/xvoeljyl" method="POST" className="contact__form">
                    <input type="text" name="name" placeholder="Masukan Nama Anda" required/>
                    <input type="email" name="email" placeholder="Masukan Email Anda" required/>
                    <textarea name="message" rows="7" placeholder="Masukan Pesan" required></textarea>
                    <button type="submit" className="btn btn-primary">Kirim Pesan</button>
                </form>
            </div>
         </section>
        </>
    )
}

export default ContactComp