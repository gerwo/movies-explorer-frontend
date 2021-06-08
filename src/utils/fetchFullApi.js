const fetchFullApi = async ({
  BASE_URL, path = '', method = 'GET', body = null, credentials = 'include', headers = {}, mode = 'cors',
}) => {
  const res = await fetch(`${BASE_URL}/${path}`, {
    method,
    headers,
    body: body && JSON.stringify(body),
    credentials,
    mode,
  });

  if (!res.ok) {
    const error = await res.json();
    return Promise.reject(new Error(`${error.message}`));
  }

  return res.json();
};

export default fetchFullApi;
