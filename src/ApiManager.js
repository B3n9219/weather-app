// const image = document.querySelector("img")
// image.src = images(`./clear-day.svg`)
// console.log(images(`./clear-day.svg`))

export class ApiManager {
    constructor() {
        this.apiKey = "6NCXL4P4T2WWKND8DQ7DKY9R8"
        this.baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline"
    }
    async getLocationData(location) {
        const response = await fetch(`${this.baseURL}/${location}?key=${this.apiKey}`, { mode:"cors"})
        return await response.json()
    }
    filterLocationData(data) {
        console.log("filtering data", data)
        const conditions = data.currentConditions
        return {
            location: data.address,
            time: conditions.datetime,
            icon: conditions.icon,
            temperature: 66.4,
            rainChance: conditions.precipprob,
            windSpeed: conditions.windspeed
        }
    }
}