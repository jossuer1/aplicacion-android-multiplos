import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonChip
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonChip
  ]
})
export class HomePage {

  nombreEstudiante = 'Josue Patiño';

  contadores = [
    { multiplo: 2, valor: 0, color: 'primary' },
    { multiplo: 3, valor: 0, color: 'secondary' },
    { multiplo: 5, valor: 0, color: 'tertiary' },
    { multiplo: 7, valor: 0, color: 'warning' },
    { multiplo: 10, valor: 0, color: 'success' }
  ];

  mostrarPrimos = false;
  numerosPrimos: number[] = [];

  aumentarContador(i: number) {
    this.contadores[i].valor += this.contadores[i].multiplo;
  }

  reiniciarContador(i: number) {
    this.contadores[i].valor = 0;
  }

  togglePrimos() {
    this.mostrarPrimos = !this.mostrarPrimos;

    if (this.mostrarPrimos) {
      this.generarPrimos();
    }
  }

  generarPrimos() {
    for (let i = 2; i <= 50; i++) {
      if (this.esPrimo(i)) {
        this.numerosPrimos.push(i);
      }
    }
  }

  esPrimo(numero: number) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }

    return true;
  }
}