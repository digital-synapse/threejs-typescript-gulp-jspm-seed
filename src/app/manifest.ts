import {Game}  from './api/game';
import CubicGrid from './cubic-grid';
import Grid from './grid';

Game.init();
Game.component(Grid);
Game.component(CubicGrid);