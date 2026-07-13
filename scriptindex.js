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
    }, 1730);
}

var globalstring = "";

function clickletter(element)
{
    globalstring += element.innerHTML;

    element.style = "text-shadow: 4px 4px 4px purple;";

    if (globalstring == "suffiks" || globalstring == "sufiks")
    {
        document.querySelector(".skuffieabout h1").innerHTML = "haii im emma 🏳️‍⚧️ :3";
        document.title = "skuffie/emma"
        document.querySelector(".skuffieabout p").innerHTML = "tranz/pan</br>she/her x3";
    }

    setTimeout(() => {
        globalstring = "";
        element.style = "text-shadow: none;";
    }, 5000);
}