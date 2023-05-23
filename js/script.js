/* ********************** **
 *  MOBILE HUMBURGER MENU **
 * ********************** */

// Varibales
const body = document.querySelector('body');
const navBar = document.querySelector('.main-nav');
const humburgerBtn = document.querySelector('.icon-menu[name="menu-outline"]');
const closeBtn = document.querySelector('.icon-menu[name="close-outline"]');

function openMenu() {
  navBar.classList.add('active');
  humburgerBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
  closeBtn.style.setProperty('z-index', 10);
  body.classList.add('hide-scroll');
}

function closeMenu() {
  navBar.classList.remove('active');
  humburgerBtn.classList.remove('hidden');
  closeBtn.classList.add('hidden');
  body.classList.remove('hide-scroll');
}

humburgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

/* ***************** **
 *  PANELIST SECTION **
 * ***************** */
const panelistInfo = [
  // Panelist #1: Ali Baba Hussaini
  {
    name: 'Ali Baba "Hussaini"',
    title: 'Academic Writer and Journalist',
    imageSource: './imgs/panelists/AliBaba.jpg',
    description:
      '<strong>Ali Baba</strong>, Journalist and academic writer, seamlessly intertwining investigative storytelling with insightful research, challenging perspectives with captivating prose.',
    socialAccounts: {
      github: 'https://github.com/Alibaba2023',
      linkedIn: 'https://www.linkedin.com/in/ali-baba-hussaini-630607267/',
      twitter: 'https://twitter.com/AliBabaHu2023',
    },
  },

  // Panelist #2: Hafizullah Rasa
  {
    name: 'Hafizullah "Rasa"',
    title: 'University Lecturer and Researcher',
    imageSource: './imgs/panelists/Hafiz.jpg',
    description:
      '<strong>Hafizullah</strong>, a passionate college lecturer who ignites curiosity, inspires minds, and empowers students to embrace knowledge and reach their full potential.',
    socialAccounts: {
      github: 'https://github.com/hafiz1379',
      linkedIn: 'https://linkedin.com/in/hafizullah-rasa-8436a1257',
      twitter: 'https://twitter.com/hafizrasa1379',
    },
  },

  // Panelist #3: Najibullah Jafari
  {
    name: 'Najibullah "Jafari"',
    title: 'DataBase Manager and Engineer',
    imageSource: './imgs/panelists/Najib.jpg',
    description:
      '<strong>Najibullah</strong>, a skilled database manager and engineer who optimizes data systems, ensuring seamless operations and efficient data management for organizations.',
    socialAccounts: {
      github: 'https://github.com/najibullahjafari',
      linkedIn: 'https://www.linkedin.com/in/najibulla-jafari-609852263/',
      twitter: 'https://twitter.com/Najib_Jafari_',
    },
  },

  // Panelist #4: Esmat Solimany
  {
    name: 'Esmat "Solimany"',
    title: 'IT Officer and Full-stack Web Developer',
    imageSource: './imgs/panelists/Esmat.jpg',
    description:
      '<strong>Esmat</strong> an IT officer and full-stack web developer, combining technical expertise with problem-solving skills to create innovative web solutions and optimize IT operations',
    socialAccounts: {
      github: 'https://github.com/EsmatSolimany',
      linkedIn: 'https://www.linkedin.com/in/esmat-solimany-8281a0254',
      twitter: 'https://twitter.com/Esmatsolimany',
    },
  },

  // Panelist #5: Reza Mirzaee
  {
    name: 'Reza "Mirzaee"',
    title: 'International Relations Investigator',
    imageSource: './imgs/panelists/Reza.jpg',
    description:
      '<strong>Reza</strong>, an astute international relations investigator, adept at analyzing complex geopolitical issues and uncovering valuable insights to shape global strategies.',
    socialAccounts: {
      github: 'https://github.com/Gh-Reza',
      linkedIn: 'https://www.linkedin.com/in/reza-merzaie-b94368202/',
      twitter: 'https://twitter.com/RezaMerzaie',
    },
  },

  // Panelist #6: Mahram Hussain Nazari
  {
    name: 'Mahram Hussaini "Nazari"',
    title: 'Finance Manager',
    imageSource: './imgs/panelists/Mahram.jpg',
    description:
      '<strong>Mahram Hussaini</strong>, a meticulous finance manager adept at optimizing financial resources, implementing effective strategies, and ensuring sound fiscal decision-making for organizations.',
    socialAccounts: {
      github: 'https://github.com/mhnazary',
      linkedIn: 'https://linkedin.com/in/mhnazary',
      twitter: 'https://twitter.com/mhnazary',
    },
  },
];

const panelists = document.querySelector('.container-panelist');
panelists.innerHTML = '';
function addPanelist(panelistInfo) {
  const panelist = document.createElement('figure');
  panelist.className = 'panelist';
  panelist.innerHTML = `
    <div class="panelist-img-box">
      <img src="./imgs/chess.jpg" alt="Chess" class="panelist-bg" />
      <img
        src="${panelistInfo.imageSource}"
        alt="Hafizulla Rasa"
        class="panelist-photo"
      />
      <ul class="panelist-social">
        <li>
          <a href="${panelistInfo.socialAccounts.github}" target="_blank"
            ><ion-icon
              name="logo-github"
              class="panelist-icon icon"
            ></ion-icon
          ></a>
        </li>
        <li>
          <a href="${panelistInfo.socialAccounts.linkedIn}" target="_blank"
            ><ion-icon
              name="logo-linkedin"
              class="panelist-icon icon"
            ></ion-icon
          ></a>
        </li>
        <li>
          <a href="${panelistInfo.socialAccounts.twitter}" target="_blank"
            ><ion-icon
              name="logo-twitter"
              class="panelist-icon icon"
            ></ion-icon
          ></a>
        </li>
      </ul>
    </div>
    <div class="panelist-info">
      <h3 class="heading heading--tertiary">${panelistInfo.name}</h3>
      <p class="panelist-title">${panelistInfo.title}</p>
      <p class="panelist-description">
        ${panelistInfo.description}
      </p>
    </div>`;
  panelists.append(panelist);
}

panelistInfo.forEach((panelist) => {
  addPanelist(panelist);
});
