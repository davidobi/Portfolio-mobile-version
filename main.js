// Mobile Navigation

const mobileNav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.menu-icon');
const mobileMenuItems = document.querySelectorAll('.mobile-nav .menu-items li');
const closeIcon = document.querySelector('.close-menu');

menuIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

mobileMenuItems.forEach((i) => {
  i.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});

closeIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

// Works section and Popup modal

const popUp = document.querySelector('.popup');

const data = [
  {
    id: 'project-1',
    title: 'Tonic',
    subtitle: ['CANOPY', 'Back End Dev', '2022'],
    desription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['html', 'css', 'javascript'],
    popupTags: ['html', 'css', 'javaScript', 'github', 'ruby', 'bootstrap'],
    image: 'pics/homepage.png',
    desktopImage: 'pics/homepage1-desktop.png',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 'project-2',
    title: 'Multi-Post Stories',
    subtitle: ['FACEBOOK', 'Back End Dev', '2022'],
    desription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    popupTags: ['html', 'css', 'javaScript', 'github', 'ruby', 'bootstrap'],
    image: 'pics/homepage2.png',
    desktopImage: 'pics/homepage2-desktop.png',
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 'project-3',
    title: 'Tonic',
    subtitle: ['FACEBOOK', 'Back End Dev', '2022'],
    desription: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    popupTags: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    image: 'pics/homepage3.png',
    desktopImage: 'pics/homepage3-desktop.png',
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 'project-4',
    title: 'Multi-Post Stories',
    subtitle: ['UBER', 'Lead Developer', '2018'],
    desription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type .',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    popupTags: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    image: 'pics/homepage4.png',
    desktopImage: 'pics/homepage4-desktop.png',
    seeLive: '#',
    seeSource: '#',
  },
];

function subtitleValue(i) {
  let subtitleList = [];
  for (let j = 0; j < data[i].subtitle.length; j += 1) { subtitleList += `<li class="subtitle-${j}"> ${data[i].subtitle[j]} </li>`; }
  return (subtitleList);
}

function tagsValue(i) {
  let tagsList = [];
  for (let j = 0; j < data[i].tags.length; j += 1) { tagsList += `<li class="tags-${j}"> ${data[i].tags[j]} </li>`; }
  return tagsList;
}

function popupTagsValue(i) {
  let tagsList = [];
  for (let j = 0; j < data[i].tags.length; j += 1) { tagsList += `<li class="tool"> ${data[i].tags[j]} </li>`; }
  return tagsList;
}

for (let i = 0; i < data.length; i += 1) {
  document.querySelector('.work-container').innerHTML += `
<div id="work-${i}" class="work-tonic">
<div class="work-img-div">
        <img src="${data[i].image}" alt="Project image" class="work-img"/>
        <img src="${data[i].desktopImage}" alt="Project image" class="desk-work-img"/>
      </div>
      <div class="work-info">
        <h2 class="tonic">${data[i].title}</h2>
        <div class="text-info">
          <ul>
           ${subtitleValue(i)}
          </ul>
        </div>
        <p class="work-text"> ${data[i].desription} </p>
          <ul class="tags">
            ${tagsValue(i)}
              </ul>
        
        <button type="button" id="${data[i].id}" class='see-proj see-proj-${i}'>See project</button>
      </div>
    </div>`;
}

const arr = [];

for (let i = 0; i < data.length; i += 1) {
  arr.push(` <div class="modal">
  <div class="popup-header">
  <h2 class="tonic">${data[i].title}</h2>
  <div id="close-popup-sign">
      <span> <a  href="#" class="close-popUp">X</a></span>
    </div>
    </div>
    <div class="subtitlePopupValue text-info">
      <ul>
        ${subtitleValue(i)}
      <ul>
    </div>
  <div class="modal-div-3">
    <div class="modal-img">
    <img class="work-img1-mob" src="${data[i].image}" alt="work-img1" />
    <img class="work-img1-desk" src="${data[i].desktopImage}" alt="work-img1" />
    </div>
    <div class="modal-info">
    
      <p class="modal-description desk mob">
     ${data[i].popDescription}
      </p>

    <div class="tech">
    <ul class="modal-tools desk">
    ${popupTagsValue(i)}
      </ul>
      <ul class="modal-tools mobile">
      ${popupTagsValue(i)}
      </ul>
      <button type="button" class="modal-btn">
      See Live <i class="fa fa-external-link" aria-hidden="true"></i>
      </button>
      <button type="button" class="modal-btn">
      See Source
      <i class="fa fa-github-square" aria-hidden="true"></i>
      </button>
    </div>
    </div>
  </div>
  </div>;`);
}

const seeMeBtns = document.querySelectorAll('.see-proj');

seeMeBtns.forEach((btn, index) => {
  btn.addEventListener('click', (click) => {
    if (click.target.id === btn.id) {
      popUp.innerHTML = arr[index];
      popUp.style.display = 'block';
    }
    const closeBtn = popUp.querySelector('.close-popUp');
    closeBtn.addEventListener('click', () => {
      popUp.style.display = 'none';
    });
  });
});
