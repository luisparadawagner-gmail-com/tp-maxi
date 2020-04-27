import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
	selector: 'app-profesor',
	templateUrl: './profesor.component.html'
})
export class ProfesorComponent {
	
    constructor(private fb:FormBuilder){}

	profesorForm = this.fb.group({
		nombre: ['', Validators.required],
		apellido: [''],
        edad:[''],
        materia:[''],
		direccion: this.fb.group({
			calle: [''],
			numero: ['']
        }),
        telefonos : this.fb.array([this.fb.control('')])
    });
    get telefonos(){
        return this.profesorForm.get('telefonos') as FormArray;
    }
    agregarTelefono(){
        this.telefonos.push(this.fb.control(''));
    }

	submit() {
		debugger;
		this.profesorForm.value;

		this.profesorForm.setValue({
			nombre: '',
			apellido: '',
			edad: '',
			materia: '',
			direccion: {
				calle: '',
				numero: ''
			},
			telefonos: this.telefonos.value
        });

        this.profesorForm.patchValue({edad: 60});
	}
}