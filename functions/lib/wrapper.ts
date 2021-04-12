export default function wrapper(lambda: any) {
  return async function (event: any, context: any) {
    try {
      return await lambda(event, context);
    } catch (e) {
      console.log('error', e);
      const json = JSON.stringify(e, null, 2);
      console.log('JSON error', json);
      throw Error(json);
    }
  };
}
