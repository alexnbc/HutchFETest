import { Component, OnInit } from '@angular/core';
import { PortalSyncService } from '../services/portal-sync.service';

import { environment } from '../../environments/environment';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  appVersion = environment.appVersion;
  dataVersion = environment.dataVersion;

  title = 'Hutch FE Test - Admin Portal';

  portalData$;

  selectedData = [];

  constructor(
    private portalSyncService: PortalSyncService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.portalData$ = this.dataService.getData();
  }

  eventCheck(data): void {
    const index = this.selectedData.findIndex(x => x === data);
    index === -1 ? this.selectedData.push(data) : this.selectedData.splice(index, 1);
  }
}
