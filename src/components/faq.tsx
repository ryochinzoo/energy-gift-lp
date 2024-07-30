import AccordionFaq from "./accordionFaq";
import '../assets/css/styles.scss';
import JSONFileNPO from '../assets/json/faq.json'; 

type FAQ = {
    question: string,
    answer: string
}

export default function FAQArea() {
    return (
        <div className="section" id="faq">
            <div className="contents">
                <div className="contents-wrapper">
                    <div className="heading">よくある質問</div>
                    {JSONFileNPO.data.map((faq : FAQ, index : number) => {
                        return(
                            <AccordionFaq {...faq} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}