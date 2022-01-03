export const textFormatter = string => {
  const formattedText = string.split('')[0].toUpperCase() + string.slice(1);
  return formattedText;
};

export const sendData = async userData => {
  const res = await fetch(
    'https://neogrammers-70e6e-default-rtdb.firebaseio.com/users.json',
    {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json',
      },
    }
  );
  if (!res.ok) throw new Error('Something went wrong!');
};

export const getData = async () => {
  const res = await fetch(
    'https://neogrammers-70e6e-default-rtdb.firebaseio.com/users.json'
  );
  const data = await res.json();
  if (!data) return [];
  const usersData = Object.values(data);
  return usersData;
};
