import { Controller, Get, Param, Query } from '@nestjs/common';
import { TennisService } from './tennis.service';

@Controller('tennis')
export class TennisController {
  constructor(private readonly tennis: TennisService) {}

  @Get('player')
  playerByName(@Query('name') name: string) {
    return this.tennis.searchPlayers(name);
  }

  @Get('player/:id')
  playerById(@Param('id') id: string) {
    return this.tennis.lookupPlayer(id);
  }

  @Get('event')
  eventByTitle(@Query('title') title: string) {
    return this.tennis.searchEvents(title);
  }

  @Get('leagues')
  async leagues(@Query('country') country?: string) {
    const data = await this.tennis.listAllLeagues();
    const leagues = Array.isArray((data as any)?.leagues) ? (data as any).leagues : [];
    const tennisOnly = leagues.filter((l: any) => (l.strSport ?? '').toLowerCase() === 'tennis');
    return country
      ? tennisOnly.filter((l: any) => (l.strCountry ?? '').toLowerCase() === country.toLowerCase())
      : tennisOnly;
  }

  @Get('events/next')
  nextByLeague(@Query('leagueId') leagueId: string) {
    return this.tennis.nextEventsByLeague(leagueId);
  }

  @Get('events/past')
  pastByLeague(@Query('leagueId') leagueId: string) {
    return this.tennis.pastEventsByLeague(leagueId);
  }
}
