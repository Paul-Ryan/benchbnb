export const fetchLogin = (username, password) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/session',
    data: { user: { username: username, password: password }}
  });
};

export const fetchLogout = () => {
    $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};

export const fetchSignup = (username, password) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/users',
    data: { user: { username: username, password: password }}
  });
};
