import "./styles.css";
import {ApiManager} from "./ApiManager";

const apiManager = new ApiManager()
const data = await apiManager.getLocationData("london")
console.log(apiManager.filterLocationData(data))