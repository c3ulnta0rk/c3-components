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

  public subscribe(observer: Partial<Observer<T>>): Subscription;
  public subscribe(
    next?: (value: T) => void,
    error?: (error: any) => void,
    complete?: () => void
  ): Subscription;
  public subscribe(
    nextOrObserver?: Partial<Observer<T>> | ((value: T) => void),
    error?: (error: any) => void,
    complete?: () => void
  ): Subscription {
    if (typeof nextOrObserver === 'function') {
      return this.toObservable().subscribe(nextOrObserver, error, complete);
    } else {
      return this.toObservable().subscribe(nextOrObserver);
    }
  }
}
