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
    type: 'Delux',
    desc: 'Night Curfew in Kinamba | Check-in allowed between 05:00 AM to 09:00 PM Couples are welcome Guests can check in using any local or outstation ID proof.',
  },

  {
    id: 2,
    imageUrl: './img/room-1.jpg',
    name: 'MD Flagship 75243',
    type: 'Non-Delux',
    desc: 'Night Curfew in Kinamba | Check-in allowed between 05:00 AM to 09:00 PM Couples are welcome Guests can check in using any local or outstation ID proof.',
  },

  {
    id: 3,
    imageUrl: './img/room-3.jpg',
    name: 'MD FLAGSHIP 76687',
    type: 'Non-Delux',
    desc: 'Night Curfew in Kinamba | Check-in allowed between 05:00 AM to 09:00 PM Couples are welcome Guests can check in using any local or outstation ID proof.',
  },

  {
    id: 4,
    imageUrl: './img/room-4.jpg',
    name: 'MD SPOT 37669',
    type: 'Delux',
    desc: 'Night Curfew in Kinamba | Check-in allowed between 05:00 AM to 09:00 PM Couples are welcome Guests can check in using any local or outstation ID proof.',
  },

  {
    id: 5,
    imageUrl: './img/room-5.jpg',
    name: 'MD 80211 Collection',
    type: 'Non-Delux',
    desc: 'Night Curfew in Kinamba | Check-in allowed between 05:00 AM to 09:00 PM Couples are welcome Guests can check in using any local or outstation ID proof.',
  },

  {
    id: 6,
    imageUrl: './img/room-6.jpg',
    name: 'MD Flagship 82898',
    type: 'Delux',
    desc: 'Night Curfew in Kinamba | Check-in allowed between 05:00 AM to 09:00 PM Couples are welcome Guests can check in using any local or outstation ID proof.',
  },
];

// function to load rooms on index page
/* eslint-disable no-unused-vars */

const loadRooms = () => {
  // get the element where to add dynamic html
  const roomsContainer = document.querySelector('.wrap-rooms');
  let row = '';
  for (let i = 0; i < rooms.length; i += 1) {
    row += `<div class="room">
      <div class="room-img">
        <img
          class=""
          src="${rooms[i].imageUrl}"
          alt="Room One"
          width="178"
          height="177"
        />
      </div>
      <div class="room-details">
        <h5 class="room-name">${rooms[i].name}</h5>
        <p class="room-type">${rooms[i].type}</p>
        <div class="guide-line"></div>
        <p class="room-desc">
          ${rooms[i].desc}
        </p>
      </div>
    </div>`;
  }

  // insert the content in the dom after for loop finishes
  roomsContainer.innerHTML = row;
};
