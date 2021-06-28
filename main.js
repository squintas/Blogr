// Vanilla JS
// Funções Para Adicionar/Remover menu mobile
function addRemoveMenu() {
    let showMenu = document.querySelector(".dropdown-wrapper");
    showMenu.classList.toggle("remove");
}

function addRemoveProduct() {
    let ul = document.querySelector(".addRemoveMenu");
    ul.classList.toggle("remove");
}

function addRemoveCompany() {
    let ul = document.querySelector(".addRemoveCompany");
    ul.classList.toggle("remove");
}

function addRemoveConnect() {
    let ul = document.querySelector(".addRemoveConnect");
    ul.classList.toggle("remove");
}

// jQuery
// Funções para Adicionar/Remover menu PC

$(document).ready(function() {

    // Hover "Product"
    $(".product, .subnav-content-product").hover(function() {
        $(".subnav-content-product").toggleClass("remove");
    });

    // Hover "Company"
    $(".company, .subnav-content-company").hover(function() {
        $(".subnav-content-company").toggleClass("remove");
    });

    // Hover "Connect"
    $(".connect, .subnav-content-connect").hover(function() {
        $(".subnav-content-connect").toggleClass("remove");
    });



});