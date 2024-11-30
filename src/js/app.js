import { settings } from './settings.js';

const app = {
  init: function(){
    this.initData();
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
      })
      .then(() => {
        console.log(this.data.products);
      });
  }
};

app.init();