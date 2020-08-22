import { Season, Seasons } from "../../nhl/seasons";
import { NextPage } from "next";
import Link from 'next/link';

type Props = {
  seasons: Season[]
}


const Page: NextPage<Props> = ({ seasons }) => {
  return (
    <div>
      <h1>Seasons</h1>
      <ul>
        {seasons.map(s => (
          <li>
            <Link href="/seasons/[id]" as={`/seasons/${s.seasonId}`}>
              <a>
                {Seasons.name(s.seasonId)}
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
      seasons: await Seasons.list()
    }
  }
}


export default Page