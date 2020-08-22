
export interface Streak {
  streakType: string;
  streakNumber: number;
  streakCode: string;
}

export interface TeamRecord {
  conferenceHomeRank: string;
  conferenceL10Rank: string;
  conferenceRank: string;
  conferenceRoadRank: string;
  divisionHomeRank: string;
  divisionL10Rank: string;
  divisionRank: string;
  divisionRoadRank: string;
  gamesPlayed: number;
  goalsAgainst: number;
  goalsScored: number;
  lastUpdated: string;
  leagueHomeRank: string;
  leagueL10Rank: string;
  leagueRank: string;
  leagueRecord: {
    wins: number;
    losses: number;
    ot: number;
    type: string;
  };
  leagueRoadRank: string;
  points: number;
  pointsPercentage: number;
  ppConferenceRank: string;
  ppDivisionRank: string;
  ppLeagueRank: string;
  regulationWins: number;
  row: number;
  streak: Streak;
  team: {
    id: number;
    name: string;
    link: string;
  }
  wildCardRank: string; 
}

export interface Conference {
  id: number;
  name: string;
  link: string;
}

export interface StandingsDivision {
  conference: Conference;
  division: {
    id: number;
    name: string;
    nameShort: string;
    link: string;
    abbreviation: string;
  };
  league: {
    id: number;
    name: string;
    link: string;
  };
  standingsType: string;
  teamRecords: TeamRecord[];
}

async function list() {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/standings').then(res => res.json())
  return response.records as StandingsDivision[]
}

export const Standings = {
  list
}