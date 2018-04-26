import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to someone homepage!');
  });

  it('we have 4 buttons in div.buttons', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const number = vm.$el.querySelectorAll('div.buttons button').length;
    expect(number).toBe(4);
    expect(number).toMatchSnapshot();
  });

  it('match buttons html', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const html = vm.$el.querySelector('div.buttons').innerHTML;
    console.log('html', html);
    expect(html).toMatchSnapshot();
  });
});
