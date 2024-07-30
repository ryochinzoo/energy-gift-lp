import '../assets/css/styles.scss';
import { useState } from 'react';
import parser from 'html-react-parser';

type FAQ = {
    question: string,
    answer: string
}

export default function AccordionFaq(data: FAQ) {
    const [isOpen, setIsOpen] = useState(false);
    return (
            <div className='accordion accordion-faq'>
                <div className='accordion-faq-wrapper'
                onClick={(e)=>{
                    if (isOpen){
                        setIsOpen((prev) => { return false })
                    } else {
                        setIsOpen((prev) => { return true })
                    }
                }}>
                    <div className='question-headline accordion-faq-wrapper-headline'>
                        <div className="qb">Q.</div><div>{data.question}</div></div>
                    <div className={`accordion-arrow ${isOpen ? "is-open" : ""}`}></div>
                </div>
                <div className={`accordion-faq-wrapper-contents ${isOpen ? "is-open" : ""}`}>
                    <div className='contents-wrapper'>
                        <div className="ab">A.</div>
                        <div className='answer'>{ parser(data.answer) }</div>
                    </div>
                </div>
            </div>
    );
}