import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.page.html',
  styleUrls: ['./login-profesor.page.scss'],
})
export class LoginProfesorPage implements OnInit {
  user: string = '';
  pass: string = '';

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }
  validarProfesor() {
    if (this.pass=='1234' && this.user=='danilo') {
      this.router.navigate(['/index-profesor']);
     
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
