



export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get HTMLSnackButtonTemplate() {
    return `
      <button class="btn btn-outline-dark fs-1">Jerky</button>
        `
  }


}