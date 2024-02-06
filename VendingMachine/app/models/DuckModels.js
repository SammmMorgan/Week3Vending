export class Duck {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

    get DuckCardHTMLTemplate() {
        return `
        <div class="col-4">

          <div class="card border-success">
            <img class="card-img-top" src="${this.imgUrl}" alt="Title" />
            <div class="card-body">
              <h4 class="card-title">${this.name}</h4>
              <button type="button" class="btn btn-success">${this.price}</button>
            </div>
          </div>
        </div>`
    }
}