const images = require.context('./images', false, /\.svg$/);


export class DisplayManager {
    constructor(container) {
        this.container = container
    }
    displayLoading() {
        this.container.innerHTML = ""
        const header = document.createElement("h3")
        header.textContent = "loading"
        this.container.appendChild(header)
    }
    displayError() {
        this.container.innerHTML = ""
        const header = document.createElement("h3")
        header.textContent = "No data found"
        this.container.appendChild(header)
    }
    displayWeatherData(data) {
        this.container.innerHTML = ""
        const title = document.createElement("h2")
        title.textContent = `${data.location} ${data.time}`
        this.container.appendChild(title)

        const image = document.createElement("img")
        image.src = images(`./${data.icon}.svg`)
        image.alt = data.icon
        this.container.appendChild(image)


        const extraInfo = document.createElement("div")
        extraInfo.classList.add("weather-info")

        extraInfo.appendChild(this.renderInfoSection(
            "Temperature", data.temperature, "temperature"))
        extraInfo.appendChild(this.renderInfoSection(
            "Rain Chance", data.rainChance, "rain-chance"))
        extraInfo.appendChild(this.renderInfoSection(
            "Wind Speed", data.windSpeed, "wind-speed"))

        this.container.appendChild(extraInfo)
    }
    renderInfoSection(headerText, value, className) {
        const infoContainer = document.createElement("div")
        infoContainer.classList.add(className, "info")

        const header = document.createElement("h3")
        header.textContent = headerText
        infoContainer.appendChild(header)

        const info = document.createElement("p")
        info.textContent = value
        infoContainer.appendChild(info)

        return infoContainer
    }
}