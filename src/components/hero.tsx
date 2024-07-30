import '../assets/css/styles.scss';
import CTAButton from './ctaButton';

export default function Hero() {
    return (
        <>
        <div className='hero' id="top">
            <div className='hero-align-right'>
                <div className='hero-wrapper'>
                    <div className='hero-wrapper-big'>
                        電気に<br />
                        新しい価値を
                    </div>
                    <div className='hero-wrapper-small'>
                        電気コストを抑えて、使うだけで社会貢献にもなる<br />
                        企業と社会を繋ぐ電力プランナーサービスです。
                    </div>          
                    <CTAButton />
                </div>
            </div>
            <div className='hero-align-left'>
                <div className='hero-align-left-kv-icon'>
                    <img src='./img/KVIcon.png' alt="kv_icon" />
                </div>
            </div>
        </div>
        <div className='manifesto'>
            <div className='manifesto-wrapper'>
                    <div className='heading-manifesto'>サービスが生まれた想い</div>

                    昨今の継続的な物価・エネルギー価格の高騰により、<br />
                    影響を受けている所は少なくありません。<br />
                    特に産業への影響が大きく、高い電気代は企業の運営コストに直結し、<br />
                    結果として製品やサービスの価格上昇へとつながります。<br />
                    「そんな影響を大きく受けている企業の力になれないか。」という想いと、<br />
                    もうひとつ、数多くの社会課題に対し、<br />
                    「このままでは子どもたちへつないでいく未来が危ない。<br />
                    少しでも良い未来を後世へ残したい。」<br />
                    と想いこのサービスを立ち上げました。<br />
                    <br />

                    <div className='subhead-border'>電気に新しい価値を。</div>

                    エナジー（電気）をギフト（贈り物）へ変える。<br />
                    電気を電力としての価値だけにとどめることなく、<br />
                    ENERGY GIFTを通じて寄付金、人との繋がり、カーボンニュートラルへの取り組み、<br />
                    CSR活動による企業価値の向上、カスタマーサクセスなど、様々な価値へと変換されます。<br />
                    毎日何気なく使っている身近な電気だからこそ、無理なく続けられる形で<br />
                    誰かに贈り物を送り続けることができれば、<br />
                    大きな力となるのではないか。そんな想いを込めています。
            </div>
            <div className='manifesto-head-small'>
            ＼　現場を見てきた・知ってるからこそ　／
            </div>
            <div className='manifesto-head'>
                <div className='manifesto-head-big'>ご提供できる<span className='manifesto-head-big-border'>「電気の新しい価値」</span>
                </div>を考えました。
            </div>
        </div>
        </>
    )
}