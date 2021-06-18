import { initializeApollo, addApolloState } from '../lib/apolloClient';

const Todos = () => (
  <div>
    <h1>Main</h1>
  </div>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ``,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default Todos;
