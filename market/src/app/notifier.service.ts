import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from './notifier/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar: MatSnackBar) {}
  showNotification(displayeMessage: string ,buttonText : string,messageType:'error'|'success') {
      this.snackBar.openFromComponent(NotifierComponent,{
      data:{
        message:displayeMessage,
        buttonText:buttonText,
        type:messageType
      },
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass:'error'
    });
  }
}
