import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDTO} from "../../dto";

@Injectable({
    providedIn: 'root',
})
export class UsersService {

    private url = process.env.API_URL + '/user';

    constructor(private httpClient: HttpClient) {
    }


    public fetchAll(): Observable<UserDTO[]> {
        return this.httpClient.get<UserDTO[]>(this.url);
    }

    public createUser(user: UserDTO): Observable<UserDTO> {
        return this.httpClient.post<UserDTO>(this.url, user);
    }

}
