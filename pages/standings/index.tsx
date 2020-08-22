import React from 'react';
import { Standings, StandingsDivision } from "../../nhl/standings";
import { NextPage } from "next";
import { Table, Header } from 'semantic-ui-react';

type Props = {
  divisions: StandingsDivision[]
}


const Page: NextPage<Props> = ({ divisions }) => {
  const conferences: { [key: string]: StandingsDivision[] } = divisions.reduce((results, next) => {
    return {
      ...results,
      [next.conference.name]: [...(results[next.conference.name] || []), next]
    }
  }, {})
  return (
    <div>
      <h1>Standings</h1>
      <pre>{JSON.stringify(conferences["Eastern"][0].teamRecords[0], null, 2)}</pre>
      {Object.keys(conferences).map(conf => (
        <React.Fragment>
          <Header as="h2">{conf}</Header>
          {conferences[conf].map(division => (
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>{division.division.name}</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">GP</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">W</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">L</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">PTS</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {division.teamRecords.map(record => (
                  <Table.Row>
                    <Table.Cell>{record.team.name}</Table.Cell>
                    <Table.Cell textAlign="center" width="4">{record.gamesPlayed}</Table.Cell>
                    <Table.Cell textAlign="center">{record.regulationWins}</Table.Cell>
                    <Table.Cell textAlign="center">{record.leagueRecord.losses}</Table.Cell>
                    <Table.Cell textAlign="center">{record.points}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
        divisions: await Standings.list()
    }
  }
}


export default Page