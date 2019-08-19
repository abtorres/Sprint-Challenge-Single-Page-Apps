import React from "react";
import { Tab, Icon } from "semantic-ui-react";
import WelcomePage from './WelcomePage';

// TODO: Add missing tabs below
const panes = [
    { menuItem: 'Home Page', render: () => <Tab.Pane>{<WelcomePage/>}</Tab.Pane> },
    { menuItem: 'Characters', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 4 Content</Tab.Pane> },
]

const HomeIcon = () => <Icon name='home'/>
  
const TabExampleBasic = () => <Tab panes={panes} />
  
export default TabExampleBasic;

