import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  random: string;

  constructor() {
    this.random = Math.random().toFixed(1);
  }

  log(msg: string) {
    console.log(msg, ' - ', this.random);
  }

  error(msg: string) {
    console.error(msg);
  }

  warn(msg: string) {
    console.warn(msg);
  }
}
