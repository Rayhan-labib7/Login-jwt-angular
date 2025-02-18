import { Component, effect, inject, Injector, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{
    authService = inject(AuthService)
    isLoggedIn = false;
    injector = inject(Injector)

    ngOnInit(): void {
        effect(
          ()=>{
            this.isLoggedIn=this.authService.isLoggedIn();
          },
          {injector:this.injector}
        )
    }
}
