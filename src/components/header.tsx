import { useEffect, useState } from "react"



export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
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
        
    }, [])
    return (
            <>
            <div id="scroll-trigger"></div>
            <header className={`header ${isScrolled ? "header-bg" : ""}`}>
                <div className="header-wrapper">
                    <div className="logo">
                        <img src="./img/ENERGYGIFT.png" alt="logo"/>
                    </div>
                    <div className="header-menu">
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
            </header>
        </>
    )
}