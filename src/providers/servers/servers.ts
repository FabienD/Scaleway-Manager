import {Injectable} from '@angular/core';
import {ApiProvider} from "../api/api";
import {ServerDto} from "./server.dto";

@Injectable()
export class ServersProvider {

  constructor(private api: ApiProvider) {
  }

  getAllServers(country: string, token: string): Promise<any> {

    let ApiUrl: string = null;
    country === 'Paris' ? ApiUrl = this.api.getParisApiUrl() : ApiUrl = this.api.getAmsterdamApiUrl();

    return new Promise((resolve, reject) => {

      this.api.get<ServerDto[]>(ApiUrl + '/servers', token)
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        })

    });
  }

  getAllActionsServer(country: string, serverId: string, token: string) {
    let ApiUrl: string = null;
    country === 'Paris' ? ApiUrl = this.api.getParisApiUrl() : ApiUrl = this.api.getAmsterdamApiUrl();

    return new Promise((resolve, reject) => {

      this.api.get<Array<string>>(ApiUrl + '/servers/' + serverId + '/action', token)
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        })

    });
  }

}
