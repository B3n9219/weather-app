import "./styles.css";
import { ApiManager } from "./ApiManager";
import { DisplayManager } from "./DisplayManager";

const apiManager = new ApiManager()
const data = apiManager.filterLocationData(await apiManager.getLocationData("london"))

const weatherDisplay = document.querySelector(".weather")
const displayManager = new DisplayManager(weatherDisplay, data)
displayManager.renderWeatherInfo()