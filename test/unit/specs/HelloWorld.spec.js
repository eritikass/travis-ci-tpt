import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to someone homepage!');
  });

  it('we have 2 buttons in div.buttons', ()   => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelectorAll('div.buttons button').length).toBe(2);
  });
});
