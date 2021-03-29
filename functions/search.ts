import { AppSyncResolverHandler } from "aws-lambda";
import axios from 'axios'

export const handler: AppSyncResolverHandler<any, any> = async (event) => {
  console.log('event', event);

  const { name, page } = event.arguments;
  console.log('name', name);
  console.log('page', page);

  let url = `https://swapi.dev/api/people/?search=${name}`;
  if (page) url += `&page=${page}`;
  console.log('url', url);

  const { data } = await axios.get(url);
  console.log('data', data);

  const { count, next, previous, results } = data;

  return {
    count,
    next,
    previous,
    people: results,
  }
}
