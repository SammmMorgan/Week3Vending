import { BillsController } from "./controllers/BillsController.js";
import { DucksController } from "./controllers/DucksController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [BillsController, DucksController],
    view: ``
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])