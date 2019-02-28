<template>
  <form action="#" @submit.prevent="$emit('new-report', getReport(city))">
    <input type="search" placeholder="Look for your city" v-model="city">
    <input type="submit">
  </form>
</template>

<script>
export default {
  props: {
    appId: String
  },
  data() {
    return {
      city: ""
    };
  },
  methods: {
    async getReport(cityName) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${
            this.appId
          }`
        );
        const rawReport = await response.json();
        return this.cleanRawReport(rawReport);
      } catch (error) {
        alert(`Sorry there was an error: ${error.code}: ${error.message}`);
      }
    },

    cleanRawReport(rawReport) {
      const cleanReport = {
        city: rawReport.name,
        humidity: rawReport.main.humidity,
        pressure: rawReport.main.pressure,
        temp: rawReport.main.temp,
        weather: {
          description: rawReport.weather[0].description,
          main: rawReport.weather[0].main
        },
        wind: {
          direction: rawReport.wind.deg,
          speed: rawReport.wind.speed
        }
      };
      return cleanReport;
    }
  }
};
</script>

<style lang="sass">

</style>
