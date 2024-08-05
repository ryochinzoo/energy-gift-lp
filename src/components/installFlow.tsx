import '../assets/css/styles.scss';

export default function InstallFlow(){
    return(
        <div className='section-smallBottom section-bg-gray' id="flow">
            <div className='contents'>
                <div className='contents-wrapper flow'>
                    <div className='heading-flow'>導入までの流れ</div>
                    <div className='flow-img flow-pc'>
                        <img src={"./img/installment_graph.png"} alt="installment_graph" />
                    </div>
                    <div className='flow-img flow-sp'>
                        <div className='flow-process'>
                            <div className='flow-process-wrapper'>
                                <div className='flow-process-wrapper-num'>01</div>
                                <div className='flow-process-wrapper-title'>必要書類ご提出</div>
                            </div>
                        </div>
                        <div className='flow-process'>
                            <div className='flow-process-wrapper'>
                                <div className='flow-process-wrapper-num'>02</div>
                                <div className='flow-process-wrapper-title'>シミュレーション<br />データ作成</div>
                            </div>
                            <div className='flow-process-wrapper-note'>※作成に2週間程度お時間を頂きます</div>
                        </div>
                        <div className='flow-process'>
                            <div className='flow-process-wrapper'>
                                <div className='flow-process-wrapper-num'>03</div>
                                <div className='flow-process-wrapper-title'>シミュレーション<br />データを基に<br />試算のご提案</div>
                            </div>
                        </div>
                        <div className='flow-process'>
                            <div className='flow-process-wrapper'>
                                <div className='flow-process-wrapper-num'>04</div>
                                <div className='flow-process-wrapper-title'>電力会社の<br />切替手続き</div>
                            </div>
                        </div>
                    </div>
                    <div className='flow-requirement'>
                        試算に必要なもの
                    </div>
                    <div className='flow-explain'>
                    直近1年分の電気料金を基に、省エネ・再エネ導入のシミュレーションを行わせていただきます。<br />
                    <div className='flow-explain-mark'>以下２つの書類をご用意ください。</div>
                    ① 直近1年分の電気料金明細書<br />
                    ② １年分の30分デマンドデータ<br />
                        <div className='flow-note'>
                        ※ 30分間の消費電力の平均値を30分デマンド値といいます。現在お使いの電力会社に請求し、デマンド値を取得してください。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}