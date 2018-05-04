export class Product {


  private _productID: Number;
  private _name: string;
  private _price: Number;
  private _description: string;
  private _condition: string;
  private _coverpictureURL: string;
  private _picture2URL: string;
  private _picture3URL: string;
  private _sold: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  get productID(): Number {
    return this._productID;
  }

  set productID(value: Number) {
    this._productID = value;
  }
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  get price(): Number {
    return this._price;
  }

  set price(value: Number) {
    this._price = value;
  }
  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
  get condition(): string {
    return this._condition;
  }

  set condition(value: string) {
    this._condition = value;
  }

  get coverpictureURL(): string {
    return this._coverpictureURL;
  }

  set coverpictureURL(value: string) {
    this._coverpictureURL = value;
  }
  get picture2URL(): string {
    return this._picture2URL;
  }

  set picture2URL(value: string) {
    this._picture2URL = value;
  }
  get picture3URL(): string {
    return this._picture3URL;
  }

  set picture3URL(value: string) {
    this._picture3URL = value;
  }

  get sold(): boolean {
    return this._sold;
  }

  set sold(value: boolean) {
    this._sold = value;
  }
}
