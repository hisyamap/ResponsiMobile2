
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-datamobil_tambah',
  templateUrl: './datamobil_tambah.page.html',
  styleUrls: ['./datamobil_tambah.page.scss'],
})
export class DatamobilTambahPage implements OnInit {
  id: any;
   
								merek: any;
								mobil: any;
								tipe: any;
  constructor(
    private router: Router,
    public _apiService: ApiService,

  ) { }

  ngOnInit() {
  }

  addDatamobil() {
    let data = {
								merek: this.merek,
								mobil: this.mobil,
								tipe: this.tipe,
    }
    this._apiService.tambah(data, '/tambahDatamobil.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.merek='';
								 this.mobil='';
								 this.tipe='';
          this._apiService.notif('berhasil input Datamobil');
          this.router.navigateByUrl('/datamobil');
        },
        error: (err: any) => {
          this._apiService.notif('gagal input Datamobil');
        }
      })
  }

}





/* End of file  */

/* Created at 2022-12-06 13:27:53 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */