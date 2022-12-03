interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;
    // for (let i = 0; i < length; i++) {
    //   for (let j = 0; j < length - i - 1; j++) {
    //     // in this array ts will give you what is in common between string and array
    //     if (this.collection instanceof Array) {
    //       // but after this if, it will give you all methods that are relevant to arrays!
    //       if (this.collection[j] > this.collection[j + 1]) {
    //         const leftHand = this.collection[j];
    //         this.collection[j] = this.collection[j + 1]; // swap right side to left
    //         this.collection[j + 1] = leftHand; // swap the left side to right
    //       }
    //     }

    // if (typeof this.collection === "string") { }

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
