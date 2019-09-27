// React tutorial
// https://reactjs.org/tutorial/tutorial.html

import './index.css';
import Game from './components/Game';
import { place } from '../todomvc/lib/state-ui-lib';

const root = document.getElementById('root');
place(Game(), root);
