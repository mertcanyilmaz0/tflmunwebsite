let degisken2 = true
document.querySelector("#readMoreIki").addEventListener("click", function(){
    var agentText2 = document.querySelector("#cardIkiAgentText");
    var cardFooter2 = document.querySelector("#cardFooterIki");
    var carp2 = document.querySelector("#carpIki");
    var card2 = document.querySelector("#cardIki");
    var readMore2 = document.querySelector("#readMoreIki");
    if(degisken2 == true){
        card2.style.height = "20rem"
        cardFooter2.style
        carp2.style.display = "inline-block"
        agentText2.style.visibility = "visible"
        agentText2.style.opacity = "1"
        agentText2.style.display = "inline-block"
        cardFooter2.style.borderBottomLeftRadius = "0rem"
        cardFooter2.style.borderBottomRightRadius = "0rem"
        cardFooter2.style.boxShadow = ""
        cardFooter2.style.border = "solid 0.5rem #320000"
        readMore2.style.display = "none"
        card2.style.backgroundPosition = "top"
        degisken2 = false
    } else {
        cardFooter2.style.borderRight = ""
        cardFooter2.style.borderLeft = ""
        cardFooter2.style.borderBottom = ""
        card2.style.height = ""
        carp2.style.display = "none"
        agentText2.style.visibility = "hidden"
        agentText2.style.opacity = "0"
        cardFooter2.style.borderBottomLeftRadius = "0.75rem"
        cardFooter2.style.borderBottomRightRadius = "0.75rem"
        cardFooter2.style.boxShadow = "0 4px 6px #320000"
        cardFooter2.style.border = "none"
        degisken2 = true
    }
});
document.querySelector("#carpIki").addEventListener("click", function(){
    var agentText2 = document.querySelector("#cardIkiAgentText");
    var cardFooter2 = document.querySelector("#cardFooterIki");
    var carp2 = document.querySelector("#carpIki");
    var card2 = document.querySelector("#cardIki");
    var readMore2 = document.querySelector("#readMoreIki");
    if (degisken2 == false){
        readMore2.style.display = "inline-block"
        cardFooter2.style.borderRight = ""
        cardFooter2.style.borderLeft = ""
        cardFooter2.style.borderBottom = ""
        card2.style.height = ""
        carp2.style.display = "none"
        agentText2.style.visibility = "hidden"
        agentText2.style.opacity = "0"
        agentText2.style.display = "none"
        cardFooter2.style.borderBottomLeftRadius = "0.75rem"
        cardFooter2.style.borderBottomRightRadius = "0.75rem"
        cardFooter2.style.boxShadow = "0 4px 6px #320000"
        cardFooter2.style.border = "none"
        card2.style.backgroundPosition = "center"
        degisken2 = true
    }
});
let degisken1 = true
document.querySelector("#readMoreBir").addEventListener("click", function(){
    var agentText1 = document.querySelector("#cardBirAgentText");
    var cardFooter1 = document.querySelector("#cardFooterBir");
    var carp1 = document.querySelector("#carpBir");
    var card1 = document.querySelector("#cardBir");
    var readMore1 = document.querySelector("#readMoreBir");
    if(degisken1 == true){
        agentText1.style.display = "inline-block"
        card1.style.height = "20rem"
        cardFooter1.style
        carp1.style.display = "inline-block"
        agentText1.style.visibility = "visible"
        agentText1.style.opacity = "1"
        cardFooter1.style.borderBottomLeftRadius = "0rem"
        cardFooter1.style.borderBottomRightRadius = "0rem"
        cardFooter1.style.boxShadow = ""
        cardFooter1.style.border = "solid 0.5rem #320000"
        readMore1.style.display = "none"
        card1.style.backgroundPosition = "top"
        degisken1 = false
    } else {
        cardFooter1.style.borderRight = ""
        cardFooter1.style.borderLeft = ""
        cardFooter1.style.borderBottom = ""
        card1.style.height = ""
        carp1.style.display = "none"
        agentText1.style.visibility = "hidden"
        agentText1.style.opacity = "0"
        cardFooter1.style.borderBottomLeftRadius = "0.75rem"
        cardFooter1.style.borderBottomRightRadius = "0.75rem"
        cardFooter1.style.boxShadow = "0 4px 6px #320000"
        cardFooter1.style.border = "none"
        degisken1 = true
    }
});
document.querySelector("#carpBir").addEventListener("click",function(){
    var agentText1 = document.querySelector("#cardBirAgentText");
    var cardFooter1 = document.querySelector("#cardFooterBir");
    var carp1 = document.querySelector("#carpBir");
    var card1 = document.querySelector("#cardBir");
    var readMore1 = document.querySelector("#readMoreBir");
    if (degisken1 == false){
        agentText1.style.display = "none"
        readMore1.style.display = "inline-block"
        cardFooter1.style.borderRight = ""
        cardFooter1.style.borderLeft = ""
        cardFooter1.style.borderBottom = ""
        card1.style.height = ""
        carp1.style.display = "none"
        agentText1.style.visibility = "hidden"
        agentText1.style.opacity = "0"
        cardFooter1.style.borderBottomLeftRadius = "0.75rem"
        cardFooter1.style.borderBottomRightRadius = "0.75rem"
        cardFooter1.style.boxShadow = "0 4px 6px #320000"
        cardFooter1.style.border = "none"
        card1.style.backgroundPosition = "center"
        degisken1 = true
    }
});
let degisken3 = true
document.querySelector("#readMoreUc").addEventListener("click", function(){
    var agentText3 = document.querySelector("#cardUcAgentText");
    var cardFooter3 = document.querySelector("#cardFooterUc");
    var carp3 = document.querySelector("#carpUc");
    var card3 = document.querySelector("#cardUc");
    var readMore3 = document.querySelector("#readMoreUc");
    if(degisken3 == true){
        agentText3.style.display = "inline-block"
        card3.style.height = "20rem"
        cardFooter3.style
        carp3.style.display = "inline-block"
        agentText3.style.visibility = "visible"
        agentText3.style.opacity = "1"
        cardFooter3.style.borderBottomLeftRadius = "0rem"
        cardFooter3.style.borderBottomRightRadius = "0rem"
        cardFooter3.style.boxShadow = ""
        cardFooter3.style.border = "solid 0.5rem #320000"
        readMore3.style.display = "none"
        card3.style.backgroundPosition = "top"
        degisken3 = false
    } else {
        cardFooter3.style.borderRight = ""
        cardFooter3.style.borderLeft = ""
        cardFooter3.style.borderBottom = ""
        card3.style.height = ""
        carp3.style.display = "none"
        agentText3.style.visibility = "hidden"
        agentText3.style.opacity = "0"
        cardFooter3.style.borderBottomLeftRadius = "0.75rem"
        cardFooter3.style.borderBottomRightRadius = "0.75rem"
        cardFooter3.style.boxShadow = "0 4px 6px #320000"
        cardFooter3.style.border = "none"
        degisken3 = true
    }
});
document.querySelector("#carpUc").addEventListener("click",function(){
    var agentText3 = document.querySelector("#cardUcAgentText");
    var cardFooter3 = document.querySelector("#cardFooterUc");
    var carp3 = document.querySelector("#carpUc");
    var card3 = document.querySelector("#cardUc");
    var readMore3 = document.querySelector("#readMoreUc");    
    if (degisken3 == false){
        agentText3.style.display = "none"
        readMore3.style.display = "inline-block"
        cardFooter3.style.borderRight = ""
        cardFooter3.style.borderLeft = ""
        cardFooter3.style.borderBottom = ""
        card3.style.height = ""
        carp3.style.display = "none"
        agentText3.style.visibility = "hidden"
        agentText3.style.opacity = "0"
        cardFooter3.style.borderBottomLeftRadius = "0.75rem"
        cardFooter3.style.borderBottomRightRadius = "0.75rem"
        cardFooter3.style.boxShadow = "0 4px 6px #320000"
        cardFooter3.style.border = "none"
        card3.style.backgroundPosition = "center"
        degisken3 = true
    }
})
let degisken4 = true
document.querySelector("#readMoreDort").addEventListener("click", function(){
    var agentText4 = document.querySelector("#cardDortAgentText");
    var cardFooter4 = document.querySelector("#cardFooterDort");
    var carp4 = document.querySelector("#carpDort");
    var card4 = document.querySelector("#cardDort");
    var readMore4 = document.querySelector("#readMoreDort");
    if(degisken4 == true){
        agentText4.style.display = "inline-block"
        card4.style.height = "20rem"
        cardFooter4.style.display = "inline-masonary"
        carp4.style.display = "inline-block"
        agentText4.style.visibility = "visible"
        agentText4.style.opacity = "1"
        cardFooter4.style.borderBottomLeftRadius = "0rem"
        cardFooter4.style.borderBottomRightRadius = "0rem"
        cardFooter4.style.boxShadow = ""
        cardFooter4.style.border = "solid 0.5rem #320000"
        readMore4.style.display = "none"
        card4.style.backgroundPosition = "top"
        degisken4 = false
    } else {
        cardFooter4.style.borderRight = ""
        cardFooter4.style.borderLeft = ""
        cardFooter4.style.borderBottom = ""
        card4.style.height = ""
        carp4.style.display = "none"
        agentText4.style.visibility = "hidden"
        agentText4.style.opacity = "0"
        cardFooter4.style.borderBottomLeftRadius = "0.75rem"
        cardFooter4.style.borderBottomRightRadius = "0.75rem"
        cardFooter4.style.boxShadow = "0 4px 6px #320000"
        cardFooter4.style.border = "none"
        degisken4 = true
    }
});
document.querySelector("#carpDort").addEventListener("click", function(){
    var agentText4 = document.querySelector("#cardDortAgentText");
    var cardFooter4 = document.querySelector("#cardFooterDort");
    var carp4 = document.querySelector("#carpDort");
    var card4 = document.querySelector("#cardDort");
    var readMore4 = document.querySelector("#readMoreDort");
    if (degisken4 == false){
        agentText4.style.display = "none"
        readMore4.style.display = "inline-block"
        cardFooter4.style.borderRight = ""
        cardFooter4.style.borderLeft = ""
        cardFooter4.style.borderBottom = ""
        card4.style.height = ""
        carp4.style.display = "none"
        agentText4.style.visibility = "hidden"
        agentText4.style.opacity = "0"
        cardFooter4.style.borderBottomLeftRadius = "0.75rem"
        cardFooter4.style.borderBottomRightRadius = "0.75rem"
        cardFooter4.style.boxShadow = "0 4px 6px #320000"
        cardFooter4.style.border = "none"
        card4.style.backgroundPosition = "center"
        degisken4 = true
    }
})
let degisken5 = true
document.querySelector("#readMoreBes").addEventListener("click", function(){
    var agentText5 = document.querySelector("#cardBesAgentText");
    var cardFooter5 = document.querySelector("#cardFooterBes");
    var carp5 = document.querySelector("#carpBes");
    var card5 = document.querySelector("#cardBes");
    var readMore5 = document.querySelector("#readMoreBes");
    if(degisken5 == true){
        agentText5.style.display = "inline-block"
        card5.style.height = "20rem"
        cardFooter5.style
        carp5.style.display = "inline-block"
        agentText5.style.visibility = "visible"
        agentText5.style.opacity = "1"
        cardFooter5.style.borderBottomLeftRadius = "0rem"
        cardFooter5.style.borderBottomRightRadius = "0rem"
        cardFooter5.style.boxShadow = ""
        cardFooter5.style.border = "solid 0.5rem #320000"
        readMore5.style.display = "none"
        card5.style.backgroundPosition = "top"
        degisken5 = false
    } else {
        cardFooter5.style.borderRight = ""
        cardFooter5.style.borderLeft = ""
        cardFooter5.style.borderBottom = ""
        card5.style.height = ""
        carp5.style.display = "none"
        agentText5.style.visibility = "hidden"
        agentText5.style.opacity = "0"
        cardFooter5.style.borderBottomLeftRadius = "0.75rem"
        cardFooter5.style.borderBottomRightRadius = "0.75rem"
        cardFooter5.style.boxShadow = "0 4px 6px #320000"
        cardFooter5.style.border = "none"
        degisken5 = true
    }
})
document.querySelector("#carpBes").addEventListener("click", function(){
    var agentText5 = document.querySelector("#cardBesAgentText");
    var cardFooter5 = document.querySelector("#cardFooterBes");
    var carp5 = document.querySelector("#carpBes");
    var card5 = document.querySelector("#cardBes");
    var readMore5 = document.querySelector("#readMoreBes");
    if (degisken5 == false){
        agentText5.style.display = "none"
        readMore5.style.display = "inline-block"
        cardFooter5.style.borderRight = ""
        cardFooter5.style.borderLeft = ""
        cardFooter5.style.borderBottom = ""
        card5.style.height = ""
        carp5.style.display = "none"
        agentText5.style.visibility = "hidden"
        agentText5.style.opacity = "0"
        cardFooter5.style.borderBottomLeftRadius = "0.75rem"
        cardFooter5.style.borderBottomRightRadius = "0.75rem"
        cardFooter5.style.boxShadow = "0 4px 6px #320000"
        cardFooter5.style.border = "none"
        card5.style.backgroundPosition = "center"
        degisken5 = true
    }
})