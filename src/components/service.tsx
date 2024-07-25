import AccordionNpo from "./accordionNpo";
import '../assets/css/styles.scss';
import JSONFileNPO from '../assets/json/npo.json'; 

type NPO = {
    name: string,
    activity_name: string,
    description: string,
    images?: string[],
    activities: string[],
    link: string
}

export default function Service() {
    return (
        <div className="section">
            <div className="contents">
                <div className="contents-wrapper">
                    <div className="heading">サービス内容</div>
                    <div className="sub-heading">エナジーギフトの特徴</div>
                    <div className="feature">
                        <div className="feature-wrapper">
                            <div className="feature-number">01</div>
                            <div className="feature-img"><img src={"./img/dummy.png"} alt="feature01"/></div>
                            <div className="feature-title">コスト削減</div>
                            <div className="feature-description">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                        </div>
                        <div className="feature-wrapper">
                            <div className="feature-number">02</div>
                            <div className="feature-img"><img src={"./img/dummy.png"} alt="feature01"/></div>
                            <div className="feature-title">NPO寄付</div>
                            <div className="feature-description">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                        </div>
                        <div className="feature-wrapper">
                            <div className="feature-number">03</div>
                            <div className="feature-img"><img src={"./img/dummy.png"} alt="feature01"/></div>
                            <div className="feature-title">マネジメント</div>
                            <div className="feature-description">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                        </div>
                    </div>
                    <div className="sub-heading">支援先NPOについて</div>
                    {JSONFileNPO.data.map((npo : NPO, index : number) => {
                        return(
                            <AccordionNpo {...npo} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}