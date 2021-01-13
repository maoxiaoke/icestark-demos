import { registerMicroApps, start } from '@ice/stark';

export default async function boostrap () {
  const apps = [{
    name: 'seller',
    activePath: '/seller',
    title: '商家平台',
    sandbox: true,
    container: document.getElementById('root'),
    // React app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-seller-react-16
    umd: true, // for test
    url: [
      'http://localhost:3000/javascripts/app.js', // For test
      // '//ice.alicdn.com/icestark/child-seller-react/index.js',
      '//ice.alicdn.com/icestark/child-seller-react/index.css',
    ],
  }, {
    name: 'waiter',
    activePath: '/waiter',
    title: '小二平台',
    sandbox: true,
    container: document.getElementById('root'),
    url: [
      // Vue app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-waiter-vue-2
      '//ice.alicdn.com/icestark/child-waiter-vue/app.js',
      '//ice.alicdn.com/icestark/child-waiter-vue/app.css',
    ],
  }, {
    name: 'angular',
    activePath: '/angular',
    title: 'Angular',
    // sandbox: true,
    container: document.getElementById('root'),
    // Angular app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-common-angular-9
    entry: '//ice.alicdn.com/icestark/child-common-angular/index.html',
  }];

  registerMicroApps(apps);

  start();
};

