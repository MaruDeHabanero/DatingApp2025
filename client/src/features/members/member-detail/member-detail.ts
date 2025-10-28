import { Component, inject, signal } from '@angular/core';
import { MembersService } from '../../../core/services/members-service';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { Member } from '../../../types/member';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  imports: [AsyncPipe, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './member-detail.html',
  styleUrl: './member-detail.css'
})
export class MemberDetail {
  private membersService = inject(MembersService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  protected member$?: Observable<Member>;
  protected title = signal<string | undefined>("Profile");

  ngOnInit(): void{
    this.member$ = this.loadMember();
    this.title.set(this.route.firstChild?.snapshot?.title);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe({
      next: () => {
        this.title.set(this.route.firstChild?.snapshot?.title);
      }
    });
  }

  loadMember(): Observable<Member> | undefined {
    const id = this.route.snapshot.params['id'];
    if (id) {
      return this.membersService.getMember(id);
    }

    return;
  }
}
