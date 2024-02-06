import { AppState } from "../AppState.js"
import { billService } from "../services/BillsService.js"
import { setText } from "../utils/Writer.js"

function _drawBills() {
    setText('billsCount', `Current Bills: ${AppState.bills}`)
}

export class BillsController {

    constructor() {
        // console.log('bill controller loaded');
        AppState.on('bills', _drawBills)

    }
    inputBillsToTotal() {
        // console.log('logged click');
        billService.inputBillsToTotal()
    }
}