$(document).ready(function () {
    $("#design-tab").mouseenter(function () { 
        $("#nav-bar").addClass("expanded");
    });
    $("#nav-bar").mouseleave(function () { 
        $("#nav-bar").removeClass("expanded");
    });

    $("#explore-tab").mouseenter(function () { 
        $("#nav-bar").addClass("expanded");
    });
    $("#nav-bar").mouseleave(function () { 
        $("#nav-bar").removeClass("expanded");
    });
})