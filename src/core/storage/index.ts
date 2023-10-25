import { LocalStorage, MemoryStorage, Storage } from "./localStorage";

const isStorageEnabled = () => {
  try {
    const testKey = "TK";
    const testValue = `${Date.now()}`;

    const storage = new LocalStorage();
    if (!storage) {
      return false;
    }

    storage.setItem(testKey, testValue);
    if (storage.getItem(testKey) !== testValue) {
      return false;
    }

    storage.setItem(testKey, null);
    if (storage.getItem(testKey) !== null) {
      return false;
    }

    if (storage.removeItem) {
      storage.removeItem(testKey);
    }

    return true;
  } catch (err) {
    return false;
  }
};

const createLocalStorage = (): Storage => {
  if (isStorageEnabled()) {
    return new LocalStorage();
  } else {
    return new MemoryStorage();
  }
};

let storage: Storage;
const getLocalStorage = (): Storage => {
  if (storage) {
    return storage;
  }

  storage = createLocalStorage();
  return getLocalStorage();
};

// TODO: Willwant to reconsider how we initalize this
getLocalStorage();

export { getLocalStorage };
