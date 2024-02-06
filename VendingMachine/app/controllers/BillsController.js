import { billService } from "../services/BillsService.js"

export class BillsController {

    constructor() {
        // console.log('bill controller loaded');


    }
    inputBillsToTotal() {
        // console.log('logged click');
        billService.inputBillsToTotal()
    }
}