import '../assets/css/styles.scss';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-img'><img src={"./img/ENERGYGIFT.png"} alt="ENERGY GIFT" /></div>
            <div className='footer-company-name'>運営会社    <span className="footer-spacing">/</span>     <a href="https://savergiken.com/" target="_blank" rel="noreferrer">セーバー技研株式会社</a></div>
            <div className='footer-company-name'>電力供給会社    <span className="footer-spacing">/</span>    <a href="https://www.stckk.com/" target="_blank" rel="noreferrer">株式会社stc</a></div>
            <div className='footer-copyright'>©ENERGY GIFT ALL RIGHTS RESERVED.</div>
        </div>
    )
}