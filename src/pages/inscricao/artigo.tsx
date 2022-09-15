import ArticleForm from 'components/ArticleForm'
import { GetServerSidePropsContext } from 'next'
import FormTemplate from 'templates/FormTemplate'
import protectedRoutes from 'utils/protected-routes'

export default function SubscriptionArticle() {
  return (
    <FormTemplate>
      <ArticleForm />
    </FormTemplate>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: { session }
  }
}
