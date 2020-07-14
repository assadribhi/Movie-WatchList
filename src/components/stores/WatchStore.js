import OriginalMovieList from "../../MovieItems";
import { decorate, observable } from "mobx";

class WatchStore {
  items = OriginalMovieList;

  //   createItem = (newItem) => {
  //     newItem.id = this.items[this.items.length - 1].id + 1;
  //     newItem.slug = slugify(newItem.name);
  //     this.items.push(newItem);
  //   };

  //   updateItem = (updatedItem) => {
  //     const item = this.items.find((item) => item.id === updatedItem.id);
  //     for (const key in updatedItem) item[key] = updatedItem[key];
  //   };

  deleteItem = (itemId) => {
    this.items = this.items.filter((item) => item.id !== itemId);
  };
}

decorate(WatchStore, {
  items: observable,
});

const watchStore = new WatchStore();
export default watchStore;
