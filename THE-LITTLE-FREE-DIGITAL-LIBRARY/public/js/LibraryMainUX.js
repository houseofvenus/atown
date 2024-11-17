var mobileNavIsVisible = true;
var isDesktop = false;
var colorWheel = ["red", "yellow", "green", "blue"];
var colorIndex = 0;
var colorChanger = null;

function playFinalBackgroundVideo(){
    clearInterval(colorChanger);
    document.getElementById("animated-background-layer-container").style.backgroundColor = "rgba(255, 255, 255,0)";
    /*document.getElementById("animated-background-layer-container").style.backgroundImage = "url(./media/img/shopping-mall.gif)";
    document.getElementById("animated-background-layer-container").style.backgroundSize = "cover";
    document.getElementById("animated-background-layer-container").style.backgroundRepeat = "no-repeat";
    document.getElementById("animated-background-layer-container").style.backgroundPosition = "center center";*/
}

function loadUI(){
    
    setTimeout(function(){
        document.getElementById("build-your-own-button-container").style.opacity = 1.0;
    }, 750);

    setTimeout(function(){
        document.getElementById("tag-line-container").style.opacity = 1.0;
    }, 125);    //250

    setTimeout(function(){
        document.getElementById("hov-logo-container").style.opacity = 1.0;
    }, 250);    //500

    setTimeout(function(){
        document.getElementById("house-of-venus-title-container").style.opacity = 1.0;
    }, 375);    //750

    setTimeout(function(){
        document.getElementById("background-layer-container").style.opacity = 0.8;
        document.getElementById("main-app-container").style.color = "black";
        /*
        document.getElementById("background-layer-container").style.opacity = 0.4;
        */
    }, 1000);    //1250
}

function goToDoor(){
    setTimeout(function(){
        document.getElementById("build-your-own-button-container").style.opacity = 0;
    }, 650);

    setTimeout(function(){
        document.getElementById("tag-line-container").style.opacity = 0;
    }, 125);    //250

    setTimeout(function(){
        document.getElementById("hov-logo-container").style.opacity = 0;
    }, 250);    //500

    setTimeout(function(){
        document.getElementById("house-of-venus-title-container").style.opacity = 0;
    }, 375);    //750

    setTimeout(function(){
        document.getElementById("background-layer-container").style.opacity = 0;
        document.getElementById("main-app-container").style.color = "black";
        /*
        document.getElementById("background-layer-container").style.opacity = 0.4;
        */
    }, 500);    //1250

    setTimeout(function(){
        window.location.href = "./map";//door
    }, 1000);
}

function checkWindowWidth(){
    let winWidth = window.innerWidth;
    console.log("window width");
    console.log(winWidth);

    if(winWidth<990){
        return true;
    }
    else if(winWidth>1200){
        return false;
    }
    else{
        return true;
    }
}

function toggleMobileView(){
    let isMobile = checkWindowWidth();
    
    console.log(isMobile);

}

document.addEventListener("DOMContentLoaded", function(){
    
    loadUI();

    toggleMobileView();

    document.getElementById("hov-logo-container").addEventListener("click", function(){
        window.location.href = "./";
    });

    document.getElementById("house-of-venus-title-container").addEventListener("click", function(){
        window.open("https://thehouseofven.us/park", "_blank");
    });

    document.getElementById("mobile-menu-toggle-button-container").addEventListener("click", function(){
        console.log("mobile menu toggle");
    });       

    document.getElementById("build-your-own-button-container").addEventListener("click", function(){
        goToDoor();
    });
    
    document.getElementById("instagram-portal-button-container").addEventListener("click", function(){
        window.open("https://www.instagram.com/littlefreedigitallibrary", "_blank");
    });

    window.addEventListener("resize", function(){
        toggleMobileView();
    });
});