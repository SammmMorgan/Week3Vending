import { BillsController } from "./controllers/BillsController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [BillsController],
    view: ``
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])