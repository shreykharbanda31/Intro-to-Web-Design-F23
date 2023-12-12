let contact_btn = document.getElementById("contact-btn");
let contact_btn_alternate = false;
let main_image = document.getElementById("main-image");
let nyu_image = document.getElementById("nyu-image");
let menu_button = document.getElementById("menu-button");
let menu = document.querySelector(".sub-menu");

if (contact_btn){
contact_btn.addEventListener('click', function(){

    if (!contact_btn_alternate){
        navigate_to_form();
    }

    contact_btn_alternate = !contact_btn_alternate
});
};

if (main_image){
main_image.addEventListener('dblclick', function() {
    reduce_opacity(this);
});
};

if (nyu_image){
nyu_image.addEventListener('dblclick', function() {
    reduce_opacity(this);
});
};

function navigate_to_form() {
    window.location.href = "contact.html";
};


function reduce_opacity(image){
    let current_opacity = parseFloat(image.style.opacity) || 1;
    let new_opacity = Math.max(0, current_opacity - 0.1);
    image.style.opacity = new_opacity;
};

document.addEventListener("DOMContentLoaded", function() {
    menu_button.addEventListener('click', function() {
        if (menu.style.display == 'flex'){
            menu.style.display = 'none';
        }
        else {
            menu.style.display = 'flex';
        }
    });
});