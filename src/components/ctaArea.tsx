import '../assets/css/styles.scss';
import CTAButton from './ctaButton';

export default function CTAArea(){
    return(
        <div className='section-cta'>
            <div className='contents'>
                <div className='sub-heading-cta'>
                    <span className='accent-border-big'>使うだけ</span>だった電気から、
                    <span className='accent-border-big'>見える電気</span>にすることで</div>
                <div className='heading-cta'>
                    <span className='accent'>
                        <span className='accent-big'>会社</span>も<span className='accent-big'>社会</span>も</span>良くなっていきます。<br />
                    自社にフィットするかどうか<br />
                    調べてみませんか？
                    </div>
                <div className='cta-button'>
                    <CTAButton />
                </div>
            </div>
        </div>
    )
}