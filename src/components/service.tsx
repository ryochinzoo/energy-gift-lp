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
        <div className="service">
            <div className="contents">
                <div className="contents-wrapper">
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