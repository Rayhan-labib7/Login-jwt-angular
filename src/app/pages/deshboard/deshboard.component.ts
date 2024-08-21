import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/model/common.model';

@Component({
  selector: 'app-deshboard',
  standalone: true,
  imports: [],
  templateUrl: './deshboard.component.html',
  styleUrl: './deshboard.component.scss'
})
export class DeshboardComponent implements OnInit{
    authService = inject(AuthService);
    user!: User ;
    ngOnInit(): void {
        this.authService.me().subscribe({
          next:(response)=>{
            console.log(response);
            this.user = response.data
          }
        })
    }
    logout(){
      this.authService.logout();
    }
}
