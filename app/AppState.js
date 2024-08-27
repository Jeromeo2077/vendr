import { Snack } from './models/Snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  snacks = [
    new Snack({ name: 'Soda', price: 1.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Chips', price: 2.00, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Cookies', price: 3.00, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Jerky', price: 4.00, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Eggs', price: 2.00, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Cheese', price: 2.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Bacon', price: 4.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
  ]

  money = 0

}

export const AppState = createObservableProxy(new ObservableAppState())