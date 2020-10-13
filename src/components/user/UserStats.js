import React from 'react';
import Head from '../helper/Head';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../api';
import Loading from '../helper/Loading';
import Error from '../helper/Error';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

export default function UserStats() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title='Estatísticas' />
        <UserStatsGraphs data={data}/>
      </React.Suspense>
    );
  else return null;
}
