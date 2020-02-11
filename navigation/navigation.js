// Navigation/Navigation.js
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import Connexion from '../vues/Connexion';
import Inscription from '../vues/Inscription';
import Profil from '../vues/profil';

const SearchStackNavigator = createStackNavigator({
    Connexion: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
      screen: Connexion,
      navigationOptions: {
        title: 'Connexion'
      }
    },
    Profil: {
        screen : Profil
    },
    Accueil: {
      screen : Accueil
  }
  })

  export default createAppContainer(SearchStackNavigator);