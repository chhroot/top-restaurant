function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const phoneNumber = document.createElement('p')
    phoneNumber.classList.add('phone')
    phoneNumber.textContent = "455 343 323"

    const address = document.createElement('p')
    address.classList.add('address')
    address.textContent = "Diagon Alley 56, London, UK"

    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    
    return contact;

}

export default createContact;