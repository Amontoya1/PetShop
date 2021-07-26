import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
  user: {
    id: 1,
    name: 'Andrea Montoya',
    username: 'amontoya1',
    email: 'tecnicosindependencia@gmail.com',
    avatar: '/img/avatar/avatar2.jpg',
  },
});

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  console.log(email, password);

  // if (email !== 'tecnicosindependencia@gmail.com' || password !== '123456') {
  //   return [400, { message: 'Seu e-mail ou senha estão incorretos' }];
  // }

  const user = {
    id: 1,
    name: 'Andrea Montoya',
    username: 'amontoya1',
    email: 'tecnicosindependencia@gmail.com',
    avatar: '/img/avatar/avatar2.jpg',
  };

  return [200, { user }];
});

mock.onGet('/api/home/user/amontoya1').reply(200, {
  id: 1,
  name: 'Andrea Montoya',
  username: 'amontoya1',
  email: 'tecnicosindependencia@gmail.com',
  accessToken: '123456',
  avatar: '/img/avatar/avatar2.jpg',
  joinedIn: '06 de janeiro, 2020',
  work: 'Analista de Sistemas',
  totalPost: '388',
});

mock.onGet('/api/home/user/alvaradoA').reply(200, {
  id: 2,
  name: 'Roselino Alvarado',
  username: 'alvaradoA',
  email: 'roselino@gmail.com',
  accessToken: '654321',
  avatar: '/img/avatar/toby.svg',
  joinedIn: '06 de janeiro, 2020',
  work: 'Arquiteto de Software',
  totalPost: '388',
});