import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, NgModule, ViewEncapsulation } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { BaseComponent } from 'primeng/basecomponent';
import { IftaLabelStyle } from './style/iftalabelstyle';

/**
 * IftaLabel is used to create infield top aligned labels.
 * @group Components
 */
@Component({
    selector: 'p-iftalabel',
    template: ` <ng-content></ng-content> `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [IftaLabelStyle],
    host: {
        class: 'p-iftalabel',
    },
})
export class IftaLabel extends BaseComponent {
    _componentStyle = inject(IftaLabelStyle);
}

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule],
    exports: [IftaLabel, SharedModule],
    declarations: [IftaLabel],
})
export class IftaLabelModule {}
