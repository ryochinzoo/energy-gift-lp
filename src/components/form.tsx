export default function Form() {
    return (
        <div className="section" >
            <div className="contents">
                <div className="contents-wrapper">
                    <div className="form">
                        <div className="form-note">
                            <div>
                                <div className="form-note-head"><span className="form-note-head-big">ENERGY GIFT</span>のご利用について</div>
                                <div className="form-note-explain"><span className="form-note-explain-green">キュービクルなどの高圧受電設備を持っている法人</span>を対象としております。併せてご確認お願いいたします。</div>
                            </div>
                            <div>
                                <img src="./img/cubicle.png" alt="cubicle" />
                            </div>
                        </div>
                        <div className="form-docs">
                            <div>
                                <div className="form-docs-head"><span className="form-docs-head-big">資料請求</span>について</div>
                                <div className="form-docs-explain">エビデンスなど詳細情報は<span className="form-docs-explain-underline">資料に掲載しております。</span><br />下のお問い合わせフォームから無料請求ください。</div>
                            </div>
                            <div>
                                <img src="./img/docs.png" alt="docs" />
                            </div>
                        </div>
                    </div>
                    <div className="heading-form" id="contact">お問い合わせフォーム</div>
                    <iframe className="form-frame" title=" " width="450" height="500" src="https://select-type.com/e/?id=UcZCuWudbPM&w_flg=1" frameBorder="0"></iframe>
                </div>
            </div>
        </div>
    )
}