import React from 'react'

const Card = () => {
    return (
        <>

            <div className="imagecardourteam w-[400px]">
                <div className="imageourteam "><img className="w-[400px] h-[460px]" src={require('../../images/ourteamimage.png')} alt="" /></div>
                <h5 className="headingourteam  class-for-h4 pt-[20px] pb-[10px]">David Carter</h5>
                <p className="postourteam">CEO & Founder</p>
            </div>
            
        </>
    )
}

export default Card;

