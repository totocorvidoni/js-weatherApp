<template>
  <div id="report">
    <div v-if="loading">
      <h1>loading...</h1>
    </div>
    <div v-else-if="isEmpty(info)">
      <h1>Look for a city</h1>
    </div>
    <div v-else>
      <h1>{{ title }}</h1>
      <main>
        <div id="temp">{{ info.temp }}°</div>
        <div id="weather">
          <p id="weather-main">{{ info.weather.main }}</p>
          <p id="weather-description">{{ info.weather.description }}</p>
        </div>
      </main>
      <section class="more-info">
        <div class="info">
          <h2 class="info-title">Humidity:</h2>
          <p>{{ info.humidity }}%</p>
        </div>
        <div class="info">
          <h2 class="info-title">Pressure:</h2>
          <p>{{ info.pressure }} hpa</p>
        </div>
        <div class="info">
          <h2 class="info-title">Wind:</h2>
          <p>{{ info.wind.speed }} m/s</p>
        </div>
      </section>
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
    title: function() {
      return `${this.info.city}, ${this.info.country}`;
    },
    wind: function() {
      return `${this.info.wind.speed} m/s - ${this.info.wind.direction}°`;
    }
  }
};
</script>

<style lang="scss">
#report {
  display: grid;
  grid-gap: 2em;
  place-content: center;
  padding: 1em;

  h1 {
    text-align: center;
  }
}

main {
  display: flex;
  justify-content: space-evenly;
  font-weight: 700;
}

#temp {
  font-size: 3em;
}

#weather {
  text-align: center;
  margin: auto 0;
}

#weather-description {
  font-weight: 400;
  font-style: italic;
}

.more-info {
  display: flex;
  text-align: justify;
}

.info {
  padding: 0 1em;
}
</style>
