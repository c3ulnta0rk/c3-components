import { Observable, Observer, Subscription } from 'rxjs';

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
    return new Observable<T>((observer) => {
      this.then((value) => {
        observer.next(value);
        observer.complete();
      }).catch((err) => observer.error(err));
    });
  }

  public subscribe = this.toObservable().subscribe;
  public pipe = this.toObservable().pipe;
}
