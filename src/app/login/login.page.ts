import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private menuCtrl : MenuController,
  ) { }
  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }
  prosesLogin(): void {
    if (this.username != null && this.password != null) {
      const data = {
        username: this.username,
        password: this.password,
      };
      this.authService.postMethod(data, 'proses_login.php')
        .subscribe({
          next: (hasil) => {
            if (hasil.status_login == 'berhasil') {
              this.authService.saveData('token', hasil.token);
              this.authService.saveData('username', hasil.username);
              this.username = null;
              this.password = null;
              this.router.navigateByUrl('/home');
            } else {
              this.authService.notifikasi('Username atau Password Salah');
            }
          },
          error: (e) => {
            this.authService.notifikasi('Login gagal, periksa koneksi internet anda');
          }
        });
    } else {
      this.authService.notifikasi('Isikan Username dan Password anda terlebih dahulu');
    }
  }
}