<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$merek=trim($data['merek']);
$mobil=trim($data['mobil']);
$tipe=trim($data['tipe']);

if($merek!='' and $mobil!='' and $tipe!=''){
$query = mysqli_query($koneksi,"insert into datamobil(merek,mobil,tipe) values('$merek','$mobil','$tipe')");

}

echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-12-06 13:27:53 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */