<template>
  <form @submit.prevent="$emit('new-report', getReport(city))">
    <input type="search" placeholder="Example: 'Trondheim'" v-model="city">
    <input type="submit" value="Go!">
  </form>
</template>

<script>
export default {
  props: {
    appId: String,
    loadingReport: Boolean
  },
  data() {
    return {
      city: ""
    };
  },
  methods: {
    async getRawReport(cityName) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${
            this.appId
          }`
        );
        const rawReport = await response.json();
        return rawReport;
      } catch (error) {
        alert(`Sorry there was an error: ${error.code}: ${error.message}`);
      }
    },

    cleanRawReport(rawReport) {
      const cleanReport = {
        city: rawReport.name,
        country: rawReport.sys.country,
        humidity: rawReport.main.humidity,
        pressure: rawReport.main.pressure,
        temp: Math.floor(rawReport.main.temp),
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
    },

    async getReport(cityName) {
      this.$emit("toggle-loading");
      try {
        const rawReport = await this.getRawReport(cityName);
        return this.cleanRawReport(rawReport);
      } catch (error) {
        alert(`Sorry there was an error on: ${error.code}: ${error.message}`);
      } finally {
        this.city = "";
        this.$emit("toggle-loading");
      }
    }
  }
};
</script>

<style lang="scss">
form {
  align-self: center;
  padding: 0 1em 1em 1em;

  [type="search"] {
    border: none;
    line-height: 24pt;
    border-radius: 0.5em;
    padding: 0 0.5em;
  }

  [type="submit"] {
    background: slategrey;
    border: 1px solid transparent;
    border-radius: 0.5em;
    font-size: 1.1em;
    font-weight: 700;
    color: white;
    cursor: pointer;
    padding: 0.5em;

    &:hover {
      border: 1px solid white;
    }
  }
}
</style>
