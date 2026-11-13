/*
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4)
helper.pageCount() // should == 2
helper.itemCount() // should == 6
helper.pageItemCount(0) // should == 4
helper.pageItemCount(1) // last page - should == 2
helper.pageItemCount(2) // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5) // should == 1 (zero based index)
helper.pageIndex(2) // should == 0
helper.pageIndex(20) // should == -1
helper.pageIndex(-10) // should == -1*/
//solution
export class PaginationHelper {
  public constructor(
    public collection: unknown[],
    public itemsPerPage: number,
  ) {}

  public itemCount(): number {
    return this.collection.length;
  }

  public pageCount(): number {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  public pageItemCount(pageIndex: number): number {
    if (!(pageIndex >= 0 && pageIndex < this.pageCount())) {
      return -1;
    }
    const itemsCountCorrespondingIPages: number[] = [];
    let counter = this.collection.length;
    for (let i = 0; i < this.collection.length; i++) {
      if (counter >= this.itemsPerPage) {
        counter = counter - this.itemsPerPage;
        itemsCountCorrespondingIPages.push(this.itemsPerPage);
      } else {
        itemsCountCorrespondingIPages.push(counter);
      }
    }

    return itemsCountCorrespondingIPages[pageIndex];
  }

  public pageIndex(itemIndex: number): number {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (!(itemIndex >= 0 && itemIndex < this.collection.length)) {
      return -1;
    }
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
