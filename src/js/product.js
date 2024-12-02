import { select, templates } from './settings.js';
import { utils } from './utils.js';

class Product{
  constructor(data){
    this.data = data;
    
    this.render();
  }
  
  render(){
    const generatedHTML = templates.products(this.data);
    this.element = utils.createDOMFromHTML(generatedHTML);
    const productsContainer = document.querySelector(select.containerOf.products);
    productsContainer.appendChild(this.element);
  }
}

export default Product;