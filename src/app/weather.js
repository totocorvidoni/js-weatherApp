import Vue from 'vue';
import searchForm from './app-components/search-form.vue';
import report from './app-components/report.vue';

const weatherApp = new Vue({
  el: '#app',
  components: {
    searchForm,
    report,
  },
  data: {
    report: {},
    loadingReport: false,
    appId: '4ab32346d3eb123f343e0e23060ff597',
  },
  methods: {
    async saveReport(weatherReport) {
      this.report = await weatherReport;
    },

    onToggleLoading() {
      this.loadingReport = !this.loadingReport;
    },
  },
});
