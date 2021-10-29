import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  roles: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            roles {
              name
              description
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.roles = result?.data?.rates;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

}
