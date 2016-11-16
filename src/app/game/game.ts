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

        //Scene
        this.scene = new THREE.Scene()

        //Camera
        let aspect = window.innerWidth / window.innerHeight;
        let d = 10;
        this.camera = new THREE.OrthographicCamera( - d * aspect, d * aspect, d, - d, 1, 1000 );
        this.camera.position.set( 20, 20, 20 ); // all components equal
        this.camera.lookAt( this.scene.position ); // or the origin

        // light
        var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 ); // soft white light
        this.scene.add( light );

        //Render
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

