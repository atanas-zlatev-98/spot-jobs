import type { NextPage } from 'next'
import { Button, Container, SSRProvider } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import JobsContainer from '../components/jobs/JobsContainer';
import Layout from '../components/jobs/layout/default';
import LoginForm from '../components/login/LoginForm';
import { queryClient } from './_app';
import { useCurrentUserQuery } from "../generates/graphql";
import HomePage from './HomePage';



const Home: NextPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const { data, isLoading, error, refetch } = useCurrentUserQuery(undefined, {
    refetchOnWindowFocus: false,
    retry: 1,
  });
  return (

    <Layout>
      <HomePage></HomePage>
    </Layout>

  )
}

export default Home