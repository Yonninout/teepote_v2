const WhoTitle = 'Qui sommes nous ?';
const WhoContent = 'Teepote vous accompagne dans la création de votre site internet';
const WhoLegend = 'Présentez nous l\'activité de votre entreprise et nous la mettrons en valeur !' ;
const WhatTitle = 'Notre activité';
const WhatContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inrin laoreet metus, id pulvinar erat. Morbi dignissim nibh sollicitudin.';
const WhatLegend = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const LogotypeContent = [
  {
    src: './img/logotype.png',
    alt: 'Logo de Logotype ou logotypage',
    title: 'Logotype',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in semper nisl, quis feugiat tellus. Pellentesque aliquam eros eu mauris convallis sodales.',
    key: 0
  },
  {
    src: './img/webdesign.png',
    alt: 'Logo de web design',
    title: 'Web design',
    text: 'Lorem ipsum dolor sit elit. Proin in semper nisl, quis feugiat tellus. Pellentesque aliquam eros eu mauris convallis sodales.',
    key: 1
  },
  {
    src: './img/devweb.png',
    alt: 'logo arobase de web développement',
    title: 'Dev Web',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing elit. Semper nisl, quis feugiat tellus. Pellentesque aliquam eros eu mauris convallis sodales.',
    key: 2
  },
  {
    src: './img/webapp.png',
    alt: 'logo d\'application mobile',
    title: 'Appli mobile',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in semper nisl, feugiat tellus. Pellentesque aliquam eros eu mauris convallis sodales.',
    key: 3
  }
];

const NavBarContent = [
  {
    label:'Loredm',
    href : '#a',
    key: 0
  },
  {
    label:'Ipsum',
    href: '#b',
    key: 1
  },
  {
    label:'Dolor',
    href: '#c',
    key: 2
  },
  {
    label:'Sit Amet',
    href: '#d',
    key: 3
  }
];
//Export for Navbar.js
export {NavBarContent};
//Export for SectionWho.js
export {WhoTitle, WhoContent, WhoLegend};
//Export for SectionWhat.js
export {WhatTitle, WhatContent, WhatLegend};
//Export for SectionLogotype
export {LogotypeContent};
