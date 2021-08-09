import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

import { ApiService } from "../../api/api.service";

import { UserDto, UsersDto } from "./account.dto";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor(private api: ApiService, private storage: Storage) {}

  public async getUserData(): Promise<UserDto> {
    try {
      const token = await this.storage.get("jwt");
      const result = await this.api.get<UsersDto>(
        this.api.getAccountApiUrl() + "/users/" + token.jwt.issuer
      );

      return result.user;
    } catch (e) {
      throw e;
    }
  }
}
