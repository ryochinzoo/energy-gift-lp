import { useEffect, useState } from "react"



export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= 1023) {
            const trigger = document.getElementById('scroll-trigger') as HTMLElement;
            const options = {
                threshold: 0,
                rootMargin: "0px",
            }
            const observer = new IntersectionObserver((entries, i) => {
                entries.map(entry => {
                    if (entry.isIntersecting) {
                        setIsScrolled(false)
                    } else {
                        setIsScrolled(true)
                    }
                    return ""
                })
            }, options)
            observer.observe(trigger);
        }
    }, [])
    return (
            <>
            <div id="scroll-trigger"></div>
            <header className={`header ${isScrolled ? "header-bg" : ""} header-bg-sp`}>
                <div className="header-wrapper">
                    <a href="#top">
                        <div className="logo">
                            <img src="./img/ENERGYGIFT.png" alt="logo"/>
                        </div>
                    </a>
                    <div>
                        <div className={`header-menu-sp ${isClicked ? "active" : ""}`}
                            onClick={() => {
                                if (isClicked) {
                                    return setIsClicked((prev) => { return false });
                                } else {
                                    return setIsClicked((prev) => { return true });
                                }
                            }}
                        >
                            <span></span><span></span><span></span>
                        </div>
                        <div className={`header-menu`}>
                            <ul>
                                <li><a href="#top">トップ</a></li>
                                <li><a href="#concept">コンセプト</a></li>
                                <li><a href="#service">サービス</a></li>
                                <li><a href="#about">運営会社</a></li>
                                <li><a href="#faq">よくある質問</a></li>
                                <li><a href="#flow">導入フロー</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className={`header-menu-sp-list ${isClicked ? "active" : ""}`}>
                <ul>
                    <li onClick={() => { return setIsClicked((prev) => { return false }); }}><a href="#top">トップ</a></li>
                    <li onClick={() => { return setIsClicked((prev) => { return false }); }}><a href="#concept">コンセプト</a></li>
                    <li onClick={() => { return setIsClicked((prev) => { return false }); }}><a href="#service">サービス</a></li>
                    <li onClick={() => { return setIsClicked((prev) => { return false }); }}><a href="#about">運営会社</a></li>
                    <li onClick={() => { return setIsClicked((prev) => { return false }); }}><a href="#faq">よくある質問</a></li>
                    <li onClick={() => { return setIsClicked((prev) => { return false }); }}><a href="#flow">導入フロー</a></li>
                    <li onClick={() => { return setIsClicked((prev) => { return false }); }}><a href="#contact">ご相談・資料請求</a></li>
                </ul>
            </div>
        </>
    )
}