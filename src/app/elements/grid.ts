///<reference path="../../typings/tsd.d.ts"/>;
import * as THREE from 'three';
import {Game, IComponent} from '../game/game';

export default class Grid implements IComponent {
    private grid;
	constructor() {
        var geometry = new THREE.PlaneBufferGeometry( 100, 100, 100, 100 );
        var material = new THREE.MeshBasicMaterial( { wireframe: true, opacity: 0.15, transparent: true } );
        var grid = new THREE.Mesh( geometry, material );
        grid.rotation.order = 'YXZ';
        grid.rotation.y = - Math.PI / 2;
        grid.rotation.x = - Math.PI / 2;
        grid.renderOrder = 1;
        grid.material.depthTest = false;
        this.grid = grid;
        Game.scene.add( grid );
	}
    
	public update() {
    }
}

