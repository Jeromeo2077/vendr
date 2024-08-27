import { AppState } from "../AppState.js"

class SnacksService {
  constructor() {

  }

  addQuarter() {
    AppState.money += .25
    console.log(AppState.money)
  }
}

export const snacksService = new SnacksService()

