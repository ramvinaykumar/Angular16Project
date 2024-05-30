import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  durationInSeconds = 2;

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(messageToShow: string, action: string = 'OK') {
    this._snackBar.open(messageToShow, action, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top'
    });
  }
}
