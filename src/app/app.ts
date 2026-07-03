import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Observable, of, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css'],

})
export class App {
  protected readonly title = signal('angular_for_ai');
  name = "S2P Platform";
  isLoggedIn = true;
  constructor( private router: Router, private route: ActivatedRoute) { }
 
  ngOnInit() {
    
    

    
 
      let sidebar = document.querySelector('.sidebar');
      let closeBtn = document.querySelector('#btn');
      
        closeBtn?.addEventListener('click', () => {
          sidebar?.classList.toggle('open');
          menuBtnChange(); //calling the function(optional)

        });
  
      // following are the code to change sidebar button(optional)
      function menuBtnChange() {

        if (sidebar?.classList.contains('open')) {
          closeBtn?.classList.replace('bx-menu', 'bx-menu-alt-right'); //replacing the iocns class
        } else {
          closeBtn?.classList.replace('bx-menu-alt-right', 'bx-menu'); //replacing the iocns class
        }
      }

    

  }
}
