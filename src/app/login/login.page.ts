import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string = '';
  pass: string = '';

  constructor(private alertController: AlertController, private router: Router) { }
   
  ngOnInit() {
  }

  validarAlumno() {
    if (this.pass=='1234' && this.user=='ser.martineza') {
      this.router.navigate(['/index-alumno']);
     
    } else {
      this.mostrarAlerta();
    }
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario o contraseña incorrecta, vuelva intentarlo.',
      buttons: ['OK']
    });

    await alert.present();

  }

}
