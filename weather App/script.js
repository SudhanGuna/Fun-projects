let weather = {
    apiKey: "key",

    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            // Here the respone is get in JSON format
            // And we have entire infomation of the weather in object
            // In which we extracting only require paramenter likee temp name etc which mentioned in displayWeather
            .then((response) => response.json())
            .then((data) => console.log(this.displayWeather(data)))
    },

    displayWeather: function (data) {
        // Extracting values from objects in data which in json format refer openweatherAPI website
        // Here name is key in object and getting its value and storing in data
        // Here the weather key in object has values stroed in arrays so we gave index 0
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        // Here we changing the HTML input of respective parameters
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "humidity: " + humidity + "%rh";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".wind").innerHTML = "wind: " + speed + "km/h";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".card").classList.remove("hidden");

    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    },
};

document.querySelector(".search-btn").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});
