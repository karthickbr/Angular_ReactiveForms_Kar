import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatusForm: FormGroup;


  ngOnInit() {
    this.projectStatusForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required], this.forbiddenName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(['stable'])
    });
  }

  onsubmit() {
    console.log(this.projectStatusForm.get('projectname').value);
    console.log(this.projectStatusForm.get('email').value);
    console.log(this.projectStatusForm.get('status').value);
  }


  forbiddenName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
            if (control.value === 'Test' || control.value === 'test') {
              resolve({'nameIsForbidden': true});
            } else {
              resolve(null);
            }
        }, 2000);
    });
    return promise;

  }
}
