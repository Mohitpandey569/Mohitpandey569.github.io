// display sections on clicking on the link
function displaySection(link,section) {
    // link and the section to show
    let lnk = document.querySelector(`#${link}`);
    let sec = document.querySelector(`#${section}`);
    
    // when you click on one of the links
    lnk.onclick = (event) => {
        
        // mobile js
        const mq = window.matchMedia("(max-width: 500px)");
        if(mq.matches) {
            // show the go-back button when a link is clicked in responsive mode . 
            let goBackButton = document.querySelector("#go-back-button");
            goBackButton.style.display = "block";

            // when the go-back button is clicked , it disappears with the main and the menu should reapear .
            goBackButton.addEventListener("click",() => {
                // hide the mainSection
                sec.style.display = "none";       
                let menu = document.querySelector("#menu");
                menu.style.display = "flex";
                goBackButton.style.display = "none";
                lnk.classList.remove("active");
         
            });
            lnk.parentElement.style.display = "none"; 
            if(section == "skills-section") {
                let div = document.querySelector(`#${section} > article`);
                div.style.display = "flex";
                div.style.flexDirection = "column";
                let subElement = document.querySelectorAll(`#${section} li`);
                for (se of subElement){
                    se.style.fontFamily = "roboto mono";
                }
                
            } else if (section == "projects-section") {
                let s = document.querySelector("#projects-wrapper");

                s.style.display = "flex";
                s.style.flexDirection = "column";

            } else if (section == "links-section") {
                let linkWrapper = document.querySelector(`#${section} div`);
                linkWrapper.style.display = "flex";
                linkWrapper.style.flexDirection = "column";

            }
            sec.classList.remove("section");
            sec.style.display = "block";
            sec.style.animationName = "section-mobile";
            sec.style.animationDuration = "1.2s";
        } else {
            
            // remove the section from sight
            for(elem of sec.parentElement.children){
                elem.style.display = "none";
            }
            // remove the about-me-intro
            let aboutMeIntroSection = document.querySelector("#about-me-intro-section");
            aboutMeIntroSection.style.display = "None";

            sec.classList.remove("section");
            sec.style.display = "block";
            sec.style.animationName = "section";
            sec.style.animationDuration = "0.6s";
            sec.style.animationFillMode = "forwards";
            

            let menu = document.querySelector("#menu");
            menu.style.marginTop = "0px";
            menu.style.display = "flex";
            menu.style.position = "fixed";
            menu.style.top = "1vw"; 
            menu.style.transition = "All 1s";
            menu.style.marginTop="0px";
            menu.style.right= "15vw";

            event.preventDefault() ;
            lnk.classList.add("active");
        }
        
        let jiran = lnk.parentElement.children;
        for(j of jiran){
            j.classList.remove("active");
        }

            event.preventDefault() ; 
            lnk.classList.add("active");

    };
}

// dark and light mode 
document.documentElement.style.setProperty('--background-color', '#111216');
function switchDarkLightMode() {
    let icon = document.querySelector("#switch-container img");
   
    icon.onclick = () => {
    let darkColor = "#fafafa"; 
    let darkTextColor = "#111";
    let darkTextTitleColor = "#111";
    let darkTextHoverColor = "#000";
    let darkAccentColor = "#ccc";
    icon.onmouseover = () => {
        console.log("Ha Ha Bring the Darkness 😈");
        icon.setAttribute("src","./assets/images/sun-filled.svg");
    }
    icon.onmouseout = () => {
        icon.setAttribute("src","./assets/images/sun.svg");
    }
    let color = getComputedStyle(document.documentElement).getPropertyValue("--background-color");
    if(color == "#111216"){
        icon.setAttribute("src","./assets/images/sun.svg");
        document.documentElement.style.setProperty('--background-color',darkColor);
        document.documentElement.style.setProperty('--text-color',darkTextColor);
        document.documentElement.style.setProperty('--text-title-color',darkTextTitleColor);
        document.documentElement.style.setProperty('--text-hover-color',darkTextHoverColor);
        document.documentElement.style.setProperty('--light-accent-color',darkAccentColor);
        icon.onmouseover = () => {
                icon.setAttribute("src","./assets/images/moon-full.svg");
        }
        icon.onmouseout = () => {
                icon.setAttribute("src","./assets/images/moon.svg");
        }
    
    } else {
        icon.setAttribute("src","./assets/images/moon.svg");
        document.documentElement.style.setProperty('--background-color', '#111216');
        document.documentElement.style.setProperty('--text-color', '#999');
        document.documentElement.style.setProperty('--text-hover-color',"#ddd");
        document.documentElement.style.setProperty('--text-title-color',"#eee");
        document.documentElement.style.setProperty('--light-accent-color',"#222");

        icon.onmouseover = () => {
            console.log("Please Don't Blind Me 😥");
            icon.setAttribute("src","./assets/images/sun-filled.svg");
        }
        icon.onmouseout = () => {
            icon.setAttribute("src","./assets/images/sun.svg");
        }
    }
    }
}
  


switchDarkLightMode();
displaySection("about-me","about-me-section");
displaySection("skills","skills-section");
displaySection("projects","projects-section");
displaySection("experience","experience-section");
displaySection("links","links-section");
