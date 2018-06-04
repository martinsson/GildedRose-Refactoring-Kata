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

    public decreaseQuality(amount = 1) {
        this.quality = Math.max(0, this.quality - amount)
    }

    public increaseQuality(amount = 1) {
        this.quality = Math.min(50, this.quality + amount)
    }

    getRaw() {
        return {
            name: this.name,
            quality: this.quality,
            sellIn: this.sellIn,
        }
    }

}