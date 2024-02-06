import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Duck } from './models/DuckModels.js'

class ObservableAppState extends EventEmitter {

  bills = 0

  ducks = [
    new Duck(
      {
        name: 'Larry',
        price: 100,
        imgUrl: 'https://images.unsplash.com/photo-1459682687441-7761439a709d?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ),
    new Duck(
      {
        name: `Larry's Cousin Kyle`,
        price: 8.00,
        imgUrl: 'https://images.unsplash.com/photo-1563409236302-8442b5e644df?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ),
    new Duck(
      {
        name: `Larry's Cousin Okri`,
        price: 1000,
        imgUrl: 'https://images.unsplash.com/photo-1555852095-64e7428df0fa?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ),
    new Duck(
      {
        name: 'Kirk and Emily',
        price: 250,
        imgUrl: 'https://plus.unsplash.com/premium_photo-1667173835640-20a03a45a71e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    )

  ]

}

export const AppState = createObservableProxy(new ObservableAppState())