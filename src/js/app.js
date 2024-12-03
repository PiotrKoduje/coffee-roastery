import {settings, select, classNames } from './settings.js';
import Contact from './contact.js';
import Product from './product.js';
import Home from './home.js';


const app = {
  init: function(){
    this.initData();
    this.initPages();
    this.initContact();
  },

  initData:function(){
    this.data = {};
    
    let url = settings.db.url + '/' + settings.db.mainTitles;
    fetch(url)
      .then((rowResponse) => {
        return rowResponse.json();
      }).then((parsedResponse) => {
        this.data.mainTitles = parsedResponse;
        this.generateMainTitle();
      });
    
    url = settings.db.url + '/' + settings.db.products;
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      }).then((parsedResponse) => {
        this.data.products = parsedResponse;
        this.initProducts();
        this.initHome();
        this.initScrolling();
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
  },

  initProducts(){
    this.products = new Product(this.data.products);
  },

  initHome(){
    this.home = new Home(this.data.products);
  },

  initScrolling(){
    const links = document.querySelectorAll(select.nav.links);
    for (const link of links){
      link.addEventListener('click',function(e){
        e.preventDefault();
        let id = this.getAttribute('href').slice(1);
        if(id == 'home'){
          id = select.containerOf.carousel;
        }
        //console.log(id);
        const target = document.getElementById(id) || document.querySelector(id);

        if(target){
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }

    window.addEventListener('scroll', function() {
      const icon = document.querySelector(select.header.scrollToTop);
      if (window.scrollY > 300) { 
        icon.style.display = 'block';
      } else {
        icon.style.display = 'none';
      }
    });

    document.querySelector(select.header.scrollToTop).addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });
  },

  generateMainTitle(){
    const index = Math.floor(Math.random()*this.data.mainTitles.length);
    console.log(index);
    const mainTitle = this.data.mainTitles[index];
    const wordsArr = mainTitle.split(' ');
    let firstLine = '';
    let secondLine = '';

    if(wordsArr.length % 2 == 0){
      for(let i = 0;i < .5*wordsArr.length; i++){
        firstLine += ' ' + wordsArr[i];
      }
      for(let j = .5*wordsArr.length;j < wordsArr.length;j++){
        secondLine += ' ' + wordsArr[j];
      }
    } else {
      for(let k = 0;k < Math.floor(.5*wordsArr.length);k++){
        firstLine += ' ' + wordsArr[k];
      }
      for(let l = Math.floor(.5*wordsArr.length);l < wordsArr.length;l++){
        secondLine += ' ' + wordsArr[l];
      }
    }
    
    document.querySelector(select.header.firstLine).innerHTML = firstLine;
    document.querySelector(select.header.secondLine).innerHTML = secondLine;
  }
};

app.init();