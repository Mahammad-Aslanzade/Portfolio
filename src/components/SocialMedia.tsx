import React from 'react'
import socialMediaAccounts from '../assets/socialMediData/mediaData';

const SocialMedia = () => {


    

    const separateCharacter =(param : String , elementId = "letter-box")=>{
        var innerTextFormat = "";

        for ( let i=0 ; i<param.length ; i++){
            
            innerTextFormat += `<span>${param[i]}</span>`

        }


        const particularDiv = document.getElementById(elementId) as HTMLDivElement;

        particularDiv.innerHTML = innerTextFormat;
    }

    window.onload =()=>{
        separateCharacter("Accounts" , "letter-box")
    }



  return (

    <div className="socialMedia">

        <div className="mainBox">
            <div className="letter-box" id='letter-box'></div>



            <div className="accounts-main-box">

                {
                    socialMediaAccounts.sort((a,b)=> a.row - b.row).map((item)=>{
                        return(
                            <div className="accountItem">
                                <a target='blank' href={item.accountLink}>
                                    <img src={item.image} alt="" />
                                </a>
                            </div>
                        )
                    })
                }

            </div>
        </div>


    </div>

  )


}

export default SocialMedia