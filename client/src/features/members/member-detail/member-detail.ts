import { Component, inject } from '@angular/core';
import { MembersService } from '../../../core/services/members-service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { Member } from '../../../types/member';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './member-detail.html',
  styleUrl: './member-detail.css'
})
export class MemberDetail {
  private membersService = inject(MembersService);
  private route = inject(ActivatedRoute);
  protected member$?: Observable<Member>;

  ngOnInit(): void{
    this.member$ = this.loadMember();
  }

  loadMember(): Observable<Member> | undefined {
    const id = this.route.snapshot.params['id'];
    if (id) {
      return this.membersService.getMember(id);
    }

    return;
  }
}
