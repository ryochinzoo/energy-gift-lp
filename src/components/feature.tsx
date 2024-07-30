import AccordionFaq from "./accordionFaq";
import '../assets/css/styles.scss';
import JSONFileNPO from '../assets/json/faq.json'; 

type FAQ = {
    question: string,
    answer: string
}

export default function Feature() {
    return (
        <>
        <div className="sub-heading">エナジーギフト<span className="sub-heading-biggest">3</span>つの特徴</div>
                    <div className="feature">
                        <div className="feature-wrapper">
                            <div className="feature-number">01</div>
                            <div className="feature-title">コスト削減できる仕組み(市場連動＋価格固定化)</div>
                        </div>
                        <div className="feature-contents">                        
                            <div className="feature-description">
                            電気料金単価は、電力市場価格に連動して決まっています。季節や時間によって価格も変動するのですが、お昼は安く・夜は高いなど、変動状況は年間通してある程度パターン化しています。<br />
この、安い時の電力を使用したい分だけ買い、<span className="emphasis">安い費用をそのまま固定単価にする</span>ことでコスト削減を実現し、変動リスクがありません。<br />
しかも、電気が余ったら市場に販売できます。<br />
1日〜1ヶ月単位で購入することができるので、例えば「今年の夏は電気代上がりそうだな」と思ったら、保険をかけるように見直すことができます。
                            </div>
                            <div className="feature-img"><img src={"./img/feature01.png"} alt="feature01"/></div>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-wrapper">
                            <div className="feature-number">02</div>
                            <div className="feature-title">エネルギーマネジメント</div>
                        </div>
                        <div className="feature-contents">                        
                            <div className="feature-description">
                            電力使用状況のデータより見えてくる電力利用傾向から、<span className="emphasis">最適な運用を各種サポート</span>いたします。<br />
                            ・エネルギー量削減<br />
                            ・CO2削減の計画立案<br />
                            ・設備投資計画<br />
                            ・主要ユーティリティ設備の管理リスト作成<br />
                            ・マーケットレポート配信<br />
                            ・社員様向け勉強会実施
                            </div>
                            <div className="feature-img"><img src={"./img/feature02.png"} alt="feature02"/></div>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-wrapper">
                            <div className="feature-number">03</div>
                            <div className="feature-title">費用の透明性</div>
                        </div>
                        <div className="feature-contents">                        
                            <div className="feature-description">
                            電力市場の金額は、どこの会社が高い・安いのか、わかりにくい不透明な所があります。<br />
ENERGY GIFTは、<span className="emphasis">手数料2.2円<span className="small">(1kWhあたり)</span>＋電気代(原価)</span>という明朗会系にすることで、限りなく安くし、かつ透明性のある事業モデルにしました。<br />
この費用の中で、エネルギーマネジメントや寄付などの付帯サービスも行いますので、追加で費用がかかりません。
                            </div>
                            <div className="feature-img add-padding"><img src={"./img/feature03.png"} alt="feature03"/></div>
                        </div>
                    </div>
        </>
    )
}