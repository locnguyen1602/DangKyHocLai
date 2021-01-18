
function MouseSeen(elm)
{
    $("." + elm + "-content").addClass("show");
}
function MouseOut(elm)
{
    $("." + elm + "-content").removeClass("show");
}
$('[elm="vn"]').mouseenter(function()
{
    MouseSeen($(this).attr("class"));
});
$('[elm="vn"]').mouseleave(function () {
    MouseOut($(this).attr("class"));
});
window.onscroll  = function Scroll()
{
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        $(".d3").addClass("scrollmouse");
    } else {
        $(".d3").removeClass("scrollmouse");
    }
}