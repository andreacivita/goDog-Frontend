import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UtenteService} from "../service/utente.service";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    private tipo: any;
    private piano: any;
    public utente: any = {
        name: '',
        cognome: '',
        email: '',
        password: '',
        plan: 0,
    };

    constructor(private route: ActivatedRoute, private utenteService : UtenteService) {

    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.tipo = params['tipo'];
                this.piano = params['piano'];
            });
    }

    onSubmit(form) {

        this.utente.name = form.value.name;
        this.utente.cognome = form.value.cognome;
        this.utente.email = form.value.email;
        this.utente.password = form.value.password;
        this.utente.plan = this.piano;
        this.utenteService.register(this.utente)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );

    }


}
