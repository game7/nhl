
export interface Season {
  seasonId: string;
  regularSeasonStartDate: string;
  regularSeasonEndDate: string;
  seasonEndDate: string;
  numberOfGames: number;
  tiesInUse: boolean;
  olympicsParticipation: boolean;
  conferencesInUse: boolean;
  divisionsInUse: boolean;
  wildCardInUse: boolean;
}

async function list() {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/seasons').then(res => res.json())
  return response.seasons as Season[]
}

async function get(id: number) {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/seasons/${id}`).then(res => res.json())
  return response.seasons[0] as Season
}

function name(id: string) {
  return `${id.substr(0, 4)}-${id.substr(4, 4)}`
}

export const Seasons = {
  list,
  get,
  name
}