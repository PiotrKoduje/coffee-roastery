export const settings = {
  db: {
    //url: '//localhost:3131',
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
    messages: 'messages',
    mainTitles: 'mainTitles'
  },
};

export const select = {
  containerOf: {
    pages: '#pages',
    contact: '.contact-wrapper',
    products: '.products-wrapper',
    home: '.home-wrapper',
    carousel: '.carousel-container',
  },

  nav: {
    links: '.main-nav a',
  },

  templateOf: {
    contact: '#template-contact',
    products: '#template-products',
    about: '#template-about',
  },

  header: {
    firstLine: '.first-line',
    secondLine: '.second-line',
    scrollToTop: '.icon-scrollToTop',
  },

  contact: {
    name: '[name="name"]',
    title: '[name="title"]',
    message: '[name="message"]',
    submit: '[type="submit"]',
  },

  home: {
    footer: '.main-footer',
    homeWrapper: '.home-wrapper',
    productsContainer: '.products-container',
    aboutWrapper: '.about-wrapper',
    carousel: '.carousel',
  }
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  },
  home: {
    aboutWrapper: 'about-wrapper',
  }
};

export const templates = {
  contact: Handlebars.compile(document.querySelector(select.templateOf.contact).innerHTML),
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
  about: Handlebars.compile(document.querySelector(select.templateOf.about).innerHTML),
};