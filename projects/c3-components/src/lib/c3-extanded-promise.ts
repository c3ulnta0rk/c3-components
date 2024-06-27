import { Observable, from } from 'rxjs';

export class C3ExtandedPromise<T> extends Promise<T> {
  constructor(
    executor: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ) {
    super(executor);
  }

  public toObservable(): Observable<T> {
    return from(this);
  }
}
