import { useState } from "react";

export default function CTAButtonSp() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            onMouseEnter={()=>{setIsHovered(true)}}
            onMouseOut={()=>{setIsHovered(false)}}
        >
            <a href="#contact">
                <img src={ isHovered ? "./img/CTAButton_sp_hover.png" : "./img/CTAButton_sp.png" } alt="cta_button" />
            </a>
        </div>
    )
}