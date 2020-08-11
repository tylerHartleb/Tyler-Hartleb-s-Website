function toggleClassActive(id) {
    id.classList.toggle("active");
}

function menuAnimation(id, sid) {
    if (id.classList.contains("active")) {
        id.classList.add("menu_closing");
        sid.ontransitionend=() => {
            id.classList.remove("menu_closing");
        };
    }
    else {
        id.classList.add("menu_opening")
        sid.ontransitionend=() => {
            id.classList.remove("menu_opening");
        };
    }

}

function toggleView(id, pid, page) {

    if (id.classList.contains("light_mode")) {
        pid.href="styles/styles_" + page + "_dark.css"
        id.classList.remove("light_mode");
        id.classList.add("dark_mode");
    }
    else if (id.classList.contains("dark_mode")) {
        pid.href="styles/styles_" + page + "_light.css"
        id.classList.add("light_mode");
        id.classList.remove("dark_mode");
    }
    
}

function smoothScroll(id, sid) {
    menuAnimation(id, sid);
    toggleClassActive(id);
}




