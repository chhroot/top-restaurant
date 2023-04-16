function createContact() {
    const content = document.querySelector("#content");
    

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('phone');
    phoneNumber.textContent = "455 343 323";

    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = "Diagon Alley 56, London, UK";

    pageContent.appendChild(phoneNumber);
    pageContent.appendChild(address);

    content.appendChild(pageContent);

}

export default createContact;