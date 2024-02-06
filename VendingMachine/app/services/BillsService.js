import { AppState } from "../AppState.js"

class BillsService {

    inputBillsToTotal() {

        // console.log('bill input on service');
        AppState.bills += 5
        console.log(AppState.bills);
    }

}
export const billService = new BillsService()