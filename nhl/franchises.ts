
export interface Franchise {
  franchiseId: number;
  firstSeasonId: number;
  mostRecentTeamId: number;
  teamName: string;
  locationName: string;
  link: string;
}

async function list() {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/franchises').then(res => res.json())
  return response.franchises as Franchise[]
}

async function get(id: number) {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/franchises/${id}`).then(res => res.json())
  return response.franchise as Franchise
}

export const Franchises = {
  list,
  get
}