import { Team, Teams } from "../../nhl/teams";
import { NextPage } from "next";
import Link from 'next/link';

type Props = {
  teams: Team[]
}

const Page: NextPage<Props> = ({ teams }) => {
  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {teams.map(t => (
          <li>
            <Link href="/teams/[id]" as={`/teams/${t.id}`}>
              <a>
                {t.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      teams: await Teams.list()
    }
  }
}


export default Page