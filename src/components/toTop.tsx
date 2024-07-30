import { useState } from "react";

export default function ToTop() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="to_top"
            onMouseEnter={()=>{setIsHovered(true)}}
            onMouseOut={()=>{setIsHovered(false)}}
        >
            <a href="#top">
                <img src={ isHovered ? "./img/toTop_hover.png" : "./img/toTop.png" } alt="to_top_button" />
            </a>
        </div>
    )
}