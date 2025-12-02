import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

const BASE = 'https://www.thesportsdb.com/api/v1/json/123';

@Injectable()
export class TennisService {
  constructor(private readonly http: HttpService) {}

  private async get<T>(endpoint: string, params?: Record<string, string>) {
    try {
      const url = `${BASE}${endpoint}`;
      const res = await firstValueFrom(this.http.get<T>(url, { params }));
      return res.data as any;
    } catch {
      throw new ServiceUnavailableException('External TheSportsDB API unavailable');
    }
  }


  searchPlayers(name: string) {
    return this.get('/searchplayers.php', { p: name });
  }
  lookupPlayer(id: string) {
    return this.get('/lookupplayer.php', { id });
  }


  searchEvents(title: string) {
    return this.get('/searchevents.php', { e: title });
  }


  listAllLeagues() {
    return this.get('/all_leagues.php');
  }
  nextEventsByLeague(leagueId: string) {
    return this.get('/eventsnextleague.php', { id: leagueId });
  }
  pastEventsByLeague(leagueId: string) {
    return this.get('/eventspastleague.php', { id: leagueId });
  }
}
