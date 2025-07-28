const images = require.context('./images', false, /\.svg$/);


export class DisplayManager {
    constructor(container, weatherData) {
        this.container = container
        this.weatherData = weatherData
    }
    renderWeatherInfo() {
        const title = document.createElement("h2")
        title.textContent = `${this.weatherData.location} ${this.weatherData.time}`
        this.container.appendChild(title)

        const image = document.createElement("img")
        image.src = images(`./${this.weatherData.icon}.svg`)
        image.alt = this.weatherData.icon
        this.container.appendChild(image)


        const extraInfo = document.createElement("div")

        const temperatureContainer = document.createElement("div")
        temperatureContainer.appendChild(this.renderInfoHeader("Temperature"))

        const temperature = document.createElement("p")
        temperature.textContent = this.weatherData.temperature
        temperatureContainer.appendChild(temperature)

        const rainChanceContainer = document.createElement("div")
        rainChanceContainer.appendChild(this.renderInfoHeader("Rain Chance"))

        const rainChance = document.createElement("p")
        rainChance.textContent = this.weatherData.rainChance
        rainChanceContainer.appendChild(rainChance)

        const windSpeedContainer = document.createElement("div")
        windSpeedContainer.appendChild(this.renderInfoHeader("Wind Speed"))

        const windSpeed = document.createElement("p")
        windSpeed.textContent = this.weatherData.windSpeed
        windSpeedContainer.appendChild(windSpeed)

        extraInfo.appendChild(temperatureContainer)
        extraInfo.appendChild(rainChanceContainer)
        extraInfo.appendChild(windSpeedContainer)


        this.container.appendChild(extraInfo)
    }
    renderInfoSection(name, value, className) {

    }
    renderInfoHeader(name) {
        const infoHeader = document.createElement("h3")
        infoHeader.textContent = name
        return infoHeader
    }
}