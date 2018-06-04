import {Item} from "./item";


export class GildedRose {
    items: Array<Item>;

    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            item.updateItem();
        }

        return this.items.map(item=>item.getRaw());
    }
}
