import '../assets/css/styles.scss';

export default function Diff() {
    return (
        <div className='contents section-bg-light-gray' id="about">
            <div className='contents-wrapper'>
                <div className='diff-wrapper'>
                    <div className='diff-wrapper-left'>
                        <img src={"./img/diff1.png"} alt="diff1" />
                        <img src={"./img/diff2.png"} alt="diff2" />
                    </div>
                    <div className='diff-wrapper-right'>
                        <div className='heading-tag-parts'>
                            ABOUT
                        </div>
                        <div className='heading-diff'>
                        電気の価値が変われば、世界はもっと良くなる
                        </div>
                        <div className='diff-wrapper-right-explain'>
                        1985年の創業以来、設備メンテナンス、設備工事、電気工事、エネルギーマネジメントを中心とした設備事業を展開してきました。<br /><br />
多くの現場を経験し、多くのお客様の課題を解決し、長年、設備やエネルギーに関わってきた私たちだからこそ気づいた事があります。<br />
「電気の価値を変えることが出来れば企業も社会も良くなる」<br />
当たり前のように使っている電気がより、企業にとって最適な料金を自社にあったプランで電気を調達出来たなら。<br />当たり前のように使っている電力量を電力プランナーが削減をサポートしてくれ環境負荷を下げることに繋がるなら。<br />当たり前のように使っている電気がより良い未来に繋がるなら。<br />私たちだからこそ出来る事がある。<br />
私たちは期待を超えるサービスを創り続け、電気の価値が変われば世界がもっと良くなると信じています。
                        </div>
                        <div className='diff-wrapper-right-ceo'>
                            <img src={"./img/ceo.png"} alt="ceo" />
                            <div className='ceo-title'>
                            セーバー技研株式会社 <br />
                            代表取締役　中村拓郎
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}