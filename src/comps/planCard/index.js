import React from 'react';

function PlanCard({planName, cost, period, ButtonUrl, isSelected, UpgradeClick, activeColor, buttonBg, row1Text, row2Text, row3Text, row4Text, row1 = true, row2 = true, row3 = true, row4 = true}){
    return (
        <div className='cardBody' onClick={isSelected} style={{backgroundColor: activeColor}}> 
            <div className="topBox">
            <div className="planName">{planName}</div>
            <div className="cost">{cost}</div>
            <div className="period">{period}</div>
        </div>
        <div className="bottomBox">
            {
                row1&&(
                <div className="benefits">{row1Text}</div>
                )
            }
            {
                row2&&(
                <div className="benefits">{row2Text}</div>
                )
            }
            {
                row3&&(
                <div className="benefits">{row3Text}</div>
                )
            }
            {
                row4&&(
                <div className="benefits">{row4Text}</div>
                )
            }
        
            <div href={ButtonUrl} onClick={UpgradeClick} className="payButt" style={{backgroundColor:buttonBg}}><div>Upgrade</div></div>
        </div>     
    </div>
    )

}

PlanCard.defaultProps = {
    row1: true,
    row2: true,
    row3: true,
    row4: true,
    row1Text: "1",
    row2Text: "2",
    row3Text: "3",
    row4Text: "4",
    planName: 'Starter',
    cost: '$10',
    period: 'Monthly',
    activeColor: 'rgba(42, 70, 160, 0.382)',
    colChangeFunction: '',
    buttonBg: "#444B95",
    UpgradeClick: ()=>{},
 
}

export default PlanCard;