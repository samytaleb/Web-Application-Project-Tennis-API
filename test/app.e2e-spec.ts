import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { TennisService } from '../src/tennis/tennis.service';

describe('App E2E', () => {
  let app: INestApplication;

  const tennisStub = {
    searchPlayers: async () => ({ player: [{ idPlayer: '1', strPlayer: 'Stub Federer' }] }),
    lookupPlayer: async () => ({ players: [{ idPlayer: '1', strPlayer: 'Stub Federer' }] }),
    searchEvents: async () => ({ event: [{ idEvent: '10', strEvent: 'Stub Wimbledon' }] }),
    listAllLeagues: async () => ({ leagues: [{ idLeague: '4464', strLeague: 'ATP World Tour', strSport: 'Tennis' }] }),
    nextEventsByLeague: async () => ({ events: [{ idEvent: '100', strEvent: 'Stub Next' }] }),
    pastEventsByLeague: async () => ({ events: [{ idEvent: '90', strEvent: 'Stub Past' }] }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(TennisService)
      .useValue(tennisStub)
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/courts (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/courts').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('/courts/:id (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/courts/court-md-1').expect(200);
    expect(res.body).toHaveProperty('id', 'court-md-1');
  });

  it('/courts/search (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/courts/search?q=baltimore').expect(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  it('/tennis/player (GET) [stubbed]', async () => {
    const res = await request(app.getHttpServer()).get('/tennis/player?name=Federer').expect(200);
    expect(res.body.player[0].strPlayer).toBe('Stub Federer');
  });
});