export interface Storage {
  getItem: (key: string) => string | null | undefined;
  setItem: (key: string, value?: string | null | undefined) => void;
  removeItem: (key: string) => void;
}

export class LocalStorage implements Storage {
  public getItem(key: string) {
    return localStorage?.getItem(key);
  }

  public setItem(key: string, value: string | null | undefined) {
    if (!value) {
      this.removeItem(key);
    } else {
      localStorage?.setItem(key, value);
    }
  }

  public removeItem(key: string) {
    localStorage?.removeItem(key);
  }
}

export class MemoryStorage implements Storage {
  private state: Record<string, string | null | undefined> = {};

  public setItem(key: string, value: string | null | undefined) {
    this.state[key] = value;
  }

  public getItem(key: string) {
    return this.state[key];
  }

  public removeItem(key: string) {
    delete this.state[key];
  }
}
