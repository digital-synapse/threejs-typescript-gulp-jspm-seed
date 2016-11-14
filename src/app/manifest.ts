import {Game}  from './game/game';
import {Api} from './api/api'
import CubicGrid from './elements/cubic-grid';
import Grid from './elements/grid';


var dataRequest = {
    url: 'example/data-names.json',
    method: 'GET',
    statusAcceptence: [200, 201, 204],
    headers: [
        {
            name: 'Content-Type',
            value: 'application/json'
        }
    ]
};

Api.request(dataRequest).then(
    function(res){
        console.log(res);
    },
    function(err){
        console.log(err);
    }
);

Game.init();
Game.component(Grid);
Game.component(CubicGrid);