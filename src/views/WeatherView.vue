<template>
  <div class="parent">
    <div class="child">
      <div class="child2">
        <form class="form">
          <input
            type="text"
            placeholder="Enter a city..."
            :class="err"
            v-model="city"
          />
          <button @click.prevent="getData">serch</button>
        </form>
        <!-- <div v-if="weather.name == undefined">
          <h1>{{ city }} city makaynach</h1>
        </div> -->
        <div v-if="weather.name !== undefined">
          <div class="info">
            <div class="head">
              <div>
                <img :src="require('@/assets/pressure.png')" alt="" />
                {{ weather.main.pressure }}hPa
              </div>
              <div>
                <img :src="require('@/assets/humidity.png')" alt="" />
                {{ weather.main.humidity }}%
              </div>
              <div>
                <img :src="require('@/assets/wind.png')" alt="" />
                {{ weather.wind.speed }}m/s
              </div>
            </div>
            <div class="temp">
              {{ Math.floor(weather.main.temp - 273.15) }}<span>°C</span>
            </div>
            <div class="city">
              {{ weather.name }}, {{ weather.sys.country }}
            </div>
            <div class=".desc">{{ weather.weather[0].description }}</div>
            <div class="img">
              <img :src="icon" alt="icon" />
            </div>
          </div>
          <!-- http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "",
      weather: {},
      icon: "",
      err: "",
    };
  },
  methods: {
    async getWeather() {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=7aa369ece7e8f58bb59291029700b587`
      )
        .then((res) => res.json())
        .then((data) => (this.weather = data))
        .then(
          (data) =>
            (this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        )
        .catch((error) => console.log(error));
    },
    getData() {
      if (this.city === "") {
        this.err = "err";
      } else {
        this.err = "";
        this.getWeather();
        this.city = "";
        if (this.weather.name == undefined) console.log("hhh");
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}

.parent {
  background-color: #58bac9;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.child {
  /* background-color: wheat; */
  width: 50%;
  /* padding: 0 30px ; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  /* background-color: #ffffff4f; */
}

.child2 {
  /* background-color: blue; */
  margin: 0 auto;
  width: 80%;
  /* padding: 10px; */
}

.form {
  /* background-color: aqua; */
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.form input {
  width: 73%;
  padding: 10px;
  font-size: 16px;
  border: none;
  /* text-transform: capitalize; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.3s ease;
}

.form input:focus {
  outline: none;
  /* background-color: #ffffffef; */
  /* border: #58bac9 1px solid; */
  transform: scale(1.02);
}

.form button {
  width: 25%;
  padding: 10px;
  font-size: 18px;
  border: none;
  text-transform: uppercase;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #ffffff1f;
  color: white;
  transition: 0.3s ease;
  cursor: pointer;
}
.form button:hover {
  background-color: #ffffff2f;
  transform: scale(1.02);
}

.info {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #ffffff1f;
  /* border-radius: 10px; */
  padding: 5px;
  color: #fff;
}

.info div {
  margin-top: 15px;
}

.temp {
  font-size: 110px;
  display: flex;
  /* background-color: bisque; */
  text-align: center;
  justify-content: center;
}
.temp span {
  font-size: 40px;
  margin-top: 15px;
}

.city {
  /* background-color: antiquewhite; */
  font-size: 25px;
  text-align: center;
  margin-top: 10px;
}

.desc {
  text-align: center;
  /* margin-bottom: 15px; */
  font-size: 20px;
}

.head {
  /* background-color: antiquewhite; */
  display: flex;
  justify-content: space-around;
  margin: 25px 0;
  font-size: 20px;
}

.head img {
  width: 28px;
  margin-right: 5px;
}
.head div {
  /* background-color: antiquewhite; */
  display: flex;
  align-items: center;
}

.img {
  text-align: center;
}

.img img {
  width: 150px;
}

@media screen and (max-width: 992px) {
  .child {
    width: 70%;
  }
}

@media screen and (max-width: 550px) {
  .child {
    width: 90%;
  }
  .child2 {
    width: 90%;
  }
}

@media screen and (max-width: 400px) {
  .child {
    width: 100%;
  }
  .child2 {
    width: 95%;
  }
}
.err {
  background-color: rgb(255, 198, 198);
}
</style>
