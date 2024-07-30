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
                        わくわくすることしかない！すべての人が未来に希望を持てる社会を実現する
                        </div>
                        <div className='diff-wrapper-right-explain'>
                        1985年の創業以来、設備メンテナンス、設備工事、電気工事を中心とした設備事業を展開しています。
    <br /><br />
	設備事業は社会インフラの要であり今後も欠かすことの出来ない使命を担っています。
	<br />
	例えば、空調設備は今や現代にとって必須の設備となっています。
	<br />
	安心で快適な空間の提供をするためのお手伝いをすることも当社の大事な使命のひとつとなります。一方で、人口減少の進む日本にとって設備工事事業の在り方も大きく変わってきます。<br />
	当社は、関わるお客様に寄り添い期待を超えていく、期待超越企業です。
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