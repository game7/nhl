import { Franchise, Franchises } from "../../nhl/franchises";
import { NextPage } from "next";
import Link from 'next/link';

type Props = {
  franchise: Franchise
}

const Page: NextPage<Props> = ({ franchise }) => {
  return (
    <div>
      <h1>{franchise.locationName} {franchise.teamName}</h1>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = (await Franchises.list()).map(f => `/franchises/${f.franchiseId}`)
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
      franchise: await Franchises.get(id)
    }
  }
}


export default Page