import { Component } from '@angular/core';

/* Importaciones de libreria alyle */
import { StyleRenderer, ThemeVariables, lyl } from '@alyle/ui';

const STYLES = (theme: ThemeVariables) => ({
  $global: lyl `{
    body {
      background-color: ${theme.background.default}
      color: ${theme.text.default}
      font-family: ${theme.typography.fontFamily}
      margin: 0
      direction: ${theme.direction}
    }
  }`,
  root: lyl `{
    display: block
  }`
});
/* Fin importaciones de libreria alyle */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ // Implementación para libreria alyle
    StyleRenderer
  ]
})
export class AppComponent {
  readonly classes = this.sRenderer.renderSheet(STYLES, true); // Implementación para libreria alyle

  title = 'P3-Validations';

  constructor(
    readonly sRenderer: StyleRenderer // Implementación para libreria alyle
  ) {
  }
}
