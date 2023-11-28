let opinion = document.getElementById("opinion-body");
let opinianated_image = document.getElementById("opinianated-image");
let real_reason_btn = document.getElementById("real-reason-btn");
let zucker_btn = document.getElementById("zucker-btn");
let fav_btn = document.getElementById("fav-btn");
let content = document.querySelector(".content");
let text = document.querySelectorAll(".text");
let real_btn_alternate = false;
let zucker_alternate = false;
let fav_alternate = false;
let main_image = document.getElementById("main-image");
let zucker_text = document.getElementById("zucker-text");
let fav_text = document.getElementById("fav-text");
let zucker_image = document.getElementById("zucker-image");
let adobe_image = document.getElementById("adobe-image");

if (real_reason_btn){
real_reason_btn.addEventListener('click', function(){

    if (!real_btn_alternate){
        update_opinion();
    }
    else{
        update_back();
    }

    real_btn_alternate = !real_btn_alternate;
});
};

if (zucker_btn){
    zucker_btn.addEventListener('click', function(){
    
        if (!zucker_alternate){
            update_zucker();
        }
        else{
            update_zucker_back();
        }
    
        zucker_alternate = !zucker_alternate;
    });
};

if (fav_btn){
    fav_btn.addEventListener('click', function(){
    
        if (!fav_alternate){
            update_fav();
        }
        else{
            update_fav_back();
        }
    
        fav_alternate = !fav_alternate;
    });
};

if (main_image){
main_image.addEventListener('dblclick', function() {
    reduce_opacity(this);
});
};

if (zucker_image){
zucker_image.addEventListener('dblclick', function() {
    reduce_opacity(this);
});
};

if (adobe_image){
    adobe_image.addEventListener('dblclick', function() {
        reduce_opacity(this);
    });
};


function update_opinion() {
    opinion.textContent = "Because it pays well :)";
    opinion.style.textAlign = "center";
    opinianated_image.src = "assets/images/dollar-bills/money-pexels.jpeg";
    opinianated_image.srcset="assets/images/dollar-bills/money-pexels_240.jpeg 240w, assets/images/dollar-bills/money-pexels_480.jpeg 480w, assets/images/dollar-bills/money-pexels_960.jpeg 960w, assets/images/dollar-bills/money-pexels_1440.jpeg 14400w";
    content.style.columnGap = "10em";
    text[1].style.rowGap = "3em";
    real_reason_btn.textContent = "Aight, let's go back now 😌";
};

function update_back(){
    opinion.textContent = "I believe that Software Engineering allows me to exercise my creative and logical side in computer science. I have the ability to solve complex, real-world problems with simple and specific solutions. I would love to be at the forefront of innovation with Software Engineering. In this field, continuous learning is a key aspect to keep yourself updated with ongoing trends and collaboration with others enhances the experience and product strategy. I would love to make a positive impact on society and as a software engineer, I can become a part of a global community of professionals. I am interested in developing applications, interfaces, platforms, and communicate with both technical and non-technical stakeholders to enliven the product and provide the best user experience. A good UX is important to increase customer retention and create a positive brand image. A user-friendly interface is important to ensure cost-effectiveness and provide an edge among other competitors in the market. With an entrepreneurial spirit, I am excited to contribute to the future of software engineering by innovating and solving complex issues to create new outlets and products.";
    opinianated_image.src = "assets/images/shrey-github/shrey-github.png";
    opinianated_image.srcset="assets/images/shrey-github/shrey-github_240.png 240w, assets/images/shrey-github/shrey-github_480.png 480w, assets/images/shrey-github/shrey-github_960.png 960w, assets/images/shrey-github/shrey-github_1300.png 1300w, assets/images/shrey-github/shrey-github_1440.png 14400w";
    opinion.style.textAlign = "left";
    opinianated_image.sizes = "(max-width: 480px) 70vw, (max-width: 1200px) 20vw, 10vw";
    real_reason_btn.textContent = "Nah, but find out the real reason here 🤨";
};

function update_zucker() {
    zucker_text.textContent = "He speaks 6 languages including English, Hebrew, French, Latin, Greek, and Mandarin Chinese";
    zucker_btn.textContent = "Aight, let's go back now 😌";
};

function update_zucker_back(){
    zucker_text.textContent = "Zuckerburg is the current CEO of Meta Platforms and helped cofound Facebook. Zuckerburg was a genius in software engineering right from his childhood. He built a local area network when he was in high school.";
    zucker_btn.textContent = "Wanna know a fun fact about Zucker?";
};

function update_fav() {
    fav_text.textContent = "I love Asana!";
    fav_btn.textContent = "Aight, let's go back now 😌";
};

function update_fav_back(){
    fav_text.textContent = "These tools help me in increasing my productivity and efficiency every day.";
    fav_btn.textContent = "Wanna know my favorite tool here?";
};

function reduce_opacity(image){
    let current_opacity = parseFloat(image.style.opacity) || 1;
    let new_opacity = Math.max(0, current_opacity - 0.1);
    image.style.opacity = new_opacity;
};


document.addEventListener("DOMContentLoaded", function() {
    let today = new Date();
    let day_of_week = today.getDay(); 
    let day_text = document.getElementById("day-text");
    let body = document.querySelector("body");

    if (day_of_week == 0) {
        body.style.fontFamily = "SundayFont";
        day_text.textContent = "Sunday " + day_text.textContent + "Ubuntu";
    } else if (day_of_week == 1) {
        body.style.fontFamily = "MondayFont";
        day_text.textContent = "Monday " + day_text.textContent + "Kanit";
    } else if (day_of_week == 2) {
        body.style.fontFamily = "TuesdayFont";
        day_text.textContent = "Tuesday " + day_text.textContent + "Poppins";
    } else if (day_of_week == 3) {
        body.style.fontFamily = "WednesdayFont";
        day_text.textContent = "Wednesday " + day_text.textContent + "Lato";
    } else if (day_of_week == 4) {
        body.style.fontFamily = "ThursdayFont";
        day_text.textContent = "Thursday " + day_text.textContent + "Merriweather";
    } else if (day_of_week == 5) {
        body.style.fontFamily = "FridayFont";
        day_text.textContent = "Friday " + day_text.textContent + "NotoSans";
    } else {
        body.style.fontFamily = "SaturdayFont";
        day_text.textContent = "Saturday " + day_text.textContent + "Nunito";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let menu_button = document.getElementById("menu-button");
    let menu = document.querySelector(".menu");

    menu_button.addEventListener('click', function() {
        if (menu.style.display == 'flex'){
            menu.style.display = 'none';
        }
        else {
            menu.style.display = 'flex';
        }
    });
});