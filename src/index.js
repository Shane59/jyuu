import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';

// export const initGA = () => {
//   ReactGA.initialize('G-Y4W59DCDL1');
// }

// export const GApageView = (page) => {
//   console.log('pageView' + page);
    
//   ReactGA.pageview(page);
//   ReactGA.set({ page: 'home' });
//   ReactGA.pageview('/');
// }

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-Y4W59DCDL1');
};

ReactDOM.render(
  <React.StrictMode>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-Y4W59DCDL1"  
    />
    <script>{injectGA()}</script>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
