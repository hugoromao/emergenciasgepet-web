// import { GetServerSidePropsContext } from 'next'
import FormTemplate from 'templates/FormTemplate'

import SubscriptionForm from 'components/SubscriptionForm'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

export default function Subscription() {
  return (
    <FormTemplate>
      <SubscriptionForm />
    </FormTemplate>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: { session }
  }
}
