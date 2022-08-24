// escenario

const scene = new THREE.Scene();

{
	const color=0x6FD75D;
	const near =1;
	const far =10;
	const density =90;
	scene.fog =new THREE.Fog(color, near, far, density);
}

scene.background = new THREE.Color(0x660033)


var loader = new THREE.TextureLoader();
loader.load('./imagenes/azul.jpg', function(texture){
	scene.background = texture;
});



// camara 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
// window.innerWidth, window.innerHeight es el alto y ancho de la pantalla a la que se le va a arenderizar 
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias
const geometry = new THREE.CylinderGeometry( 5, 5, 8, 10 );
const material = new THREE.MeshBasicMaterial( {color: 0x00FBFF} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 25;


//animacion
function animate() {
	requestAnimationFrame( animate );
	cylinder.rotation.y +=0.1
	cylinder.rotation.x +=0.1
	renderer.render( scene, camera );
}
animate();