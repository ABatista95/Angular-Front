import { Component, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";


@Component({
  selector: 'app-page-color',
  templateUrl: './page-color.component.html',
  styleUrls: ['./page-color.component.scss']
})
export class PageColorComponent {
    colorSelected: string = "";

    constructor(@Inject(DOCUMENT) private document: Document) {
    }

    onChange() {
        console.log("Valor: ",this.colorSelected )
        if (this.colorSelected === 'dark') this.document.body.classList.add('dark-mode');
        else if (this.colorSelected === 'light') this.document.body.classList.remove('dark-mode');
    }
}
