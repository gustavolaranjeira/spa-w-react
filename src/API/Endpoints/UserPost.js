import React from 'react';

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      username,
      password,
      email,
    });
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <h2>{username}</h2>
      <h2> {password}</h2>
      <h2>{email}</h2>
      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
