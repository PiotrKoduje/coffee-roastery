import {settings, select, classNames } from './settings.js';
import Contact from './contact.js';

const app = {
  init: function(){
    this.initData();
    this.initPages();
    this.initContact();
  },

  initData:function(){
    this.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },

  initPages(){
    this.pages = document.querySelector(select.containerOf.pages).children;
    this.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatchingHash = this.pages[0].id;

    for(const page of this.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    this.activatePage(pageMatchingHash);

    for(const link of this.navLinks){
      link.addEventListener('click',(e) => {
        e.preventDefault();
        const id = link.getAttribute('href').replace('#', '');
        this.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage(pageId){
    for(const page of this.pages){
      page.classList.toggle(
        classNames.pages.active,
        page.id == pageId
      );
    }

    for(const link of this.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initContact(){
    const contactContainer = document.querySelector(select.containerOf.contact);
    this.contact = new Contact(contactContainer);
  }
};

app.init();