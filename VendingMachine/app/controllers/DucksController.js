import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";


function _drawDucks() {
    console.log('drawing ducks');
    const ducks = AppState.ducks

    let htmlString = ''

    ducks.forEach(duck => htmlString += duck.DuckCardHTMLTemplate)
    setHTML('DuckCards', htmlString)
}


export class DucksController {
    constructor() {
        console.log('duck controller invovled');
        _drawDucks()
    }

}