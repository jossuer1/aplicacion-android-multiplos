import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonButton, 
  IonChip, 
  IonLabel 
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonButton, 
    IonChip, 
    IonLabel
  ]
})
export class HomePage {
  nombreEstudiante: string = 'Josue Patiño';

  contadores = [
    { multiplo: 2, valor: 0, color: 'primary' },
    { multiplo: 3, valor: 0, color: 'secondary' },
    { multiplo: 5, valor: 0, color: 'tertiary' },
    { multiplo: 7, valor: 0, color: 'warning' },
    { multiplo: 10, valor: 0, color: 'success' }
  ];

  mostrarPrimos: boolean = false;
  numerosPrimos: number[] = [];

  aumentarContador(index: number) {
    this.contadores[index].valor += this.contadores[index].multiplo;
  }

  reiniciarContador(index: number) {
    this.contadores[index].valor = 0;
  }

  togglePrimos() {
    this.mostrarPrimos = !this.mostrarPrimos;
    if (this.mostrarPrimos && this.numerosPrimos.length === 0) {
      this.generarPrimos(50);
    }
  }

  generarPrimos(limite: number) {
    for (let i = 2; i <= limite; i++) {
      if (this.esPrimo(i)) {
        this.numerosPrimos.push(i);
      }
    }
  }

  esPrimo(numero: number): boolean {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return false;
    }
    return numero > 1;
  }
}