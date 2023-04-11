function createHomepage() {
    const contentDiv = document.createElement('div');
  
    // const image = document.createElement('img');
    // image.src = 'images/bg.jpg';
    // contentDiv.appendChild(image);
  
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';
    contentDiv.appendChild(headline);
  
    const copy = document.createElement('p');
    copy.textContent = 'Our restaurant offers delicious food and a welcoming atmosphere. Come dine with us today!';
    contentDiv.appendChild(copy);

    return contentDiv;
  }

export default createHomepage;