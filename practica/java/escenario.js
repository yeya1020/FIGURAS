// escena

const scene = new THREE.Scene();
{
	const color=0xFFFFFF;
	const near =1;
	const far =10;
	const density =90;
	scene.fog =new THREE.Fog(color, near, far, density);
}

scene.background = new THREE.Color(0x660033)

var loader = new THREE.TextureLoader();
loader.load('./imagenes/anillo.jpg', function(texture){
	scene.background = texture;
});



// camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
// render 
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0xFF0A03} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;


//animacion
function animate() {
	requestAnimationFrame( animate );
	cube.rotation.y +=0.1
	cube.rotation.x +=0.1
	renderer.render( scene, camera );
}
animate();