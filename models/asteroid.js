/**
 * Created by thienphuc on 02/01/2017.
 */

/** define Asteroid object **/
Asteroid = function () {
    // create geometry
    var geometry = new THREE.TetrahedronGeometry(8, 2);

    // create material
    var material = new THREE.MeshPhongMaterial({
        color: Colors.brown,
        shininess: 0,
        specular: 0xffffff,
        shading: THREE.FlatShading
    });

    // create mesh
    this.mesh = new THREE.Mesh(geometry, material);

    this.mesh.name = "asteroid";

    this.mesh.castShadow = true;

    this.mesh.visible = true;
};