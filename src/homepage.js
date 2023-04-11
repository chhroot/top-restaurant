import createHomepage from "./home";


function createHeader() {
  const header = document.createElement("div")
  header.classList.add("header")

}

function createNav() {
  const nav = document.createElement("div");

  const home = document.createElement("button");
  home.classList.add("home-button");
  // home.textContent("HOME");


  // const menu = document.createElement("button")
  // menu.classList.add("menu-button")
  // menu.textContent("menu")

  // const contact = document.createElement("button")
  // contact.classList.add("contact-button")
  // contact.textContent("contact")

  // nav.appendChild(home)
  // nav.appendChild(menu)
  // nav.appendChild(contact)

  return nav
}

function createMain() {
    const main = document.createElement("div");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }

export default function initalizeWebsite() {
  const content = document.querySelector('#content');
  // content.appendChild(createMain());
  content.appendChild(createNav());
  content.appendChild(createHomepage());
}
