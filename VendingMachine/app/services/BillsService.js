import { AppState } from "../AppState.js"
import { Duck } from "../models/DuckModels.js";

class BillsService {

    inputBillsToTotal() {

        // console.log('bill input on service');
        AppState.bills += 5
        console.log(AppState.bills);
    }


    consumeBills() {
        if (AppState.bills < 1) {
            window.alert('u need more bills for that quacker mr')
        }
        return
        let duckPrice =
            AppState.bills = - Duck.


    }
}
export const billService = new BillsService()