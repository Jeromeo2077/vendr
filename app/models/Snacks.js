



export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get HTMLSnackButtonTemplate() {
    return `
      <button class="btn btn-success m-3 snackButton"><p>${this.name}</p><p>${this.price.toFixed(2)}</p></button>
        `
  }


}