///<reference path="../typings/tsd.d.ts"/>;
import * as THREE from 'three';
import {Game, IComponent} from './api/game';

export default class HelloWorld implements IComponent {
	
	private mesh : THREE.Mesh;

	constructor() {
        var geometry = new THREE.IcosahedronGeometry(200, 1 );
        var material =  new THREE.MeshBasicMaterial({
                                                    color: 0xfff999fff,
                                                    wireframe: true,  
                                                    wireframelinewidth:8 })
        this.mesh = new THREE.Mesh(geometry, material);		        
        Game.scene.add( this.mesh );
	}
    
	public update() {
        this.mesh.rotation.x = Date.now() * 0.00005;
        this.mesh.rotation.y = Date.now() * 0.0001; 
        this.mesh.position.y += 0.0005;          		
	}
}

