$(document).ready(function () {
    // When hovering "Design"
    $("#design-tab").on("mouseenter", function () {
        $("#nav-bar").addClass("expanded");
        $(".dropdown-content").removeClass("active");
        $("#design-div").addClass("active");
    });

    // When hovering "Explore"
    $("#explore-tab").on("mouseenter", function () {
        $("#nav-bar").addClass("expanded");
        $(".dropdown-content").removeClass("active");
        $("#explore-div").addClass("active");
    });

    // When hovering non-dropdown tabs (e.g., Login, Space), close panels
    $("#home-tab, li:has(#signup-btn), li:has(a:contains('Login'))").on("mouseenter", function () {
        $("#nav-bar").removeClass("expanded");
        $(".dropdown-content").removeClass("active");
    });

    // When leaving the navbar container entirely
    $("#nav-bar").on("mouseleave", function () {
        $("#nav-bar").removeClass("expanded");
        $(".dropdown-content").removeClass("active");
    });
});