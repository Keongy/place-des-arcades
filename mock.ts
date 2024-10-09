//crée un objet mock.ts qui contient les mêmes propriétés que toute les pages du projet
const mock = {
  french: {
    mainPage: {
      title: "Bienvenue au livret d'accueil Place des Arcades",
      modules: [
        {
          title: 'Infos arrivée',
          location: '/check-in',
        },
        {
          title: 'Infos Pratiques',
          location: '/check-in',
        },
        {
          title: 'Infos départ',
          location: '/check-out',
        },
        {
          title: 'Wifi',
          location: '/wifi',
        },
        {
          title: 'Autour de moi',
          location: '/around-me',
        },
      ],
    },
  },
  english: {},
};
