import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import PerfilTemplate from 'templates/PerfilTemplate'

export default function MeusArtigos() {
  return <PerfilTemplate />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: { session }
  }
}
