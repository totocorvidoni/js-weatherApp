import Vue from 'vue';
import searchForm from './app-components/search-form.vue';

const weatherApp = new Vue({
  el: '#app',
  components: {
    searchForm,
  },
  data: {
    report: '',
    appId: '4ab32346d3eb123f343e0e23060ff597',
  },
  methods: {
    async saveReport(report) {
      this.report = await report;
    },
  },
});
