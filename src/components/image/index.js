import JImage from './src/main';
/* istanbul ignore next */
JImage.install = function(Vue) {
  Vue.component(JImage.name, JImage);
};

export default JImage;
