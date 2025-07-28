import "./styles.css";
import { ApiManager } from "./ApiManager";
import { DisplayManager } from "./DisplayManager";

const apiManager = new ApiManager()
const weatherDisplay = document.querySelector(".weather")
const displayManager = new DisplayManager(weatherDisplay)

const data = apiManager.filterLocationData(await apiManager.getLocationData("london"))

displayManager.displayWeatherData(data)


document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault()
    displayManager.displayLoading()
    const form = event.target
    const formData = new FormData(form)
    const location = formData.get("location")
    try {
        const data = apiManager.filterLocationData(await apiManager.getLocationData(location))
        displayManager.displayWeatherData(data)
    } catch {
        displayManager.displayError()
    }
    form.reset()
})