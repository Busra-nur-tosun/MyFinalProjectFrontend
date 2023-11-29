// snackbar.service.ts

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  open(message: string, action: string = 'Kapat'): void {
    this.snackBar.open(message, action, {
      duration: 2000, // Snackbar'ın görüntülenme süresi (ms cinsinden)
    });
  }
}
