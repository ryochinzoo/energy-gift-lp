import { useState } from "react";

export default function CTAButton() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            onMouseEnter={()=>{setIsHovered(true)}}
            onMouseOut={()=>{setIsHovered(false)}}
        >
            <a href="/">
                <img src={ isHovered ? "./img/CTAButton_hover.png" : "./img/CTAButton.png" } alt="cta_button" />
            </a>
        </div>
    )
}