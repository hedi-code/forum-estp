import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-separator',
  templateUrl: './title-separator.component.html',
  styleUrl: './title-separator.component.scss'
})
export class TitleSeparatorComponent {
  @Input('title') title: string = '';

}
