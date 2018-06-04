import {Item} from "./item";

function updateAgedBrie(item: Item) {
    item.increaseQuality();
    if (item.sellIn <= 0) {
        item.increaseQuality();
    }
}

function updateBackstage(item) {
    item.increaseQuality();
    if (item.sellIn < 11) {
        item.increaseQuality();
    }
    if (item.sellIn < 6) {
        item.increaseQuality();
    }
    if (item.sellIn <= 0) {
        item.setQualityToZero();
    }
}

function updateNormal(item) {
    item.decreaseQuality();
    if (item.sellIn <= 0) {
        item.decreaseQuality();
    }
}

function updateSulfras(item) {

}
export class GildedRose {
    items: Array<Item>;

    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            this.updateItem(item);
        }

        return this.items.map(item=>item.getRaw());
    }

    updateItem(item) {
        const updateFunction = {
            'Sulfuras, Hand of Ragnaros': updateSulfras,
            'Backstage passes to a TAFKAL80ETC concert': updateBackstage,
            'Aged Brie': updateAgedBrie,
        }[item.name] || updateNormal
        updateFunction(item)
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.sellIn = item.sellIn - 1;
        }
    }


}
