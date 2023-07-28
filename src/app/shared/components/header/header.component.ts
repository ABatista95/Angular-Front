import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciónes de libreria alyle
import { LyMenuModule } from "@alyle/ui/menu";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LyMenuModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export default class HeaderComponent {

}
