/**
 * Created by PhucT on 1/6/2017.
 */

/** define Cloud object **/
Cloud = function () {
    // create an empty container that will hold
    // the different parts of the cloud
    var object3d = new THREE.Object3D();

    // create simple material
    var material = new THREE.MeshPhongMaterial({
        color: Colors.white,
        transparent: true,
        opacity: 1.0,
        shading: THREE.FlatShading
    });

    // load obj file
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath('models/obj/');
    objLoader.load('cloud.obj', function (object) {
        object.doubleSided = true;
        object.material = material;
        object3d.add(object);
    });

    this.mesh = object3d;

    this.mesh.name = "cloud";
};