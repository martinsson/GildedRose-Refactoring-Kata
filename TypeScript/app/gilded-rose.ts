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
        if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.quality > 0) {
                if (this.name != 'Sulfuras, Hand of Ragnaros') {
                    this.quality = this.quality - 1
                }
            }
        } else {
            if (this.quality < 50) {
                this.quality = this.quality + 1
                if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (this.sellIn < 11) {
                        if (this.quality < 50) {
                            this.quality = this.quality + 1
                        }
                    }
                    if (this.sellIn < 6) {
                        if (this.quality < 50) {
                            this.quality = this.quality + 1
                        }
                    }
                }
            }
        }
        if (this.name != 'Sulfuras, Hand of Ragnaros') {
            this.sellIn = this.sellIn - 1;
        }
        if (this.sellIn < 0) {
            if (this.name != 'Aged Brie') {
                if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
                    if (this.quality > 0) {
                        if (this.name != 'Sulfuras, Hand of Ragnaros') {
                            this.quality = this.quality - 1
                        }
                    }
                } else {
                    this.quality = this.quality - this.quality
                }
            } else {
                if (this.quality < 50) {
                    this.quality = this.quality + 1
                }
            }
        }
    }
    getRaw() {
        return {
            name:this.name,
            quality: this.quality,
            sellIn:this.sellIn,
        }
    }

}


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
