export const fetchBenches = (success) => {
  $.ajax({
    method: "GET",
    url: '/api/benches',
    success,
    error: () => console.log('You dun f*d up SON, this is your fetchBenches api_util talking')
  });
};
