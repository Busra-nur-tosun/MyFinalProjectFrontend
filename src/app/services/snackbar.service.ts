// snackbar.service.ts

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  info: any;
  constructor(private snackBar: MatSnackBar) {}

  open(message: string, action: string = 'Kapat'): void {
    this.snackBar.open(message, action, {
      duration: 2000, // Snackbar'ın görüntülenme süresi (ms cinsinden)
    });
  }
  error(message: string): void {
    // Hata durumu için özel bir tasarım veya işlem ekleyebilirsiniz
    this.snackBar.open(message, 'Hata', {
      duration: 2000,
      panelClass: ['error-snackbar'] // İsteğe bağlı: Özel bir CSS sınıfı ekleyebilirsiniz
    });
  }
}
