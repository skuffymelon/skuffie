var ambience1 = new Audio(); ambience1.src = "/data/soundz/thunderfalls.ogg";

ambience1.volume = 0.4; ambience1.loop = true;

ambience1.play();

var warm = new Audio(); warm.src = "/data/soundz/warmpop.ogg"; warm.loop = true;

warm.play(); warm.volume = 0;

var xmas = new Audio(); xmas.volume = 0.76; xmas.src = "/data/soundz/xmasevet.mp3";

var globalscroll = 0;

function animsequence1()
{
    var letters = document.getElementsByClassName("letter");    
    
    xmas.play();

    for (let i = 0; i < letters.length; i++)
    {
        setTimeout(() => {
            letters[i].style = "opacity: 1; transform:rotate(" + (360/letters.length) * i + "deg);";
            letters[i].onmouseenter = "onhoverplay();";
        }, i * (2000/letters.length));
    }
    setTimeout(() => {
        document.querySelector(".intro").style.backgroundColor = "rgb(83, 12, 83)"; //
        document.querySelector(".intro .rotintro .imgholder img").style = "opacity: 1;";  
    }, 2000);

    setTimeout(() => {
        document.querySelector(".intro").style.backgroundColor = "rgb(166, 108, 22)"; //linear-gradient(rgb(51, 2, 50), rgb(112, 79, 39))
    }, 4250);

    setTimeout(() => {
        document.querySelector(".intro").style.backgroundColor = "rgb(215, 161, 81)"; //linear-gradient(rgb(51, 2, 50), rgb(112, 79, 39))
    }, 6000);
    setTimeout(() => {
        document.querySelector(".intro").style.backgroundColor = "rgb(158, 18, 44)"; //linear-gradient(rgb(51, 2, 50), rgb(112, 79, 39))
    }, 6337);
    setTimeout(() => {
        document.querySelector(".intro").style.backgroundColor = "rgb(225, 100, 202)"; //linear-gradient(rgb(51, 2, 50), rgb(112, 79, 39))
    }, 6750);

    setTimeout(() => {
        document.querySelector(".intro").style.backgroundColor = "rgb(171, 13, 142)"; //linear-gradient(rgb(51, 2, 50), rgb(112, 79, 39))
    }, 8250);

    setTimeout(() => {
        document.querySelector(".intro").style.backgroundColor = "rgb(123, 13, 103)"; //linear-gradient(rgb(51, 2, 50), rgb(112, 79, 39))
    }, 8750);

     setTimeout(() => {
        document.querySelector(".intro").style.backgroundColor = "rgb(66, 5, 55)"; //linear-gradient(rgb(51, 2, 50), rgb(112, 79, 39))
        document.querySelector(".dropdown").style.opacity = "1";
    }, 10000);


    beatanim(2000,500);
    beatanim(3250,500);
    beatanim(4250,400);
    beatanim(4750,500);
    beatanim(6000,250);
    beatanim(6337,250);
    beatanim(6750,250);
    beatanim(7250,500);
    beatanim(8250,400);
    beatanim(8750,1150);
    for (let i = 0; i < 17; i++) 
    {
        if (i != 4 || i != 6)
        {
            beatanim(10000 + (1000 * i),500);
        }
    }
}

function beatanim(timedelay, fast)
{
    var letters = document.getElementsByClassName("letter");

    var logo = document.querySelector(".intro .rotintro .imgholder");

    setTimeout(() => {
        
        for (let i = 0; i < letters.length; i++) 
        {
            letters[i].style.animation = "beathit " + fast/1000 + "s";
        }

        logo.style.animation = "beathitimg " + fast/1000 + "s";

        setTimeout(() => {
            for (let i = 0; i < letters.length; i++) 
            {
                letters[i].style.animation = "none";
            }
            logo.style.animation = "none";
        }, fast);
    }, timedelay);
}

function onhoverplay()
{
    var aud = new Audio(); aud.src = "/data/soundz/select.ogg"; aud.volume = 0.3; aud.play();
}

window.addEventListener("scroll", () => {
    var st = window.scrollY,
        dh = document.body.offsetHeight,
        wh = window.innerHeight;
    
    globalscroll = st / (dh - wh);
    
    imfade();
    bhide();
    favefade();
    warmvol();
});

function imfade() // intro music fade
{
    xmas.volume = Math.max(0.76 - (globalscroll * 2),0 );
}

function bhide()
{
    document.querySelector(".dropdown").style.opacity = `${Math.max(1 - (globalscroll * 3),0)}`;
}

function favefade()
{
    document.querySelector(".obsession").style.opacity = `${Math.max(Math.min((globalscroll * 4.5) - 1.5,1),0) + Math.max(Math.min(4 - (globalscroll * 7),0),-1)}`
}

var obhover = false;

function obenter()
{
    obhover = true;
    document.querySelector(".obsessionsection .gradientpage").style.opacity = "1";
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            warm.volume += 0.05;
        }, i*33);
    }
    
    setTimeout(() => {
        if (obhover)
        {
            document.querySelector(".obsessionsection .artistshow p").style.opacity = "1";
        }
    }, 2000);
}

function warmvol()
{
    warm.volume = (Math.max(Math.min((globalscroll * 3) - 1,1),0) + Math.max(Math.min(4 - (globalscroll * 7),0),-1)) / 4;
}

function obleave()
{
    if (obhover)
        {
            document.querySelector(".obsessionsection .artistshow p").style.opacity = "0";
        }
    obhover = false;

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            warm.volume -= 0.05;
        }, i*33);
    }

    document.querySelector(".obsessionsection .gradientpage").style.opacity = "0";
}
var tempvol = xmas.volume;
window.onblur = function() {warm.pause(); tempvol = xmas.volume; xmas.volume = 0;}
window.onfocus = function() {warm.play(); xmas.volume = tempvol;}