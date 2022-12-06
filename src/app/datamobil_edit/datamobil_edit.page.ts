
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-datamobil_edit',
  templateUrl: './datamobil_edit.page.html',
  styleUrls: ['./datamobil_edit.page.scss'],
})
export class DatamobilEditPage implements OnInit {
   id: any;
								merek: any;
								mobil: any;
								tipe: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilDatamobil(this.id);
    })
  }

  ngOnInit() {
  }

  ambilDatamobil(id: any) {
    this._apiService.lihat(id, '/lihatDatamobil.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let datamobil = hasil; 
								 this.merek= datamobil.merek;
								 this.mobil= datamobil.mobil;
								 this.tipe= datamobil.tipe;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editDatamobil() {
    let data = {
      id: this.id,
								 merek:this.merek,
								 mobil:this.mobil,
								 tipe:this.tipe,
    }
    this._apiService.edit(data, '/editDatamobil.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.merek='';
								 this.mobil='';
								 this.tipe='';
          this._apiService.notif('berhasil edit Datamobil');
          this.router.navigateByUrl('/datamobil');
        },
        error: (err: any) => {
          this._apiService.notif('gagal edit Datamobil');
        }
      })
  }

 

}




/* End of file  */

/* Created at 2022-12-06 13:27:53 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */