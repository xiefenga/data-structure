import BinaryHeap from './BinaryHeap'
import { Comparator, defaultComparator } from '../types'

class MinHeap<T> extends BinaryHeap<T> {
  protected compare(i: number, j: number): boolean {
    const heap = this.heap;
    return this.comparator(heap[i], heap[j]) < 0;
  }

  public static buildHeap<T>(data: T[], comparator: Comparator<T> = defaultComparator) {
    new MinHeap<T>(comparator).heapify(data);
  }
}

export default MinHeap