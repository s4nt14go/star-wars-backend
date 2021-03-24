import { AppSyncResolverHandler } from "aws-lambda";
import axios from 'axios'

export const handler: AppSyncResolverHandler<any, any> = async (event) => {
  console.log('event', event);

  const { name } = event.arguments;
  console.log('name', name);

  const url = `https://swapi.dev/api/people/?search=${name}`;

  const { data } = await axios.get(url);

  const { count, next, previous, results } = data;

  return {
    count,
    next,
    previous,
    people: results,
  }
}
