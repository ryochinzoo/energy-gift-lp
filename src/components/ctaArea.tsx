import '../assets/css/styles.scss';
import CTAButton from './ctaButton';

export default function CTAArea(){
    return(
        <div className='section-bg-gray'>
            <div className='contents'>
                <div className='sub-heading-cta'>使うだけの電気から、見える電気にすることで</div>
                <div className='heading-cta'>
                    会社や社会にとって良くなる未来を<br />
                    一緒に計画しましょう。
                </div>
                <div className='cta-button'>
                    <CTAButton />
                </div>
            </div>
        </div>
    )
}