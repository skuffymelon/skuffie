function loadtext()
{
    for (let index = 0; index < document.getElementsByClassName("letter").length; index++) {
        setTimeout(() =>
        {
            var element = document.getElementsByClassName("letter")[index];
            element.style.animation = "animfade 0.68s";
        }, 150 * (index + 1));
    }
}