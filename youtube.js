

window.onload=()=>{

    //=====ProfileSection=====//

    for(let i=0; i<3 ;i++){
        const tmpEndSectionBtn=document.createElement("button")  
        tmpEndSectionBtn.id=`endSectionBtn${i}`
        tmpEndSectionBtn.className="headMenuBtnClass"
        document.getElementById("end").appendChild(tmpEndSectionBtn)

        let tmpEndSectionBtnTag=document.getElementById(`endSectionBtn${i}`)
        const tmpEndSectionBtnImg=document.createElement("img")  
        tmpEndSectionBtnImg.className="headMenuBtnImgClass"
        tmpEndSectionBtnImg.setAttribute('src',`youtubeImg/profileSectionBtnIcon${i}.png`)
        tmpEndSectionBtnTag.appendChild(tmpEndSectionBtnImg)
    }
    
    //=====SideMenu=====//

    const sideMenuBtnTxtArr=["홈","shorts","구독","보관함"]

    for(let i=0; i<4 ;i++){
        const tmpSideMenuBtn=document.createElement("button")  
        tmpSideMenuBtn.id=`sideMenuBtn${i}`
        tmpSideMenuBtn.className="sideMenuBtnClass"
        document.getElementById("sideMenu").appendChild(tmpSideMenuBtn)

        let tmpSideMenuBtnTag=document.getElementById(`sideMenuBtn${i}`)
        const tmpSideMenuBtnImg=document.createElement("img")  
        tmpSideMenuBtnImg.className="sideMenuBtnImg"
        tmpSideMenuBtnImg.setAttribute('src',`youtubeImg/sideMenuIcon${i}.png`)
        tmpSideMenuBtnTag.appendChild(tmpSideMenuBtnImg)

        const tmpSideMenuBtnTxt=document.createElement("p")  
        tmpSideMenuBtnTxt.className="sideMenuBtnTxt"
        tmpSideMenuBtnTxt.innerHTML=sideMenuBtnTxtArr[i]
        tmpSideMenuBtnTag.appendChild(tmpSideMenuBtnTxt)
    }

    for(let i=0; i<4 ;i++){
        const tmpOpenSideMenuBtn=document.createElement("button")  
        tmpOpenSideMenuBtn.id=`openSideMenuBtn${i}`
        tmpOpenSideMenuBtn.className="openSideMenuBtnClass"
        document.getElementById("openSideMenu").appendChild(tmpOpenSideMenuBtn)

        let tmpOpenSideMenuBtnTag=document.getElementById(`openSideMenuBtn${i}`)
        const tmpOpenSideMenuBtnImg=document.createElement("img")  
        tmpOpenSideMenuBtnImg.className="openSideMenuBtnImg"
        tmpOpenSideMenuBtnImg.setAttribute('src',`youtubeImg/sideMenuIcon${i}.png`)
        tmpOpenSideMenuBtnTag.appendChild(tmpOpenSideMenuBtnImg)

        const tmpOpenSideMenuBtnTxt=document.createElement("p")  
        tmpOpenSideMenuBtnTxt.className="openSideMenuBtnTxt"
        tmpOpenSideMenuBtnTxt.innerHTML=sideMenuBtnTxtArr[i]
        tmpOpenSideMenuBtnTag.appendChild(tmpOpenSideMenuBtnTxt)
    }

    //=====Content=====//

    for(let i=0; i<50 ;i++){
        const tmpContent=document.createElement("section")  
        tmpContent.id=`content${i}`
        tmpContent.className="contentClass"
        // tmpContent.setAttribute('name',`contentId(`+i+`)`)
        document.getElementById("contents").appendChild(tmpContent)

        let tmpContentTag=document.getElementById(`content${i}`)

        const tmpContentImg=document.createElement("img")  
        tmpContentImg.className="contentImg"
        tmpContentImg.setAttribute('src',`youtubeImg/contentImg${0}.png`)
        tmpContentTag.appendChild(tmpContentImg)

        const tmpContentInformation=document.createElement("div")  
        tmpContentInformation.id=`contentInformation${i}`
        tmpContentInformation.className="contentInformationClass"
        tmpContentTag.appendChild(tmpContentInformation)

        let tmpContentInformationTag=document.getElementById(`contentInformation${i}`)

        const tmpContentInformationProfileImg=document.createElement("img")  
        tmpContentInformationProfileImg.className="contentInformationProfileImg"
        tmpContentInformationProfileImg.setAttribute('src',`youtubeImg/contentProfileImg${0}.png`)
        tmpContentInformationTag.appendChild(tmpContentInformationProfileImg)

        const tmpContentInformationTxt=document.createElement("article") 
        tmpContentInformationTxt.id=`contentInformationTxt${i}`
        tmpContentInformationTxt.className="contentInformationTxtClass"
        tmpContentInformationTag.appendChild(tmpContentInformationTxt)

        let tmpContentInformationTxtTag=document.getElementById(`contentInformationTxt${i}`)
     
        const tmpContentInformationTitle=document.createElement("h1")  
        tmpContentInformationTitle.innerHTML="발드컵 Grand Final l LOUD(BR) vs OpTic Gaming(NA)"
        tmpContentInformationTitle.className="contentTitle"
        tmpContentInformationTxtTag.appendChild(tmpContentInformationTitle)

        const tmpChannelTitle=document.createElement("p")  
        tmpChannelTitle.innerHTML="우왁굳의 게임방송"
        tmpChannelTitle.className="ChannelTitle"
        tmpContentInformationTxtTag.appendChild(tmpChannelTitle)

        const tmpContentInformationDetail=document.createElement("div")  
        tmpContentInformationDetail.id=`contentInformationDetail${i}`
        tmpContentInformationDetail.className="contentInformationDetailClass"
        tmpContentInformationTxtTag.appendChild(tmpContentInformationDetail)

        let tmpContentInformationDetailTag=document.getElementById(`contentInformationDetail${i}`)

        const tmpContentView=document.createElement("p")  
        tmpContentView.innerHTML="조회수 40만회"
        tmpContentInformationDetailTag.appendChild(tmpContentView)

        const tmpContentUploadDate=document.createElement("p")  
        tmpContentUploadDate.innerHTML="1년전"
        tmpContentInformationDetailTag.appendChild(tmpContentUploadDate)
    }
}

//sidemenuEvent

const headmenu_btn_event=(e)=>{

}

const sidemenu_btn_event=(e)=>{

}

const content_event=(e)=>{
}