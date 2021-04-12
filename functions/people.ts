import { AppSyncResolverHandler } from "aws-lambda";
import axios from 'axios'
import wrapper from "./lib/wrapper";

export const handler: AppSyncResolverHandler<any, any> = wrapper(async (event: any) => {
  console.log('event', event);

  const { page } = event.arguments;
  console.log('page', page);

  let url = 'https://swapi.dev/api/people/';
  if (page) url += `?page=${page}`;
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
})
