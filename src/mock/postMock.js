import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/post/pets-estressados').reply(200, {
  id: 1,
  title:
    'Uma onda de pets estressados',
  slug: 'pets-estressados',
  date: moment().subtract(1, 'day').toDate().getTime(),
  author: {
    id: 1,
    name: 'Andrea Montoya',
    avatar: '/img/avatar/avatar2.jpg',
  },
  markdownText: `
  _Compact style:_
  
  Term 1
    ~ Definition 1
  
  Term 2
    ~ Definition 2a
    ~ Definition 2b`,
  tags: ['educacao', 'saude', 'higiene', 'treinamento'],
  image: '/img/estresses.jpg',
  likes: 10,
  comments: 30,
});

mock.onGet('/api/posts/treinar-cachorro').reply(200,
{
  id: 2,
  title:
  'Como treinar seu cachorro para parar de ter medo',
  slug: 'treinar-cachorro',
  date: moment().subtract(1, 'day').toDate().getTime(),
  author: {
    id: 2,
    name: 'Roselino Alvarado',
    avatar: '/img/avatar/toby.svg',
  },
  markdownText: `
  _Compact style:_
  
  Term 1
    ~ Definition 1
  
  Term 2
    ~ Definition 2a
    ~ Definition 2b`,
  tags: ['educacao', 'saude', 'higiene', 'treinamento'],
  image: '/img/medo.jpg',
  likes: 10,
  comments: 30,
}

);

mock.onGet('/api/feed').reply(200, {
  posts: [
    {
      id: 1,
      title:
      'Uma onda de pets estressados',
      slug: 'pets-estressados',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Andrea Montoya',
        avatar: '/img/avatar/avatar2.jpg',
      },
      ttags: ['educacao', 'saude', 'higiene', 'treinamento'],
      image: '/img/estresses.jpg',
      likes: 10,
      comments: 30,
    },
    {
      id: 2,
      title: 'Como treinar seu cachorro para parar de ter medo',
      slug: 'treinar-cachorro',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Roselino Alvarado',
        avatar: '/img/avatar/toby.svg',
      },
      tags: ['educacao', 'saude', 'higiene', 'treinamento'],
      image: '/img/medo.jpg',
      likes: 200,
      comments: 100,
    },
  ],
});

mock.onGet('/api/posts/user/amontoya1').reply(200, {
  posts: [
    {
      id: 1,
      title:
      'Uma onda de pets estressados',
      slug: 'pets-estressados',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Andrea Montoya',
        avatar: '/img/avatar/avatar2.jpg',
      },
      tags: ['educacao', 'saude', 'higiene', 'treinamento'],
      image: '/img/estresses.jpg',
      likes: 10,
      comments: 30,
    },
  ],
});

mock.onGet('/api/posts/user/alvaradoR').reply(200, {
      posts: [
        {
      id: 2,
      title: 'Como treinar seu cachorro para parar de ter medo',
      slug: 'treinar-cachorro',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: '',
        avatar: '/img/avatar/toby.svg',
      },
      tags: ['educacao', 'saude', 'higiene', 'treinamento'],
      image: '/img/medo.jpg',
      likes: 200,
      comments: 100,
    },
  ],
});