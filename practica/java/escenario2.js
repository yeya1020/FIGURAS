// escenario

const scene = new THREE.Scene();

{
	const color=0xFF3E00;
	const near =0.4;
	const far =40;
	const density =90;
	scene.fog =new THREE.Fog(color, near, far, density);
}

scene.background = new THREE.Color(0x660033)


var loader = new THREE.TextureLoader();
loader.load('./imagenes/fondonegro.jpg', function(texture){
	scene.background = texture;
});



//camara 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
// render 
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias
const geometry = new THREE.ConeGeometry( 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xFFFB00} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 25;


//animacion
function animate() {
	requestAnimationFrame( animate );
	cone.rotation.y +=0.1
	cone.rotation.x +=0.1
	renderer.render( scene, camera );
}
animate();