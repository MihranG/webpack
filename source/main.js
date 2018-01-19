import './styles/index.less';
import storage from './storage';
import increment from './app.js';

function component() {
    const button = document.createElement('button'),
          div = document.createElement('div'),
          h1 = document.createElement('h1');
        
          h1.innerHTML = storage.clicks;
          h1.id = 'count';
          button.innerHTML = 'Click';

          div.appendChild(button);
          button.onclick = increment; 
          div.appendChild(h1);

          return div;
};

let comp = component();
document.body.appendChild(comp);

if (module.hot) {
    module.hot.accept();
    document.body.innerHTML='';
    comp = component();
    document.body.appendChild(comp);;
}