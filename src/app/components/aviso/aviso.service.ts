import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AvisoService {

    constructor(private toastController: ToastController) { }

    async exibe(mensagem: string) {
        const toast = await this.toastController.create({
            message: mensagem,
            duration: 2000,
            position: 'top',
            icon: 'information-circle',
            color: 'danger'
        });
        toast.present();
    }
}