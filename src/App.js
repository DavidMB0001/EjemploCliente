// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DisplayEpisodios />
    </div>
  );
}
const GET_EPISODIOS = gql`
  query {
    episodes {
      results {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`;
function DisplayEpisodios() {
  const { loading, error, data } = useQuery(GET_EPISODIOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.episodes.results.map(
    ({ id, name, air_date, episode, created }) => (
      <div key={id}>
        <h3>{name}</h3>
        <b>{air_date}</b>
        <br />
        <b>Episodio:</b>
        <p>{episode}</p>
        <p>{created}</p>
        <br />
      </div>
    )
  );
}
