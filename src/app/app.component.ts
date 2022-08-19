import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  searchString: string = '';
  title = 'web422-a4';
  token: any;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.token = this.authService.readToken();
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  handleSearch() {
    this.router.navigateByUrl(`/search?q=${this.searchString}`);
    this.searchString = '';
  }
}
