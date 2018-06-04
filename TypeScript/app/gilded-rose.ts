import {Item} from "./item";

function updateAgedBrie(item: Item) {
    if (item.sellIn <= 0) {
        item.increaseQuality(2);
    } else {
        item.increaseQuality();
    }
}

function updateBackstage(item) {
    if (item.sellIn >= 11) {
        item.increaseQuality(1);
    } else if (item.sellIn >= 6) {
        item.increaseQuality(2);
    } else if (item.sellIn > 0) {
        item.increaseQuality(3);
    } else {
        item.setQualityToZero();
    }
}

function updateNormal(item) {
    if (item.sellIn <= 0) {
        item.decreaseQuality(2);
    } else {
        item.decreaseQuality();
    }
}

function updateConjured(item) {
    if (item.sellIn <= 0) {
        item.decreaseQuality(4);
    } else {
        item.decreaseQuality(2);
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

        return this.items.map(item => item.getRaw());
    }

    updateItem(item) {
        const updateFunction = {
            'Sulfuras, Hand of Ragnaros': updateSulfras,
            'Backstage passes to a TAFKAL80ETC concert': updateBackstage,
            'Aged Brie': updateAgedBrie,
            'Conjured': updateConjured,
        }[item.name] || updateNormal
        updateFunction(item)
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.sellIn = item.sellIn - 1;
        }
    }


}
