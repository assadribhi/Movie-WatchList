import OriginalMovieList from "../../Movies";
import { decorate, observable } from "mobx";

class WatchStore {
  items = OriginalMovieList;

  createNewItem = (newItem) => {
    newItem.id =
      this.items.length !== 0 ? this.items[this.items.length - 1].id + 1 : 1;
    newItem.status = true;
    this.items.push(newItem);
  };

  createWatchedItem = (newItem) => {
    newItem.id =
      this.items.length !== 0 ? this.items[this.items.length - 1].id + 1 : 1;
    newItem.status = false;
    this.items.push(newItem);
  };

  deleteItem = (itemId) => {
    this.items = this.items.filter((item) => item.id !== itemId);
  };
}
decorate(WatchStore, {
  items: observable,
  watcheditems: observable,
});

const watchStore = new WatchStore(); //instance of class
export default watchStore;
