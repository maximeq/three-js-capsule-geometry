
// Main HTML script used in most examples
//
// Global variable "geometry", a THREE.BufferGeometry computed from a Blobtree.RootNode, must have been defined in a previously included script
// Global variable "mesh", a mesh using "geometry", must have been defined in a previously included script.

var camera, controls, scene, renderer, shadow;

init();
animate();

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set( 0, 100, 0 );

    // controls

    controls = new THREE.OrbitControls( camera, renderer.domElement );

    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.2;

    controls.screenSpacePanning = false;

    controls.minDistance = 10;
    controls.maxDistance = 1000;

    // Initial Polar angle position
    controls.maxPolarAngle = Math.PI/3;
    controls.minPolarAngle = Math.PI/3;
    controls.update();

    controls.maxPolarAngle = Math.PI;

    controls.rotationSpeed = 0.4;

    scene.add( mesh );

    // hacked "shadow" (Projection of the geometry on a plane below the object, with solid color.)
    shadow = new THREE.Mesh(
        new THREE.BufferGeometry(),
        new THREE.MeshBasicMaterial( { color: 0xe0e0e0, side: THREE.DoubleSide } )
    );
    updateShadow();
    scene.add(shadow);

    // lights

    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    light.intensity = 0.6
    scene.add( light );
    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 1, 1, -1 );
    light.intensity = 0.2;
    scene.add( light );
    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( -1, -1, -1 );
    light.intensity = 0.4;
    scene.add( light );

    var light = new THREE.AmbientLight( 0x222222 );
    scene.add( light );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function updateShadow() {
    // Try to build a shadow based on the meshes in the scene.
    shadow.geometry = null;
    scene.traverse(function(obj){
        if(obj instanceof THREE.Mesh && obj !== shadow){
            if(obj.geometry.boundingBox === null){
                obj.geometry.computeBoundingBox();
            }
            shadow.geometry = shadow.geometry ? THREE.BufferGeometryUtils.mergeBufferGeometries( [shadow.geometry,obj.geometry] ) : obj.geometry;
        }
    });
    if(!shadow.geometry.boundingBox){
        shadow.geometry.computeBoundingBox();
    }
    shadow.geometry = shadow.geometry.clone().scale(1,0.00001,1).translate(0,-shadow.geometry.boundingBox.getSize(new THREE.Vector3()).y/1.5,0);
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );

    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

    render();

}

function render() {

    renderer.render( scene, camera );

}