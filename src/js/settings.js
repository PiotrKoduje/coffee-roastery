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
  },

  nav: {
    links: '.main-nav a',
  },

  templateOf: {
    contact: '#template-contact',
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
};