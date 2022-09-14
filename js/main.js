// get mobile menu element
const mobileMenuToggle = document.querySelector('.hamburger__bar');
// get nav links element
const links = document.querySelectorAll('.mynav__item-link');

// handle user menu click
mobileMenuToggle.addEventListener('click', () => {
  document.body.classList.toggle('open-nav');
});

// handle user menu clicks
links.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('open-nav');
  });
});

// rooms data
const rooms = [
  {
    id: 1,
    imageUrl: './img/room-2.jpg',
    name: 'MD Capital 15959',
    maxCount: 3,
    facilities: ['Parking', 'Free WiFI', 'Entertainment'],
    type: 'Delux',
  },

  {
    id: 2,
    imageUrl: './img/room-1.jpg',
    name: 'MD Flagship 75243',
    maxCount: 2,
    facilities: ['Parking', 'Free WiFI', 'Entertainment'],
    type: 'Non-Delux',
  },

  {
    id: 3,
    imageUrl: './img/room-3.jpg',
    name: 'MD FLAGSHIP 76687',
    maxCount: 3,
    facilities: ['Parking', 'Free WiFI', 'Entertainment'],
    type: 'Non-Delux',
  },

  {
    id: 4,
    imageUrl: './img/room-4.jpg',
    name: 'MD SPOT 37669',
    maxCount: 2,
    facilities: ['Parking', 'Free WiFI'],
    type: 'Delux',
  },

  {
    id: 5,
    imageUrl: './img/room-5.jpg',
    name: 'MD 80211 Collection',
    maxCount: 2,
    facilities: ['Parking', 'Free WiFI'],
    type: 'Non-Delux',
  },

  {
    id: 6,
    imageUrl: './img/room-6.jpg',
    name: 'MD Flagship 82898',
    maxCount: 3,
    facilities: ['Parking', 'Free WiFI'],
    type: 'Delux',
  },
];

// function to load rooms on index page
/* eslint-disable no-unused-vars */

const loadRooms = () => {
  // get the element where to add dynamic html
  const roomsContainer = document.getElementById('rooms-container');
  let row = '';
  for (let i = 0; i < rooms.length; i += 1) {
    row += `
    <div class="row mb-3">
    <div class="col-md-6">
      <img class="img-fluid" src="${rooms[i].imageUrl}" alt="Room Two" />
    </div>
  
    <div class="col-md-6">
      <h3>${rooms[i].name}</h3>
      <p>Facilities: <b>${rooms[i].facilities.join(', ')}</b></p>
      <p>Max Count: ${rooms[i].maxCount}</p>
      <p>Type: ${rooms[i].type}</p>
    </div>
  </div>`;
  }

  // insert the content in the dom after for loop finishes
  roomsContainer.innerHTML = row;
};
