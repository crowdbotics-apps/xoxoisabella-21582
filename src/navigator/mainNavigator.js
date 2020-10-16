import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2145589Navigator from '../features/BlankScreen2145589/navigator';
import BlankScreen1145588Navigator from '../features/BlankScreen1145588/navigator';
import BlankScreen0145575Navigator from '../features/BlankScreen0145575/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2145589: { screen: BlankScreen2145589Navigator },
BlankScreen1145588: { screen: BlankScreen1145588Navigator },
BlankScreen0145575: { screen: BlankScreen0145575Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
