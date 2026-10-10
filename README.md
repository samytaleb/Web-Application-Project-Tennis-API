# Tennis REST API — NestJS

A modular **TypeScript / NestJS** backend combining local tennis-court management with live sports information retrieved from **TheSportsDB**.

## Features

- Read, search, create and update tennis courts stored in a local JSON file.
- Search players and events via a third-party REST API.
- Look up a player by ID, list tennis leagues and retrieve upcoming or past league events.
- DTOs with NestJS validation and a test suite using Jest.

## Architecture

```text
src/
├── courts/
│   ├── courts.controller.ts
│   ├── courts.service.ts
│   ├── dto/
│   └── entities/
├── tennis/
│   ├── tennis.controller.ts
│   └── tennis.service.ts
├── app.module.ts
└── main.ts
data/courts.json
test/app.e2e-spec.ts
```

The application calls TheSportsDB from `src/tennis/tennis.service.ts`. The current implementation uses the service's publicly documented demo key in its URL; external rate limits or API changes may affect results.

## Install and run

Requires **Node.js 20+** and npm.

```bash
npm ci
npm run start:dev
```

The API listens on `http://localhost:3000` by default; set the `PORT` environment variable to change it.

## Implemented endpoints

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/courts` | List courts; optional `?q=` search |
| GET | `/courts/:id` | Retrieve a court |
| POST | `/courts` | Create a court from a validated DTO |
| PUT | `/courts/:id` | Update favorite status |
| GET | `/tennis/player?name=Nadal` | Search for a player |
| GET | `/tennis/player/:id` | Look up a player |
| GET | `/tennis/event?title=Wimbledon` | Search for events |
| GET | `/tennis/leagues` | List tennis leagues; optional `?country=` |
| GET | `/tennis/events/next?leagueId=4464` | Upcoming events for a league |
| GET | `/tennis/events/past?leagueId=4464` | Past events for a league |

Endpoints not listed above have **not** been implemented. External API calls require an internet connection.

### Example

```bash
curl "http://localhost:3000/tennis/player?name=Nadal"
curl "http://localhost:3000/courts"
```

## Quality checks

```bash
npm run build
npm test -- --runInBand
npm run test:e2e -- --runInBand
```

The repository includes controller/service tests and an end-to-end test file. The project is a learning/demo application; it is not a production-grade sports information service.

## License and attribution

Built with the [NestJS framework](https://nestjs.com/) and integrating [TheSportsDB](https://www.thesportsdb.com/). The NestJS framework's license is **not** a license grant for this entire repository. This project does not currently publish its own open-source license; seek the owner's permission before redistributing its source.
