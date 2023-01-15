function select(query) {
    return document.querySelector(query);
}

function openNav() {
    select("#sideNav").style.width = "250px";
    document.getElementById("sideNav2").style.width = "270px";
    document.getElementById("openLines").style.opacity = "0";
    document.querySelector("body").style.overflow = "hidden";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0px";
    document.getElementById("sideNav2").style.width = "0px";
    document.getElementById("openLines").style.opacity = "9";
    document.querySelector("body").style.overflow = "";
}

// sliders
const bg = document.querySelectorAll(".movie");

let images = [
    "../images/MoviePoster (10).png",
    "../images/MoviePoster (yellowball).png",
    "../images/MoviePoster (cook).png",
    "../images/MoviePoster (scissor).png",
    "../images/MoviePoster (yanimda).png",
    "../images/MoviePoster (lupin).png",
    "../images/MoviePoster (Brooklyn).png",
    "../images/MoviePoster (love).png",
    "../images/MoviePoster (cook).png",

    "../images/MoviePoster (scissor).png",
    "../images/MoviePoster (Brooklyn).png",
    "../images/MoviePoster (yanimda).png",
    "../images/MoviePoster (cook).png",
    "../images/MoviePoster (yellowball).png",
    "../images/MoviePoster (10).png",
    "../images/MoviePoster (lupin).png",
    "../images/MoviePoster (love).png",
    "../images/MoviePoster (cook).png",

    "../images/MoviePoster (lupin).png",
    "../images/MoviePoster (cook).png",
    "../images/MoviePoster (yellowball).png",
    "../images/MoviePoster (scissor).png",
    "../images/MoviePoster (yanimda).png",
    "../images/MoviePoster (10).png",
    "../images/MoviePoster (Brooklyn).png",
    "../images/MoviePoster (scissor).png",
    "../images/MoviePoster (yanimda).png",

    "../images/v4.png",
    "../images/v1.png",
    "../images/v2.png",
    "../images/v3.png",
    "../images/v4.png",
    "../images/v1.png",
    "../images/v3.png",
    "../images/v4.png",
    "../images/v1.png",

    "../images/MoviePoster (10).png",
    "../images/MoviePoster (yellowball).png",
    "../images/MoviePoster (cook).png",
    "../images/MoviePoster (scissor).png",
    "../images/MoviePoster (yanimda).png",
    "../images/MoviePoster (lupin).png",
    "../images/MoviePoster (Brooklyn).png",
    "../images/MoviePoster (love).png",
    "../images/MoviePoster (cook).png",

    "../images/MoviePoster (10).png",
    "../images/MoviePoster (yellowball).png",
    "../images/MoviePoster (cook).png",
    "../images/MoviePoster (scissor).png",
    "../images/MoviePoster (yanimda).png",
    "../images/MoviePoster (lupin).png",
    "../images/MoviePoster (Brooklyn).png",
    "../images/MoviePoster (love).png",
    "../images/MoviePoster (cook).png",

    "../images/MoviePoster (10).png",
    "../images/MoviePoster (yellowball).png",
    "../images/MoviePoster (cook).png",
    "../images/MoviePoster (scissor).png",
    "../images/MoviePoster (yanimda).png",
    "../images/MoviePoster (lupin).png",
    "../images/MoviePoster (Brooklyn).png",
    "../images/MoviePoster (love).png",
    "../images/MoviePoster (cook).png",
];
bg.forEach((item, index) => {
    let bgIm = document.createElement("img");
    bgIm.src = images[index];
    item.appendChild(bgIm);
});

// for the last image reduce opacity
// let cardList = document.querySelectorAll(".movie img");
// let lastCard = cardList[cardList.length - 3];
// lastCard.style.opacity = 0.5;

//scrolling right
// $(".arrow").click(function() {
//     console.log("ok");
//     $("#scrollbar").animate({
//             scrollLeft: "-=153",
//         },
//         1000,
//         "swing"
//     );
// });

function slideRight() {
    console.log("clicked");
    document.getElementById("scrollbar").scrollLeft += 200;
}

function slideLeft() {
    console.log("clicked");
    document.getElementById("scrollbar").scrollLeft -= 250;
}

function slideRight1() {
    console.log("clicked");
    document.getElementById("scrollbar1").scrollLeft += 200;
}

function slideLeft1() {
    console.log("clicked");
    document.getElementById("scrollbar1").scrollLeft -= 250;
}

function slideRight2() {
    console.log("clicked");
    document.getElementById("scrollbar2").scrollLeft += 200;
}

function slideLeft2() {
    console.log("clicked");
    document.getElementById("scrollbar2").scrollLeft -= 250;
}

function slideRight3() {
    console.log("clicked");
    document.getElementById("scrollbar3").scrollLeft += 200;
}

function slideLeft3() {
    console.log("clicked");
    document.getElementById("scrollbar3").scrollLeft -= 250;
}

function slideRight4() {
    console.log("clicked");
    document.getElementById("scrollbar4").scrollLeft += 200;
}

function slideLeft4() {
    console.log("clicked");
    document.getElementById("scrollbar4").scrollLeft -= 250;
}

function slideRight5() {
    console.log("clicked");
    document.getElementById("scrollbar5").scrollLeft += 200;
}

function slideLeft5() {
    console.log("clicked");
    document.getElementById("scrollbar5").scrollLeft -= 250;
}

function slideRight6() {
    console.log("clicked");
    document.getElementById("scrollbar6").scrollLeft += 200;
}

function slideLeft6() {
    console.log("clicked");
    document.getElementById("scrollbar6").scrollLeft -= 250;
}