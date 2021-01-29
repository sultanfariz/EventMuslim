# Event Muslim - Mempererat Silaturahmi dengan Sistem Informasi Yang Terintegrasi
Event Muslim adalah _sebuah platfrom_ yang memberikan kemudahan kepada peserta suatu acara dalam mencari, melakukan pendaftaran, serta dalam hal pembayarannya dan juga memudahkan untuk penyelnggara event bertema Islam dalam menyebarkan informasi terkait dengan event yang dibuat sehingga lebih tepat sasaran dan dapat menjangkau lebih luas.

## Melakukan Kontribusi
Next.js adalah _framework_ yang bisa berjalan atas banyak _dependencies_ seperti React, Babel, ESLint, Jest, Webpack, dan lain-lain.
_Dependencies_ tersebut terkumpul pada satu folder yaitu folder ```node_modules```, sehingga yang harus kita lakukan ketika meng-clone suatu repositori Event Muslim dari GitHub harus meng-install dependencies-nya.
<br/><br/>
Berikut langkah-langkah cara berkontribusi serta instalasi untuk _develop website_ Event Muslim!

1. ```git clone [repository url]```
2. ```cd [local repository]```
3. Periksa _file_ ```package.json``` dan pastikan terdapat _script_ seperti di bawah :
```
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
 },
 ```
4. _Delete_ terlebih dahulu ```node_modules``` (jika ada), lalu _delete_ semua _'lock' files_. Contohnya ```yarn.lock``` atau ```package-lock.json```
5. Lakukan instalasi dengan cara  ```npm install``` atau ```sudo npm install``` (Linux) di folder yang di-clone
6. Selesai, lalu jalankan aplikasi dengan cara ```npm start``` atau ```sudo npm start``` (Linux)
