


export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
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