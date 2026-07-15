function loadtext()
{
    for (let index = 0; index < document.getElementsByClassName("letter").length; index++) {
        setTimeout(() =>
        {
            document.getElementsByClassName("letter")[index].style.animation = "animfade 0.68s";
        }, 150 * (index + 1));
    }
    setTimeout(() => 
    {
        for (let index = 0; index < document.getElementsByClassName("letter").length; index++) {
            document.getElementsByClassName("letter")[index].style.animation = "";
        }
        lettersparkle();
    }, 1730);
}

var globalstring = "";

var hoverbool = true;

function lettersparkle()
{
    var elements = document.getElementsByClassName("letter");

    var length = 200 * (Math.random() * 3);

    var randompick = Math.floor((Math.random() * elements.length));

    setTimeout(() => {
        elements[randompick].style = "animation: animfade 0.5s;";
    }, length);

    setTimeout(() => {
        if (hoverbool)
            lettersparkle(); 
        elements[randompick].style = "";
    }, length + 500);
}

function clickletter(element)
{
    globalstring += element.innerHTML;

    element.style = "text-shadow: 4px 4px 4px purple;";

    var sound = new Audio();

    if (globalstring == "suffiks" || globalstring == "sufiks")
    {
        sound.src = "data/soundz/reveal.ogg"
        sound.play();
        document.querySelector(".skuffieabout h1").innerHTML = "haii im emma 🏳️‍⚧️ :3";
        document.title = "skuffie/emma"
        document.querySelector(".skuffieabout p").innerHTML = "tranz/pan</br>she/her x3";
        document.querySelector(".skuffieabout p").style = "display: normal;";
    }
    else if (globalstring == "skuffie")
    {
        sound.src = "data/soundz/reveal.ogg"
        sound.play();
        if (Math.round(Math.random() * 4) == 1)
        {
            setTimeout(() => {
                alert("s u f f i k s");
            }, 100);
        }
    }
    else if (globalstring == "suffe") // too bad theres no letter 'r' in my username :3c
    {
        window.open("enough-of_your-shit", "_self");
    }
    else
    {
        sound.src = "data/soundz/letterpress.ogg"
        sound.play();
    }

    setTimeout(() => {
        globalstring = "";
        element.style = "text-shadow: none;";
    }, 7000);
}