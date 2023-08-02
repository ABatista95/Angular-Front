import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciónes de libreria alyle
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MediaMatcher } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";


@Component({
  selector: 'app-header',
  standalone: true, imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export default class HeaderComponent implements OnDestroy {

  @Input() btnMenu: any;

  mobileQuery: MediaQueryList;

  fillerNav: string[] = [
    'Inicio',
    'Usuarios',
    'Contacto'
  ];

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

}
