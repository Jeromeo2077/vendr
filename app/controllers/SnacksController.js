import { AppState } from "../AppState.js";

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
}