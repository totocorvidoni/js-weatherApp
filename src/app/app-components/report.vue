<template>
  <div id="report">
    <div v-if="loading">
      <span>loading...</span>
    </div>
    <div v-else-if="isEmpty(info)">
      <span>Look for a city</span>
    </div>
    <div v-else>
      <h1>{{ title }}</h1>
      <main>
        <div id="temp">{{ info.temp}}°</div>
        <div id="weather">
          <span id="weather-main">{{ info.weather.main }}</span>
          <span id="weather-description">{{ info.weather.description }}</span>
        </div>
      </main>
      <div class="info">
        <div id="humidity">Humidity: {{info.humidity}}%</div>
        <div id="pressure">Pressure: {{info.pressure}} hpa</div>
        <div id="wind">
          <span id="wind-speed">Wind: Speed {{info.wind.speed}} m/s</span>
          <span id="wind-direction">Direction {{info.wind.direction}}°</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
    loading: Boolean
  },
  methods: {
    isEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }
      return true;
    }
  },
  computed: {
    title() {
      return `${this.info.city}, ${this.info.country}`;
    }
  }
};
</script>

<style lang="scss">
  #report {
    display: grid;
    place-content: center;
  }
</style>
