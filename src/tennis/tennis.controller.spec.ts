import { Test } from '@nestjs/testing';
import { TennisController } from './tennis.controller';
import { TennisService } from './tennis.service';

describe('TennisController', () => {
  let controller: TennisController;

  const tennisServiceMock = {
    searchPlayers: jest.fn().mockResolvedValue({ player: [{ idPlayer: '1', strPlayer: 'Roger Federer' }] }),
    lookupPlayer: jest.fn().mockResolvedValue({ players: [{ idPlayer: '1', strPlayer: 'Roger Federer' }] }),
    searchEvents: jest.fn().mockResolvedValue({ event: [{ idEvent: '10', strEvent: 'Wimbledon Final' }] }),
    listAllLeagues: jest.fn().mockResolvedValue({ leagues: [{ idLeague: '4464', strLeague: 'ATP World Tour', strSport: 'Tennis' }] }),
    nextEventsByLeague: jest.fn().mockResolvedValue({ events: [{ idEvent: '100', strEvent: 'ATP Next' }] }),
    pastEventsByLeague: jest.fn().mockResolvedValue({ events: [{ idEvent: '90', strEvent: 'ATP Past' }] }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TennisController],
      providers: [{ provide: TennisService, useValue: tennisServiceMock }],
    }).compile();

    controller = moduleRef.get(TennisController);
  });

  it('playerByName', async () => {
    const res = await controller.playerByName('Federer');
    expect(res.player[0].strPlayer).toBe('Roger Federer');
  });

  it('eventByTitle', async () => {
    const res = await controller.eventByTitle('Wimbledon');
    expect(res.event[0].strEvent).toMatch(/Wimbledon/);
  });

  it('leagues() ne renvoie que Tennis', async () => {
    const res = await controller.leagues();
    expect(res[0].strSport).toBe('Tennis');
  });

  it('nextByLeague', async () => {
    const res = await controller.nextByLeague('4464');
    expect(res.events[0].idEvent).toBe('100');
  });
});
