import { Component } from '@angular/core';
import { Reactive } from './reactive/reactive';
import { Template } from './template/template';
import { Signal } from './signal/signal';

@Component({
  selector: 'app-forms',
  imports: [Reactive, Template, Signal],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {}
