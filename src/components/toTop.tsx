import { useState, useEffect } from "react";

export default function ToTop() {
    const [isHovered, setIsHovered] = useState(false);
    const [isInFv, setIsInFv] = useState(false);
    useEffect(() => {
        if (window.innerWidth >= 1023) {
            const trigger = document.getElementById('fv-target') as HTMLElement;
            const options = {
                threshold: 0,
                rootMargin: "0px 0px 500px",
            }
            const observer = new IntersectionObserver((entries, i) => {
                entries.map(entry => {
                    if (entry.isIntersecting) {
                        setIsInFv(false)
                    } else {
                        setIsInFv(true)
                    }
                    return ""
                })
            }, options)
            observer.observe(trigger);
        }
    }, [])
    return (
        <div
            className="to_top"
            onMouseEnter={()=>{setIsHovered(true)}}
            onMouseOut={()=>{setIsHovered(false)}}
        >
            <a href="#contact" style={{"display": isInFv ? "block" : "none", "transitionDuration" : ".3s"}}>
                <img src={ isHovered ? "./img/toTop_hover.png" : "./img/toTop.png" } alt="to_top_button" />
            </a>
        </div>
    )
}