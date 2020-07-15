import OriginalMovieList from "../../Movies";
import { decorate, observable } from "mobx";

class WatchStore {
  items = OriginalMovieList;

  // watchMovie = (movie) => {
  //   this.watcheditems.push()
  // };

  createItem = (newItem) => {
    newItem.id =
      this.items.length !== 0 ? this.items[this.items.length - 1].id + 1 : 1;
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
