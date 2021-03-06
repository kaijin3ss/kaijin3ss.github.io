"use strict";
var dark = "inverted",
    localStore = window.localStorage,
    isDark = localStore.getItem("hugo-theme-dream-is-dark"),
    dark404 = function () {
        (window.backgroundDark || window.backgroundImageDark) && $(".dream-404-container").length && ($(".dream-404-container h1").toggleClass(dark), $(".dream-404-container button").toggleClass(dark))
    },
    darkBackground = function () {
        (window.backgroundDark || window.backgroundImageDark) && $("body").toggleClass("default").toggleClass("dark")
    },
    darkNavMenu = function () {
        (window.backgroundDark || window.backgroundImageDark) && $("nav.dream-menu").toggleClass(dark)
    },
    darkHeaderElements = function () {
        if ($(".dream-header").length) {
            var e = $(".dream-header .ui.segment"),
                a = $(".dream-header .ui.top.segment .ui.header"),
                t = $(".dream-header .ui.top.segment .ui.list"),
                r = $(".dream-header .ui.segment .ui.accordion");
            e.toggleClass(dark), a.toggleClass(dark), t.toggleClass(dark), r.toggleClass(dark)
        }
    },
    darkCards = function () {
        var e = $(".dream-card");
        e.length && e.toggleClass(dark)
    },
    darkSingle = function () {
        var e = $(".dream-single .ui.segment");
        e.length && (e.toggleClass(dark), $(".dream-single h1.ui.header").toggleClass(dark), setThemeForUtterances(), "function" == typeof setHighlightTheme && setHighlightTheme());
        $(".toc").toggleClass(dark)
    },
    darkTables = function () {
        var e = $(".dream-single table");
        e.length && e.map(function () {
            this.style.color ? this.style.color = "" : this.style.color = "black"
        })
    },
    darkPostsSection = function () {
        var e = $(".ui.segment.dream-posts-section");
        e.length && e.toggleClass(dark)
    },
    darkTagsSection = function () {
        var e = $(".ui.segment.dream-tags-section");
        e.length && e.toggleClass(dark)
    },
    darkCategoriesSection = function () {
        var e = $(".ui.segment.dream-categories-section");
        e.length && e.toggleClass(dark)
    },
    darkBack = function () {
        var e = $(".dream-back .ui.segment");
        e.length && e.toggleClass(dark)
    };

function toggleDark() {
    dark404(), darkBackground(), darkNavMenu(), darkHeaderElements(), darkCards(), darkSingle(), darkTables(), darkPostsSection(), darkTagsSection(), darkCategoriesSection(), darkBack()
}
var setThemeForUtterances = function () {
    var e = document.querySelector("iframe.utterances-frame");
    e && e.contentWindow.postMessage({
        type: "set-theme",
        theme: isDark ? "github-dark" : "github-light"
    }, "https://utteranc.es")
};
window.addEventListener("message", function (e) {
    "https://utteranc.es" === e.origin && setThemeForUtterances()
});
var iconSwitchs = $(".theme-switch");

function themeSwitch() {
    isDark = isDark ? (iconSwitchs.removeClass("moon"), iconSwitchs.addClass("sun"), localStore.removeItem("hugo-theme-dream-is-dark"), null) : (iconSwitchs.removeClass("sun"), iconSwitchs.addClass("moon"), localStore.setItem("hugo-theme-dream-is-dark", "y"), "y"), toggleDark()
}
isDark ? (iconSwitchs.addClass("moon"), toggleDark()) : iconSwitchs.addClass("sun");