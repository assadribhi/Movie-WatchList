import OriginalMovieList from "../../Movies";
import { decorate, observable } from "mobx";

class WatchStore {
  items = OriginalMovieList;
  watcheditems = OriginalMovieList;

  createItem = (newItem) => {
    if (this.items.status) {
      newItem.id = this.items[this.items.length - 1].id + 1;
      this.items.push(newItem);
    }
    {
      newItem.id = this.watcheditems[this.watcheditems.length - 1].id + 1;
      this.watcheditems.push(newItem);
    }
  };

  deleteItem = (itemId) => {
    if (this.items.status) {
      this.items = this.items.filter((item) => item.id !== itemId);
    }
    {
      this.watcheditems = this.watcheditems.filter(
        (item) => item.id !== itemId
      );
    }
  };
}

decorate(WatchStore, {
  items: observable,
  watcheditems: observable,
});

const watchStore = new WatchStore(); //instance of class
export default watchStore;
