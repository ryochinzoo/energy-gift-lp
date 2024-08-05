import AccordionNpo from "./accordionNpo";
import '../assets/css/styles.scss';
import JSONFileNPO from '../assets/json/npo.json'; 

export default function NPOList() {
    return (
        <div className='contents section-npo npo-list'>
            <div className="npo-list-image-area">
                <img className="npo-list-image-area-pc" src="./img/npo_bg.png" alt="" />
                <img className="npo-list-image-area-sp" src="./img/npo_bg_sp.png" alt="" />
                <div className="npo-list-heading">電気でいいコト、<br className="npo-list-heading-sp-break" />はじめよう。</div>
            </div>
            <div className='npo-list-accordion' id="npo">
                <div className="sub-heading">支援先NPOについて</div>
                {JSONFileNPO.data.map((npo : any, index : number) => {
                    npo.index = index;
                    return(
                        <AccordionNpo {...npo} key={index} />
                    )
                })}
            </div>
        </div>
    )
}