///<reference path="../../typings/tsd.d.ts"/>;
import * as THREE from 'three';

export interface IComponentClass {
    new (): IComponent;
}
export interface IComponent {
    update: () => void;
}

export class Game{
     
    public static camera;
    public static scene;
    public static renderer;
        
    public static init(){
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
        this.camera.position.z = 500;        
        this.scene = new THREE.Scene();        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight ) ;
        document.body.appendChild( this.renderer.domElement ) ;
        animation();   
    } 
    
    private static components = {};
    public static component(Component: IComponentClass) {
        var component = new Component();

        // get the name of the class
        var cstr = Component.prototype.constructor.toString();
        var key = cstr.substring(9, cstr.indexOf('('));
        
        this.components[key] = component;
    } 
    
    public static update(){
        for (var prop in this.components){
            var component = this.components[prop];
            component.update();
        }
        this.renderer.render( this.scene, this.camera);   
    }
}

// main logic/render loop
function animation() {
    window.requestAnimationFrame( animation );
    Game.update();
}

