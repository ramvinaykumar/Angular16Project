import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from 'src/app/components/core/mat-confirm-dialog/mat-confirm-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private _dialog: MatDialog) { }

  openConfirmDialog() {
    this._dialog.open(MatConfirmDialogComponent, {
      width: '390px;',
      //panelClass: 'confirm-dialog-container',
      disableClose: true
    });
  }
}
