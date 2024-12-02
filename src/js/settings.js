export const settings = {
  db: {
    url: '//localhost:3131',
    products: 'products',
    messages: 'messages',
  },
};

export const select = {
  containerOf: {
    pages: '#pages',
    contact: '.contact-wrapper',
    products: '.products-wrapper',
  },

  nav: {
    links: '.main-nav a',
  },

  templateOf: {
    contact: '#template-contact',
    products: '#template-products',
  },

  contact: {
    name: '[name="name"]',
    title: '[name="title"]',
    message: '[name="message"]',
    submit: '[type="submit"]',
  },
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  }
};

export const templates = {
  contact: Handlebars.compile(document.querySelector(select.templateOf.contact).innerHTML),
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
};