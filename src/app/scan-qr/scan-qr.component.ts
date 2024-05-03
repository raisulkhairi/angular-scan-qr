import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.scss']
})
export class ScanQrComponent implements AfterViewInit {
  @ViewChild('action') scanner!: NgxScannerQrcodeComponent;

  data:any;

  contraint = {
    audio: false,
    video: {
      facingMode: {
        exact: 'environment'
      }
    }
  }

  ngAfterViewInit() {
    this.scanner.start();
    this.scanner.constraints = this.contraint;
  }

  onScanSuccess(data: any) {
    this.data = data;
  }
}
