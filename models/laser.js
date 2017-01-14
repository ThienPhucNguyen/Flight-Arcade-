/**
 * Created by thienphuc on 07/01/2017.
 */

/** define Laser object **/
Laser = function () {
    // create geometry
    var geometry = new THREE.CylinderGeometry(0.6, 0.6, 6);

    // create material
    var material = new THREE.MeshPhongMaterial({
        color: Colors.red,
        shininess: 1.0,
        specular: 0xffffff,
        shading: THREE.FlatShading
    });

    // create mesh
    this.mesh = new THREE.Mesh(geometry, material);

    this.mesh.rotation.set(0, -Math.PI / 2, -Math.PI / 2);
};

LasersHolder = function (nLaser) {
    // create 3d object
    this.mesh = new THREE.Object3D();

    this.mesh.name = "lasers_holder";

    // contain lasers
    this.lasersPool = [];

    for (var i = 0; i < nLaser; ++i) {
        var laser = new Laser();

        laser.mesh.position.x = -5 + i * 6;

        laser.mesh.visible = true;

        // add to container
        this.mesh.add(laser.mesh);

        this.lasersPool.push(laser);
    }
};
