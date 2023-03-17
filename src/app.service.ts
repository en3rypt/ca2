import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }
  async getAlbums(id:string):Promise<any>{
    const requestHeader={
      'Authorization':"Bearer BQAKY0rWWpwaZninqZX-bEhDwRxy6baHGjN35XzWxXwCfJ7ElkXMkCZpuDLbdcIFszUl-irTlCfALpBnfUg1HJT5Wt7SmwCl__2N-74Qr0lECxG7OG4ywU216owPKQ5PG3EGjfC3m2kaZQwnCVKvdlKOLMIOhwr44fOAwaAdPm1UNKi1XPjooJPLhn73-g4omRbqLmiHUM0ylHWkY1hMqIn5CaG4i2vKsTOvOza9MpwTfCAWVkx6ICd6dd_rTc060ZRdEqKJhtJAzWLWr5t6l_cComwcA6xIdE4Kt8HSWo9L4-ctRyGOvE9-Jzv4UGqmVIpl30I6yiAh7A"
    }
    const {data}:any = await firstValueFrom(this.httpService.get(`https://api.spotify.com/v1/albums/${id}`,{headers:requestHeader}).pipe(catchError(e => {
      throw new HttpException(e.response.data, e.response.status);
    })))
    return data
  }
  async getPlaylists(payload:any,id:any):Promise<any>{
    const requestHeader={
      'Authorization':"Bearer BQAKY0rWWpwaZninqZX-bEhDwRxy6baHGjN35XzWxXwCfJ7ElkXMkCZpuDLbdcIFszUl-irTlCfALpBnfUg1HJT5Wt7SmwCl__2N-74Qr0lECxG7OG4ywU216owPKQ5PG3EGjfC3m2kaZQwnCVKvdlKOLMIOhwr44fOAwaAdPm1UNKi1XPjooJPLhn73-g4omRbqLmiHUM0ylHWkY1hMqIn5CaG4i2vKsTOvOza9MpwTfCAWVkx6ICd6dd_rTc060ZRdEqKJhtJAzWLWr5t6l_cComwcA6xIdE4Kt8HSWo9L4-ctRyGOvE9-Jzv4UGqmVIpl30I6yiAh7A"
    }
    const {data}:any = await firstValueFrom(this.httpService.post(`https://api.spotify.com/v1/playlists/${id}/tracks`,payload,{headers:requestHeader}).pipe(catchError(e => {
      throw new HttpException(e.response.data, e.response.status);
    })))
    return data
  }

  async search(query:any):Promise<any>{
    const requestHeader={
      'Authorization':"Bearer BQAKY0rWWpwaZninqZX-bEhDwRxy6baHGjN35XzWxXwCfJ7ElkXMkCZpuDLbdcIFszUl-irTlCfALpBnfUg1HJT5Wt7SmwCl__2N-74Qr0lECxG7OG4ywU216owPKQ5PG3EGjfC3m2kaZQwnCVKvdlKOLMIOhwr44fOAwaAdPm1UNKi1XPjooJPLhn73-g4omRbqLmiHUM0ylHWkY1hMqIn5CaG4i2vKsTOvOza9MpwTfCAWVkx6ICd6dd_rTc060ZRdEqKJhtJAzWLWr5t6l_cComwcA6xIdE4Kt8HSWo9L4-ctRyGOvE9-Jzv4UGqmVIpl30I6yiAh7A"
    }
    let queryString = ''
    for (const key in query) {
      if (Object.prototype.hasOwnProperty.call(query, key)) {
        const element = query[key];
        if(element){
          queryString += `${key}=${element}&`
        }
      }
    }
    const {data}:any = await firstValueFrom(this.httpService.get(`https://api.spotify.com/v1/search?${queryString}`,{headers:requestHeader}).pipe(catchError(e => {
      throw new HttpException(e.response.data, e.response.status);
    })))
    return data
  }
}
