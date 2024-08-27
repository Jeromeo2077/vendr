import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";

export class SnacksController {
  constructor() {
    console.log('SnacksController is loading');

    this.drawSnacks()
  }

  drawSnacks() {
    const snacks = AppState.snacks

    let snackHTML = ''
    snacks.forEach(snack => snackHTML += snack.HTMLSnackButtonTemplate)
    const snackElm = document.getElementById('snackButtons')
    snackElm.innerHTML = snackHTML

  }

  addQuarter() {
    snacksService.addQuarter()
  }
}