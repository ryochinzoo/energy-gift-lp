import '../assets/css/styles.scss';
import CTAButton from './ctaButton';

export default function Comparison(){
    return(
        <div className='section-bg-gray'>
            <div className='contents'>
                <div className='contents-wrapper'>
                    <div className='heading'>他社との比較</div>
                    <div className='sub-heading-cta-comp'>
                        詳しい情報は資料に掲載しております。<br />
                        お気軽に資料請求ください。
                    </div>
                    <div className='cta-button'>
                        <CTAButton />
                    </div>
                </div>
            </div>
        </div>
    )
}