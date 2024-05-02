import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

import { AppComponent } from './app.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { RoutingModule } from './routing.module';
import { NgIf } from '@angular/common';
import { CameraPreviewComponent } from './camera-preview/camera-preview.component';

LOAD_WASM().subscribe();
@NgModule({
  declarations: [
    AppComponent,
    ScanQrComponent,
    CameraPreviewComponent,
  ],
  imports: [
    BrowserModule,
    NgxScannerQrcodeModule,
    RoutingModule,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
