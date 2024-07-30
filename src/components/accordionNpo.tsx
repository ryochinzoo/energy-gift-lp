import '../assets/css/styles.scss';
import { useState } from 'react';
import parser from 'html-react-parser';

type NPO = {
    name: string,
    activity_name: string,
    description: string,
    images?: string[],
    activities: string[],
    link: string,
    index: number,
}

export default function AccordionNpo(data: NPO, index: number) {
    const [isOpen, setIsOpen] = useState(false);
    return (
            <div className={`accordion accordion-npo accordion-border0${data.index + 1}`}>
                <div className='accordion-npo-wrapper'
                onClick={(e)=>{
                    if (isOpen){
                        setIsOpen((prev) => { return false })
                    } else {
                        setIsOpen((prev) => { return true })
                    }
                }}>
                    <div className={`accordion-svg0${data.index + 1}`}>
                        <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 27.8571C2.25 29.0424 3.25547 30 4.5 30H15.75V19.2857H2.25V27.8571ZM20.25 30H31.5C32.7445 30 33.75 29.0424 33.75 27.8571V19.2857H20.25V30ZM33.75 8.57143H30.7898C31.2258 7.76116 31.5 6.86384 31.5 5.89286C31.5 2.64509 28.7227 0 25.3125 0C22.3875 0 20.4961 1.42634 18.0703 4.57366C15.6445 1.42634 13.7531 0 10.8281 0C7.41797 0 4.64062 2.64509 4.64062 5.89286C4.64062 6.86384 4.90781 7.76116 5.35078 8.57143H2.25C1.00547 8.57143 0 9.52902 0 10.7143V16.0714C0 16.6607 0.50625 17.1429 1.125 17.1429H34.875C35.4938 17.1429 36 16.6607 36 16.0714V10.7143C36 9.52902 34.9945 8.57143 33.75 8.57143ZM10.8211 8.57143C9.26719 8.57143 8.00859 7.37277 8.00859 5.89286C8.00859 4.41295 9.26719 3.21429 10.8211 3.21429C12.2203 3.21429 13.2539 3.43527 16.875 8.57143H10.8211ZM25.3125 8.57143H19.2586C22.8727 3.44866 23.8781 3.21429 25.3125 3.21429C26.8664 3.21429 28.125 4.41295 28.125 5.89286C28.125 7.37277 26.8664 8.57143 25.3125 8.57143Z"/>
</svg>
                    </div>
                    <div className={`activity-headline accordion-contents0${data.index + 1}`}>
                        {data.activity_name}</div>
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
                                    <li key={i}>{ parser(activity) }</li>
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