function createMenu() {

    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    const heading = document.createElement('h2');
    heading.textContent = "MENU";

    pageContent.appendChild(heading);
    content.appendChild(pageContent);



}

export default createMenu;