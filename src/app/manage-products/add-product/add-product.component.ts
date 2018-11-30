import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Validators, FormControl, FormBuilder} from '@angular/forms';
import {GeneralService} from '../../general.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    addItem = this.fb.group({
        item_name: ['', Validators.required],
        item_desc: ['', Validators.required],
        item_keys: ['', Validators.required],
        item_quantity: ['', Validators.required],
        item_price: ['', Validators.required],
        imageFile_1: [null, Validators.required],
        imageFile_2: [null, Validators.required],
        imageFile_3: null,
        imageFile_4: null,
    });
    @ViewChild('fileInput') fileInput: ElementRef;

    constructor(private fb: FormBuilder, private call_: GeneralService) {
    }

    ngOnInit() {
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            $('.not-login').css('display', 'block');
            console.log('you are currently managing products (\'^_^\')');
        } else {
            document.location.href = 'http://localhost:4200/#/admin-login';
        }
    }

    onReset() {

    }

    onFileChange(event, id) {
        const imageFile = $(`#${id}`).val().toString();
        const idxDot = imageFile.lastIndexOf('.') + 1;
        const extFile = imageFile.substr(idxDot, imageFile.length).toLowerCase();
        if (extFile === 'jpg' || extFile === 'jpeg' || extFile === 'png') {
            // TODO:
        } else {
            alert('Only jpg/jpeg and png files are allowed!');
            $(`#${id}`).val('');
        }
        //
        const reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.addItem.get(`${id}`).setValue({
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result.split(',')[1]
                });
            };
        }
    }

    onSubmit() {
        const formData = this.addItem.value;
        this.call_.addProduct(formData).subscribe( data => {
            console.log(data['success']);
        });
    }

}
