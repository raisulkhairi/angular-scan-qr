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
    this.scanner.canvasStyles = [{ lineWidth: 0, strokeStyle: 'transparent', fillStyle: 'transparent' },{ font: '15px serif', strokeStyle: 'transparent', fillStyle: 'transparent' }]
  }

  onScanSuccess(data: any) {
    this.data = data;
  }
}
