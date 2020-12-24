//mobile menu
var burgerList = document.getElementById("nav-links");

$("#burger").on("click", function () {
    burgerList.classList.toggle("is-active");
});


// modal pop out

var modBG = document.querySelector("#modal-back");
var modal = document.querySelector(".modal");

$("#cont-info").on("click", function () {
    modal.classList.add("is-active");
});
$(modBG).on("click", function () {
    modal.classList.remove("is-active");
});

const portfolio = [
    {
        name: "Weather Dashboard",
        img: "https://github.com/daviddugle/Weather-Dashboard/blob/main/assets/Photos/Screenshot%202020-11-13%20204346.jpg?raw=true",
        git: "https://github.com/daviddugle/Weather-Dashboard",
        deployed: "https://daviddugle.github.io/Weather-Dashboard/"
    },
    {
        name: "Work Day Scheduler",
        img: "https://github.com/daviddugle/Work-Day-Scheduler/blob/main/assets/Screenshot%202020-11-11%20125954.jpg?raw=true",
        git: "https://github.com/daviddugle/Work-Day-Scheduler",
        deployed: "https://daviddugle.github.io/Work-Day-Scheduler/"
    },
    {
        name: "Honest Trailers",
        img: "https://raw.githubusercontent.com/v-lax/movie_trailer_web_app/main/assets/deployed.png",
        git: "https://github.com/v-lax/movie_trailer_web_app",
        deployed: "https://v-lax.github.io/movie_trailer_web_app/index.html"
    },
    {
        name: "Daily Service Record",
        img: "assets/dailyPlanner.jpg",
        git: "https://github.com/diminako/daily_service_record",
        deployed: "https://mighty-spire-89072.herokuapp.com/"
    },
    {
        name: "Burger Logger",
        img: "https://github.com/daviddugle/Burger-Logger/raw/main/public/assets/burgerPhoto.jpg",
        git: "https://github.com/daviddugle/Burger-Logger",
        deployed: "https://intense-garden-63215.herokuapp.com/"
    },
];

for (let i = 0; i < portfolio.length; i++) {
    const portName = portfolio[i].name;
    const portImg = portfolio[i].img;
    const portGit = portfolio[i].git;
    const portDep = portfolio[i].deployed;


    let header = $("<div>").text(portfolio[i].name);
    header.addClass("headTitle column is-half")
    let image = $("<img>").attr("src", portImg);
    image.attr("alt", portName);
    let github = $("<a>").attr("href", portGit);
    github.text("Github")
    const sp = $("<p>").text("");
    let deploy = $("<a>").attr("href", portDep);
    deploy.text("Deployed");



    header.append(image, github, sp, deploy);


    $("#profMat").append(header);


}