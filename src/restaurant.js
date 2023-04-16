const createRestaurantHomePage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');
  
  const headLine = document.createElement('h1');
  headLine.classList.add('headline');
  headLine.textContent = "Oh Hello";
  pageContent.appendChild(headLine);

  const paragraph = document.createElement('p');
  paragraph.classList.add('hero');
  paragraph.textContent = "There is not much to see, just two shades";
  pageContent.appendChild(paragraph);

  // const background = document.createElement('img');
  // background.src = 'https://imgur.com/CTfKt59';
  // background.classList.add('bg-img');
  // pageContent.appendChild(background);

  content.appendChild(pageContent)
}

export default createRestaurantHomePage;