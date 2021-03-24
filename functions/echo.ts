import { AppSyncResolverHandler } from "aws-lambda";

export const handler: AppSyncResolverHandler<any, any> = async (event) => {
  console.log('event', event);

  const { arg1 } = event.arguments;
  console.log('arg1', arg1);

  return arg1
}
