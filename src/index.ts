import Binder from './binder';

import ViewModel from './view-model';

const viewModel = new ViewModel({
  data: {
    name: ''
  },
  options: {
    methods: {
      changeName: function () {
        this.setData({
          name: 'Yunjae'
        });
      },
      alertName: function () {
        alert(this.data.name);
      }
    }
  }
});

const binder = new Binder({
  el: '#app'
});

binder.bind(viewModel);
