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
        <div className="sub-heading">ENERGY GIFT<span className="sub-heading-sp-break"><span className="sub-heading-biggest">3</span>つの特徴</span></div>
                    <div className="feature">
                        <div className="feature-wrapper">
                            <div className="feature-number">01</div>
                            <div className="feature-title">コスト削減の仕組み　市場連動＋価格固定ヘッジサービス</div>
                        </div>
                        <div className="feature-contents">                        
                            <div className="feature-description">
                            電気料金単価は、電力市場価格に連動して決まっています。季節や時間によって価格も変動するのですが、お昼は安く・夜は高いなど、変動状況は年間通してある程度パターン化しています。<br />
                            安いタイミングでは市場連動のメリットを取り、「今年の
                            夏は電力単価が高騰しそうだな」といったタイミングでは
                            価格を固定し価格高騰リスクを回避することが可能です。<br />
                            価格固定は時間帯、曜日、月単位、年単位といった需要家
                            のニーズに合わせて設計ができますので<span className="emphasis">自社にあった最適なプランニングが可能</span>です。
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
                            電力使用状況のデータより見えてくる電気利用傾向から、<span className="emphasis">最適な運用を各種サポート</span>いたします。<br />
                            ・エネルギー量削減<br />
                            ・CO2削減の計画立案<br />
                            ・設備投資計画<br />
                            ・電気使用時間の運用アドバイス<br />
                            ・マーケットレポート配信<br />
                            ・社員様向け勉強会実施
                            </div>
                            <div className="feature-img"><img src={"./img/feature02.png"} alt="feature02"/></div>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-wrapper">
                            <div className="feature-number">03</div>
                            <div className="feature-title">電気料金の透明性</div>
                        </div>
                        <div className="feature-contents">                        
                            <div className="feature-description">
                            電気料金は価格の仕組み、プランがわかりづらい傾向にあります。ENERGY GIFT は<span className="emphasis">手数料2.2 円/kWh と業界最安値</span>であり、2.2 円以外は全て原価という明朗会計にすること
で、限りなく安くし、かつ透明性のある事業モデルにしました。<br />この費用の中で、エネルギーマネジメントや寄付などのサービスも行いますので、追加で費用がかかりません。
                           
                            </div>
                            <div className="feature-img add-padding"><img src={"./img/feature03.png"} alt="feature03"/></div>
                        </div>
                    </div>
        </>
    )
}