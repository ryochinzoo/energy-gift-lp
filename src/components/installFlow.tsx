import '../assets/css/styles.scss';

export default function InstallFlow(){
    return(
        <div className='section-bg-gray'>
            <div className='contents'>
                <div className='contents-wrapper'>
                    <div className='heading'>導入までの流れ</div>
                    <div className='flow-img'>
                        <img src={"./img/installment_graph.png"} alt="installment_graph" />
                    </div>
                    <div className='flow-requirement'>
                        試算に必要なもの
                    </div>
                    <div className='flow-explain'>
                    直近1年分の電力料金を基に、省エネ・再エネ導入のシミュレーションを行わせていただきます。<br />
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