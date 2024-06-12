import { Component, OnDestroy,  } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subject, ReplaySubject, timer, Subscription, takeWhile, takeUntil, take, map } from 'rxjs';
import { HistoryComponent } from '../../shared/history/history.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  templateUrl: './unsubscribe.component.html',
  standalone: true,
  imports: [HistoryComponent, AsyncPipe]
})
export class UnsubscribeComponent {

  zahl$ = timer(0, 1000).pipe(
    map(x => x * 10)
  );

  zahl = toSignal(timer(0, 1000).pipe(
    map(x => x * 10)
  ));

}
