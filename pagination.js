const html_class = "element";
const max_item = 6; //Définir ici le nombre d'élément à afficher par page
let list = document.querySelectorAll("." + "element"); 
let page = 1;

function display_pagination_link() {
    if (page >= Math.ceil(list.length / max_item)) {
        document.getElementById("pagination_suivant").disabled = true;
        console.log("stop up");
    }
    else
        document.getElementById("pagination_suivant").removeAttribute("disabled");

    if (page <= 1) {
        document.getElementById("pagination_precedent").disabled = true;
        console.log("stop down");
    }
    else
        document.getElementById("pagination_precedent").removeAttribute("disabled");
}

function suivant() {
    console.log("suivant");
    page++;
    display_pagination_link();
    display_pagination();
    display_element();
}

function precedent() {
    console.log("precedent");
    page--;
    display_pagination_link();
    display_pagination();
    display_element();
}

function display_pagination() {
    document.getElementById("pagination").innerHTML = page + " / " + Math.ceil(list.length / max_item)
}

function display_element() {
    for (let i = list.length - 1; i >= 0; i--) {
        list[i].style.display = "none";
        if (i < (list.length - ((page - 1) * max_item)) && i >= (list.length - (page * max_item)))
            list[i].style.display = "flex";
    }
}

display_element();
display_pagination_link();
display_pagination();

document.getElementById("pagination_suivant").addEventListener("click", suivant);
document.getElementById("pagination_precedent").addEventListener("click", precedent);