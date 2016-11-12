///<reference path="../typings/tsd.d.ts"/>;
import * as THREE from 'three';
import {Game, IComponent} from './api/game';

export default class CubicGrid implements IComponent {
	
	private mesh : THREE.Mesh;

	constructor() {

        var geometry,
            material,
            cube,
            mapSize = 70;

        for (let i = 0, lenX = mapSize; i < lenX; i++) {
            for (let j = 0, lenY = mapSize; j < lenY; j++) {
                geometry = new THREE.BoxGeometry(1, 1, 1);
                material = new THREE.MeshLambertMaterial({});
                cube = new THREE.Mesh(geometry, material);
                cube.position.x = i-mapSize/2;
                cube.position.y = j-mapSize/2;
                Game.scene.add( cube );
            }
        }

	}
    
	public update() {}
}

