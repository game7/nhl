import { Team, Teams } from "../../nhl/teams";
import { NextPage } from "next";
import Link from 'next/link';

type Props = {
  team: Team
}

const Page: NextPage<Props> = ({ team }) => {
  return (
    <div>
      <h1>{team.name}</h1>
      <pre>{JSON.stringify(team, null, 2)}</pre>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = (await Teams.list()).map(team => `/teams/${team.id}`)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params
  return {
    props: {
      team: await Teams.get(id)
    }
  }
}


export default Page