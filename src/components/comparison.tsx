import '../assets/css/styles.scss';
import CTAButton from './ctaButton';

export default function Comparison(){
    return(
        <div className='section section-bg-gray'>
            <div className='contents'>
                <div className='contents-wrapper'>
                    <div className='heading'>他社との比較</div>
                    <div className='compare-table'>
                        <table>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th><div className='enterprise'>新電力会社</div></th>
                                    <th><div className='enterprise'>大手電力会社</div></th>
                                    <th><div className='energy-gift'>エナジーギフト</div></th>
                                </tr>
                                <tr>
                                    <td className='compare-feature'>細かいプランニング</td>
                                    <td>✕</td>
                                    <td>✕</td>
                                    <td>◯</td>
                                </tr>
                                <tr>
                                    <td className='compare-feature'>エネルギーマネジメント</td>
                                    <td>✕</td>
                                    <td>◯</td>
                                    <td>◯</td>
                                </tr>
                                <tr>
                                    <td className='compare-feature'>寄付型モデル</td>
                                    <td>△</td>
                                    <td>✕</td>
                                    <td>◯</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='sub-heading-cta-comp'>
                        <div className='sub-heading-cta-comp-over'>＼　詳しい情報は資料掲載しております　／</div>
                        <div className='sub-heading-cta-comp-under'>お気軽に資料請求ください。</div>
                    </div>
                    <div className='cta-button'>
                        <CTAButton />
                    </div>
                </div>
            </div>
        </div>
    )
}