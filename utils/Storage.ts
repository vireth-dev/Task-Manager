export class StorageUtil<T> {
  constructor(private key: string) {}

  save(data: T): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  load(): T | null {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : null;
  }
}
