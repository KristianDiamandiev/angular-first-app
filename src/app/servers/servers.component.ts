import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '.app-servers',
  //selector: '[app-servers]',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  username = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];
  clickedValues = [];
  showSecret = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  toggleParagraphHidden() {
    this.showSecret = !this.showSecret;
    //this.clickedValues.push(this.clickedValues.length + 1);
    this.clickedValues.push(new Date());
  }
}
