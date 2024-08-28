import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";

export class SnacksController {
  constructor() {
    console.log('SnacksController is loading');

    this.drawSnacks()
    this.drawMoney()
    AppState.on('money', this.drawMoney)
  }

  drawSnacks() {
    const snacks = AppState.snacks

    let snackHTML = ''
    snacks.forEach(snack => snackHTML += snack.HTMLSnackButtonTemplate)
    const snackElm = document.getElementById('snackButtons')
    snackElm.innerHTML = snackHTML
  }


  drawMoney() {
    const money = AppState.money

    const moneyElm = document.getElementById('money')
    moneyElm.innerText = money.toString()
  }

  addQuarter() {
    snacksService.addQuarter()
  }
}