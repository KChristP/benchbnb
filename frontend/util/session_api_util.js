export const signup = (success, error, data) => {
  $.ajax({
      type: 'POST',
      url: 'api/users',
      dataType: 'json',
      data,
      success
    });
};

export const login = (success, error, data) => {
  $.ajax({
      type: 'POST',
      url: 'api/session',
      dataType: 'json',
      data,
      success
    });
};

export const logout = (success, error) => {
  $.ajax({
      type: 'DELETE',
      url: 'api/session',
      dataType: 'json',
      success
    });
};
