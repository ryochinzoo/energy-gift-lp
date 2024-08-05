import '../assets/css/styles.scss';
import Feature from "./feature";


export default function Service() {
    return (
        <div className="section-service" id="service">
            <div className="contents">
                <div className="contents-wrapper">
                    <div className="heading-tag-parts center">SERVICE</div>
                    <div className="heading">ENERGY GIFT<span className='heading-sp-break'>のサービス</span></div>
                    <div className="service-wrapper">
                        <div className='service-graph-img'><img src={"./img/service_graph.png"} alt="graph" /></div>
                        <div className='service-right'>
                            <ul className="service-list">
                                <li>
                                    <div className="title-wrapper">
                                        <div className="num"><div>1</div></div>
                                        <div className="title">電力状況の見直し（診断）</div>
                                    </div>
                                    <div className="description">
                                    プランナーと電力使用状況を見直すことで 電気代が下がってコストDown
                                    <div className="description-small">※キュービクルなどの高圧受電設備をお持ちの法人様が対象です</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="title-wrapper">
                                        <div className="num"><div>2</div></div>
                                        <div className="title">NPOに寄付する</div>
                                    </div>
                                    <div className="description">
                                    電気使用量 1kWhあたり0.05円をNPO団体へ寄付
                                    <div className="description-note">
                                        寄付先について<br />
                                        寄付先は主に5つ決まっており、平均的に寄付分配します。災害時支援・地域支援などが必要なタイミングには、寄付先が１つ追加されます。
                                        <div className="description-note-link"><img src="./img/link_icon.png" alt="link" /><a href="#npo">寄付先のご紹介</a></div>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="title-wrapper">
                                        <div className="num"><div>3</div></div>
                                        <div className="title">専門家サービス</div>
                                    </div>
                                    <div className="description">
                                    プランナーと一緒に電力量削減や運用方法を見直し、電気料金削減の計画を立案します。
                                    </div>
                                </li>
                                <li>
                                    <div className="title-wrapper">
                                        <div className="num"><div>4</div></div>
                                        <div className="title">レポート</div>
                                    </div>
                                    <div className="description">
                                        毎月・年ごとにレポートをお送りします。<br />
                                        寄付相当額も記載いたします。
                                    </div>
                                </li>
                                <li>
                                    <div className="title-wrapper">
                                        <div className="num"><div>5</div></div>
                                        <div className="title">パートナー交流会</div>
                                    </div>
                                    <div className="description">
                                    年1回交流会の開催を予定しております。
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Feature />
                </div>
            </div>
        </div>
    )
}