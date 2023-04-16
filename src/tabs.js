import createContact from "./contact";
import createMenu from "./menu";
import createRestaurantHomePage from "./restaurant";

const createNav = () => {
    const content = document.querySelector("#content");

    const topnav = document.createElement('div');
    topnav.classList.add('topnav');

    const logo = document.createElement('p');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    logo.classList.add("logo");

    logo.textContent = "Monochrome"
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    home.classList.add("active");

    // topnav.appendChild(logo);
    topnav.appendChild(home);
    topnav.appendChild(menu);
    topnav.appendChild(contact);

    content.appendChild(topnav);

    home.addEventListener("click", () => {
        clearContent();
        createRestaurantHomePage();
        menu.classList.remove("active");
        contact.classList.remove("active");
        home.classList.add("active");
    });

    menu.addEventListener("click", () => {
        clearContent();
        createMenu();
        menu.classList.add("active");
        home.classList.remove("active");
        contact.classList.remove("active");
    });

    contact.addEventListener("click", () => {
        clearContent();
        menu.classList.remove("active");
        contact.classList.add("active");
        home.classList.remove("active");
        createContact();
    });

}

function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");

    if(pageContent){
        content.removeChild(pageContent);
    }
}

export default createNav;