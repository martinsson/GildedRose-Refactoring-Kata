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
        if (this.name == 'Aged Brie') {
            this.increaseQuality();
            if (this.sellIn <= 0) {
                this.increaseQuality();
            }
        } else if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
            this.quality = this.quality + 1;
            if (this.sellIn < 11) {
                this.increaseQuality();
            }
            if (this.sellIn < 6) {
                this.increaseQuality();
            }
            if (this.sellIn <= 0) {
                this.setQualityToZero();
            }
        } else if (this.name != 'Sulfuras, Hand of Ragnaros') {
            this.decreaseQuality();
            if (this.sellIn <= 0) {
                this.decreaseQuality();
            }
        }

        if (this.name != 'Sulfuras, Hand of Ragnaros') {
            this.sellIn = this.sellIn - 1;
        }


    }

    private setQualityToZero() {
        this.quality = 0
    }

    private decreaseQuality() {
        if (this.quality > 0) {
            this.quality = this.quality - 1
        }
    }

    private increaseQuality() {
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