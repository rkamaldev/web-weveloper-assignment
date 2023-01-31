export const apiRequest = function (pageNumber) {
  const FETCH_USERS_API = process.env.FETCH_USERS_API;
  console.log(`${FETCH_USERS_API}?page=${pageNumber}`);

  return fetch(`${FETCH_USERS_API}?page=${pageNumber}`);
};

const filterUserDataBasedOnName = (userData = []) => {
  return (
    userData.filter(user => {
      if (!user || !user.first_name || !user.last_name) {
        return false;
      }

      return user.first_name.toUpperCase().startsWith('G') || user.last_name.toUpperCase().startsWith('W');
    }) || []
  );
};

/**
 *  This technique works better when there are a limited number of pages. (1 to 5 pages)
 *  if the number of pages increases, this approach is not recommended since it will perform a sequence request (will add latency to api)
 *  better to use parallel request with concurrent parallel request limit
 *  for example, if there are 100 pages. Make ten parallel requests at a time and execute them in ten batches.
 * */
export const fetchUsers = async function (pageNumber = 1, dataToReturn = []) {
  let newDataToReturn = dataToReturn;
  const apiResponse = await (await apiRequest(pageNumber)).json();

  newDataToReturn = [...newDataToReturn, ...apiResponse.data];
  if (apiResponse.data && apiResponse.data.length > 0) {
    return fetchUsers(pageNumber + 1, newDataToReturn);
  }

  return filterUserDataBasedOnName(newDataToReturn);
};
