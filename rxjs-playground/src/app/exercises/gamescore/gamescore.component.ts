import { Component } from '@angular/core';
import { Subject, ReplaySubject, scan, reduce } from 'rxjs';
import { HistoryComponent } from '../../shared/history/history.component';

@Component({
  templateUrl: './gamescore.component.html',
  standalone: true,
  imports: [HistoryComponent]
})
export class GamescoreComponent {

  logStream$ = new ReplaySubject<unknown>();
  score$ = new Subject<number>();

  currentScore = 0;
  finalScore?: number;

  constructor() {
    /**
     * Wir entwickeln ein spannendes Browser-Spiel!
     * Jetzt fehlt nur noch der Code, um den Punktestand zu ermitteln ...
     */

    /******************************/

    // this.score$.pipe(
    //   scan((acc, item) => acc + item, 0)
    // ).subscribe(score => this.currentScore = score);

    // this.score$.pipe(
    //   reduce((acc, item) => acc + item, 0)
    // ).subscribe(score => this.finalScore = score);

    this.score$.pipe(
      scan((actual, addScore) => {
        let current = actual + addScore;
        if (current <= 0){
          return 0;
        }
        return current;
      }, 0),
    ).subscribe(score => this.currentScore = score);


    /******************************/

    this.score$.subscribe({
      next: e => this.logStream$.next(e),
      complete: () => this.logStream$.next('✅ COMPLETE')
    });
  }

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }

}
