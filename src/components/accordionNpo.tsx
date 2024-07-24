import '../assets/css/styles.scss';
import { useState } from 'react';
import parser from 'html-react-parser';

type NPO = {
    name: string,
    activity_name: string,
    description: string,
    images?: string[],
    activities: string[],
    link: string
}

export default function AccordionNpo(data: NPO, index: number) {
    const [isOpen, setIsOpen] = useState(false);
    return (
            <div className='accordion'>
                <div className='accordion-npo-wrapper'
                onClick={(e)=>{
                    if (isOpen){
                        setIsOpen((prev) => { return false })
                    } else {
                        setIsOpen((prev) => { return true })
                    }
                }}>
                    <div className='activity-headline'>{data.activity_name}</div>
                    <div className='org-name'>{data.name}</div>
                    <div className={`accordion-arrow ${isOpen ? "is-open" : ""}`}></div>
                </div>
                <div className={`accordion-npo-wrapper-contents ${isOpen ? "is-open" : ""}`}>
                    <div className='contents-wrapper'>
                        <div>{ parser(data.description) }</div>
                        <div className='images'>
                            {data.images?.map((img: string, idx: number) => {
                                return (
                                    <img key={idx} src={`./img/${img}`} alt={img} />
                                )
                            })}
                        </div>
                    </div>
                    <div className='activity-wrapper'>
                        <div className='sub-headline'>▶ 取り組み</div>
                        <ul>
                            {data.activities.map((activity: string, i: number) => {
                                return (
                                    <li key={i}>{ activity }</li>
                                )
                            })}
                        </ul>
                    </div>
                    <a href={`${data.link}`} className='link-wrapper' target="_blank" rel="noreferrer">
                        <div className="link">{data.name} をもっと知る</div>
                    </a>
                </div>
            </div>
    );
}