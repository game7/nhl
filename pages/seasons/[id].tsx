import { Season, Seasons } from "../../nhl/seasons";
import { NextPage } from "next";
import Link from 'next/link';

type Props = {
  season: Season
}

const Page: NextPage<Props> = ({ season }) => {
  return (
    <div>
      <h1>{Seasons.name(season.seasonId)}</h1>
      <pre>{JSON.stringify(season, null, 2)}</pre>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = (await Seasons.list()).map(season => `/seasons/${season.seasonId}`)
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
      season: await Seasons.get(id)
    }
  }
}


export default Page