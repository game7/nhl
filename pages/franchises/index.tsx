import { Franchise, Franchises } from "../../nhl/franchises";
import { NextPage } from "next";
import Link from 'next/link';

type Props = {
  franchises: Franchise[]
}

const Page: NextPage<Props> = ({ franchises }) => {
  return (
    <div>
      <h1>Franchises</h1>
      <ul>
        {franchises.map(f => (
          <li>
            <Link href="/franchises/[id]" as={`/franchises/${f.franchiseId}`}>
              <a>
                {f.locationName} {f.teamName}
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
      franchises: await Franchises.list()
    }
  }
}


export default Page