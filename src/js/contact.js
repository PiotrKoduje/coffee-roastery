import  {templates, select, settings} from './settings.js';
import { utils } from './utils.js';

class Contact{
  constructor(element){
    this.render(element);
    this.initActions();
  }

  render(element){
    const generatedHTML = templates.contact();
    this.dom = {};
    this.dom.wrapper = element;
    this.dom.wrapper.innerHTML = generatedHTML;
    this.dom.name = element.querySelector(select.contact.name);
    this.dom.title = element.querySelector(select.contact.title);
    this.dom.message = element.querySelector(select.contact.message);
    this.dom.submit = element.querySelector(select.contact.submit);
  }

  initActions(){
    this.dom.submit.addEventListener('click',(e) =>{
      e.preventDefault();
      this.sendMessage();
    });
  }

  sendMessage(){
    const url = settings.db.url + '/' + settings.db.messages;
    const payload = {};

    payload.name = this.dom.name.value;
    payload.title = this.dom.title.value;
    payload.message = this.dom.message.value;
    payload.time = utils.formatDate(new Date());

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url,options)
      .then(() => {
        alert('Message sent');
      }).then(() => {
        this.clearForm();
      });
  }

  clearForm(){
    this.dom.name.value = '';
    this.dom.title.value = '';
    this.dom.message.value = '';
  }
}

export default Contact;