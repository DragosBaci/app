import {theme} from '../Constants/colors';
import {typography} from '../Constants/typography';

const generalTabBarOptions = () => {
  return {
    tabBarInactiveTintColor: theme.secondaryFontColor,
    tabBarInactiveBackgroundColor: theme.mainSurface,
    tabBarActiveTintColor: theme.fontColor,
    tabBarActiveBackgroundColor: theme.aboutSubscreenButtonsInactive,
    tabBarShowLabel: true,
    tabBarItemStyle: {
      borderRadius: 8,
      ...typography.body_s,
      padding: 5,
      margin: 1,
    },
    tabBarStyle: {
      borderTopWidth: 0,
      backgroundColor: theme.mainSurface,
      height: 80,
      paddingHorizontal: 10,
      paddingBottom: 0,
      paddingTop: 10,
      marginBottom: 5,
    },
    headerShown: false,
  };
};

export default generalTabBarOptions;
