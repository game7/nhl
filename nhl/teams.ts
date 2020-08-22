
export interface Team {
  id: number;
  name: string;
  link: string;
  venue : {
    id: number;
    name: string;
    link: string;
    city: string;
    timeZone: {
      id: string;
      offset: number;
      tz: string;
    }
  };
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: number
  division: {
    id: number;
    name: string;
    nameShort: string;
    link: string;
    abbreviation: string;
  };
  conference : {
    id: number;
    name: string;
    link: string;
  };
  franchise : {
    franchiseId : 22,
    teamName: string;
    link: string;
  };
  shortName: string;
  officialSiteUrl: string;
  franchiseId: number;
  active: boolean;
}

async function list() {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams').then(res => res.json())
  return response.teams as Team[]
}

async function get(id: number) {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}`).then(res => res.json())
  return response.teams[0] as Team
}

export const Teams = {
  list,
  get
}