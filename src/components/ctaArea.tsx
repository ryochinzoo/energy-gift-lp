import '../assets/css/styles.scss';
import CTAButton from './ctaButton';
import CTAButtonSp from './ctaButtonSp';

export default function CTAArea(){
    return(
        <div className='section-cta'>
            <div className='contents'>
                <div className='sub-heading-cta'>
                    <span className='accent-border-big'>使うだけ</span>だった電気から、
                    <span className='sub-heading-sp-break'><span className='accent-border-big'>見える電気</span>にすることで</span></div>
                <div className='heading-cta'>
                    <span className='accent heading-sp-break'>
                        <span className='accent-big'>会社</span>も<span className='accent-big'>社会</span>も</span>良くなる未来があります。<br /><br />
                    まずは<span className='accent heading-sp-break'> <span className='accent-big'>御社の電力使用状況を知る</span></span>ところからはじめてみませんか？
                    </div>
                <div className='cta-button'>
                    <CTAButton />
                </div>
                <div className='cta-button-sp'>                
                    <CTAButtonSp />   
                </div>
            </div>
        </div>
    )
}