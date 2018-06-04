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

const updateStrategies = {
    'Sulfuras, Hand of Ragnaros': updateSulfras,
    'Backstage passes to a TAFKAL80ETC concert': updateBackstage,
    'Aged Brie': updateAgedBrie,
};

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateItem() {
        this.updateQuality();

        if (this.name != 'Sulfuras, Hand of Ragnaros') {
            this.sellIn = this.sellIn - 1;
        }
    }

    private updateQuality() {
        let item = this;
        const updateFunction = updateStrategies[item.name] || updateNormal
        updateFunction(item)
    }

    public setQualityToZero() {
        this.quality = 0
    }

    public decreaseQuality() {
        if (this.quality > 0) {
            this.quality = this.quality - 1
        }
    }

    public increaseQuality() {
        if (this.quality < 50) {
            this.quality = this.quality + 1
        }
    }

    getRaw() {
        return {
            name: this.name,
            quality: this.quality,
            sellIn: this.sellIn,
        }
    }

}