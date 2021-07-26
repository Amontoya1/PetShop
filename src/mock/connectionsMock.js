import mock from '../utils/mock';

mock.onGet('/api/connections/followers/pessoas').reply(200, {
  followers: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Fernanda Souza',
        username: 'fersouza10',
        avatar: '/img/avatar/shenna.jpg',
      },
      following: false,
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Andreina Ruiz',
        username: 'andreaR',
        avatar: '/img/avatar/shenna.jpg',
      },
      following: true,
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'Andrea Guevara',
        username: 'andreaG',
        aavatar: '/img/avatar/shenna.jpg',
      },
      following: false,
    },
    {
      id: 4,
      user: {
        id: 4,
        name: 'Josefina De La rosa',
        username: 'josefin',
        avatar: '/img/avatar/shenna.jpg',
      },
      following: false,
    },
  ],
});

mock.onGet('/api/connections/following/pessoas').reply(200, {
  following: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Fernanda Souza',
        username: 'fersouza10',
        avatar: '/images/avatars/child.png',
      },
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Andreina Ruiz',
        username: 'andreaR',
        avatar: '/images/avatars/shenna.png',
      },
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'Andrea Guevara',
        username: 'andreaG',
        avatar: '/images/avatars/secondlife.jpg',
      },
    },
    {
      id: 4,
      user: {
        id: 4,
        name: 'Josefina De La rosa',
        username: 'josefin',
        avatar: '/images/avatars/woman.jpg',
      },
    },
  ],
});