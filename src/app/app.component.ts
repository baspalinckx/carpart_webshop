import {Component, HostBinding} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {animate, group, query, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeState', [

      transition( '* => *', [

        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),

        query(':leave',
          [
            style({ opacity: 1 }),
            animate('0.2s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),

        query(':enter',
          [
            style({ opacity: 0 }),
            animate('0.2s', style({ opacity: 1 }))
          ],
          { optional: true }
        )

      ])

    ])
  ]
})
export class AppComponent {

  getAnimationData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) {
      return 'rootPage';
    }
    return routeData['page'];
  }

}
