import { classNames, select, templates } from './settings.js';
import { utils } from './utils.js';
/* global Flickity */

class Home{
  constructor(data){
    this.data = data;
    this.dom = {};

    this.render();
    this.removeFooter();
    this.prepareAbout();
    this.renderAbout();
    this.getElements();
    this.initCarousel();
  }

  render(){
    const generatedHTML = templates.products(this.data);
    this.element = utils.createDOMFromHTML(generatedHTML);
    const productsContainer = document.querySelector(select.containerOf.home);
    productsContainer.appendChild(this.element);
  }

  removeFooter(){
    this.element.querySelector(select.home.footer).remove();
  }

  prepareAbout(){
    const div = document.createElement('div');
    div.classList.add(classNames.home.aboutWrapper);
    this.dom.lastElement = document.querySelector(select.home.homeWrapper);
    this.dom.lastElement.insertAdjacentElement('afterend', div);
  }
  
  renderAbout(){
    const generatedHTML = templates.about();
    this.carousel = utils.createDOMFromHTML(generatedHTML);
    this.dom.about = document.querySelector(select.home.aboutWrapper);
    this.dom.about.appendChild(this.carousel);
  }

  getElements(){
    this.dom.carousel = document.querySelector(select.home.carousel);
  }

  initCarousel(){
    const flkty = new Flickity(this.dom.carousel,{
      cellAlign: 'center',
      contain: false,
      autoPlay: 5000,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
    });
    flkty.used = true;
  }
}

export default Home;