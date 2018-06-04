import {expect} from 'chai';
import {GildedRose} from '../app/gilded-rose';
import * as util from "util";
import {Item} from "../app/item";

let agedBrie = "Aged Brie";
let backstagePass = "Backstage passes to a TAFKAL80ETC concert";
let sulfras = "Sulfuras, Hand of Ragnaros";

function updateMany(gildedRose) {
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
}

describe('Gilded Rose', function () {

    it('starting with zero', function () {
        const gildedRose = new GildedRose([
            new Item('foo', 0, 0),
            new Item(agedBrie, 0, 0),
            new Item(backstagePass, 0, 0),
            new Item(sulfras, 0, 0),
        ]);
        const items = gildedRose.updateQuality();

        expect(items).eql([
            {"name": "foo", "sellIn": -1, "quality": 0}, {
                "name": agedBrie,
                "sellIn": -1,
                "quality": 2
            }, {
                "name": backstagePass,
                "sellIn": -1,
                "quality": 0
            },
            {"name": sulfras, "sellIn": 0, "quality": 0}])
    });

    it('starting with two', function () {
        const gildedRose = new GildedRose([
            new Item('foo', 2, 2),
            new Item(agedBrie, 2, 2),
            new Item(backstagePass, 2, 2),
            new Item(sulfras, 2, 2),
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();

        expect(items).eql([{"name": "foo", "sellIn": -1, "quality": 0}, {
            "name": "Aged Brie",
            "sellIn": -1,
            "quality": 6
        }, {
            "name": "Backstage passes to a TAFKAL80ETC concert",
            "sellIn": -1,
            "quality": 0
        }, {"name": "Sulfuras, Hand of Ragnaros", "sellIn": 2, "quality": 2}])
    });


    it('starting with a lot', function () {
        const gildedRose = new GildedRose([
            new Item('foo', 15, 30),
            new Item(agedBrie, 15, 30),
            new Item(backstagePass, 15, 30),
            new Item(sulfras, 15, 30),
        ]);
        updateMany(gildedRose);
        let items = gildedRose.updateQuality();

        expect(items).eql([{"name": "foo", "sellIn": 6, "quality": 21}, {
            "name": "Aged Brie",
            "sellIn": 6,
            "quality": 39
        }, {
            "name": "Backstage passes to a TAFKAL80ETC concert",
            "sellIn": 6,
            "quality": 43
        }, {"name": "Sulfuras, Hand of Ragnaros", "sellIn": 15, "quality": 30}])
        updateMany(gildedRose);
        items = gildedRose.updateQuality();
        expect(items).eql([{"name": "foo", "sellIn": -3, "quality": 9}, {
            "name": "Aged Brie",
            "sellIn": -3,
            "quality": 50
        }, {
            "name": "Backstage passes to a TAFKAL80ETC concert",
            "sellIn": -3,
            "quality": 0
        }, {"name": "Sulfuras, Hand of Ragnaros", "sellIn": 15, "quality": 30}])
    });
});
