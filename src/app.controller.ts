import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get("albums/:id")
  getAlbums(@Param('id') id: string):any{
    return this.appService.getAlbums(id);
  }

  @Get("playlists/:id/tracks")
  getPlaylists(@Body() payload: any,@Param('id') id: string):any{
    return this.appService.getPlaylists(payload,id);
  }

  @Get('/search')
  async search(@Query() query:{q:string,album:string,type:string,artist:string,track:string}) {
    return await this.appService.search(query);
  }
}
