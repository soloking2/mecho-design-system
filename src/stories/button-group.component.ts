
import { Component, Input} from '@angular/core';

@Component({
  selector: 'storybook-buttonGroup',
  template: ` <div [ngClass]="classes">
      <div *ngFor="let button of buttons">
        <storybook-button [primary]="button.primary || false" [label]="button.label" (click)="button.onClick.emit($event)" [size]="button.size">
        </storybook-button>
</div>
  </div>`,
  styleUrls: ['./button-group.css'],
})
export default class ButtonGroupComponent {

  /**
   * Array of buttons
   */
  @Input()
  buttons: any;

  @Input()
  orientation?: 'horizontal' | 'vertical' = 'horizontal';

  public get classes(): string[] {
    const orientation = this.orientation === 'horizontal' ? 'storybook-button-group-horizontal' : 'storybook-button-group-vertical'

    return [orientation]
  }
}
