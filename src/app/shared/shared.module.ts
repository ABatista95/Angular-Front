import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Importaciones de libreria alyle */
/** Import animations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Gestures
import {
  HAMMER_GESTURE_CONFIG,
  HammerModule
} from '@angular/platform-browser';

/** Import Alyle UI */
import {
  LyTheme2,
  StyleRenderer,
  LY_THEME,
  LY_THEME_NAME,
  LyHammerGestureConfig
} from '@alyle/ui';

/** Import the component modules */
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';

/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
/* Fin importaciones de libreria alyle */

@NgModule({
  declarations: [],

  imports: [
    CommonModule,

    BrowserAnimationsModule,
    // Add components
    LyButtonModule,
    LyToolbarModule,
    LyImageCropperModule,
    // ...
    // Gestures
    HammerModule,
  ],
  exports: [],
  /** Add themes */
  providers: [
    [ LyTheme2 ],
    [ StyleRenderer ],
    // Theme that will be applied to this module
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
    // Gestures
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig } // Required for <ly-carousel>
  ],
})
export class SharedModule { }
