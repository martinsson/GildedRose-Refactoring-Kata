package com.gildedrose;

import static org.junit.Assert.*;

import org.approvaltests.legacycode.LegacyApprovals;
import org.approvaltests.reporters.DiffReporter;
import org.approvaltests.reporters.UseReporter;
import org.approvaltests.reporters.macosx.DiffMergeReporter;
import org.approvaltests.reporters.macosx.KDiff3Reporter;
import org.junit.Test;

public class GildedRoseTest {

    @Test
    public void lockDown() throws Exception {
        String[] itemNames = {"foo", "Aged Brie", "Backstage passes to a TAFKAL80ETC concert", "Sulfuras, Hand of Ragnaros"};
        Object[] qualities = {0, 1, 3, 47, 48, 49, 50, 51};
        Object[] sellIns = {0, 4, 5, 6, 11, 12};
        Object[][] variations = {itemNames, sellIns, qualities};
        LegacyApprovals.LockDown(this, "testOneItem", variations);
    }

    public String testOneItem(String itemName, Integer sellIn, Integer quality) {
        Item[] items = new Item[] { new Item(itemName, sellIn, quality) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        Item item = app.items[0];
        return item.toString();
    }

}
