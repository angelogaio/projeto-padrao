import {
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
  Injectable,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  loading$ = false;
  @Input() error: string | null = '';
  @Output() submitEM = new EventEmitter();

  backgroundPhoto: any = 'assets/image/backgroud/construction_640x853.jpg';
  // logoPhoto:any = 'assets/imagens/logo.png';

  formGroup = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });

  constructor(private fb: FormBuilder, private router: Router,) {}

  ngOnInit(): void {}
}
