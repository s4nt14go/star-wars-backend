import { AppSyncResolverHandler } from "aws-lambda";
import axios from 'axios'

let url = 'https://swapi.dev/api/people/';

export const handler: AppSyncResolverHandler<any, any> = async (event) => {
  console.log('event', event);

  const { page } = event.arguments;
  console.log('page', page);

  if (page) url += `?page=${page}`;

  const { data } = await axios.get(url);

  const { count, next, previous, results } = data;

  return {
    count,
    next,
    previous,
    people: results,
  }
}
