import { makeAutoObservable } from "mobx";

type Iso = {
    value: number;
    invertedIndex: number;
}
type Weather = {
    value: string;
    id: number;
}
type fStop = {
    value: string;
    id : number;
}
class ExposureStore {
    iso: Iso = {
        value: 160,
        invertedIndex: 3
      };
    fStop: fStop = {
        value: "11",
        id: 5
    }
weather: Weather = {
        value: "Sunny",
        id: 0
    };
result: string = "";
isoInvertedIndex: number = 3;

  constructor() {
    makeAutoObservable(this);
  }

  setFstop(value:number) {
      this.fStop.value = value === 1 ? '2' : value === 2 ? '2.8' : value === 3 ? '4' : value === 4 ? '5.6' : value === 5 ? '8' : value === 6 ? '11' : value === 7 ? '16' : value === 8 ? '22' : '32';
      this.fStop.id = value - 1;
      console.log("fStop: ",this.fStop.value, this.fStop.id)
  }
  setIso(value: number, isoValue: number) {
      this.iso.value = value;
      this.iso.invertedIndex = isoValue===1?4:isoValue===2?3:isoValue===3?2:isoValue===4?1:0;
      console.log("iso: " + this.iso.value)
      console.log("invertedIndex: " + this.iso.invertedIndex)
  }
  setWeather(weather: string) {
      this.weather.value = weather;
      this.weather.id = weather === "Sunny" ? 0 : weather === "Cloudy" ? 1 : 2;
      console.log("weather: ",this.weather.value,this.weather.id)
    }
    setResult(result: string) {
        this.result = result;
        console.log("Result: ", this.result)
    }
}
export default new ExposureStore();