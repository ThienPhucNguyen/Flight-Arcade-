/**
 * Created by PhucT on 1/7/2017.
 */

/** define Enemy object **/
Enemy = function () {
    // create 3d object
    var object3d = new THREE.Object3D();

    // load model
    // load mtl file
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath('models/obj/');
    mtlLoader.load('pk_ship.mtl', function (materials) {
        materials.preload();

        // load obj file
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('models/obj/');
        objLoader.load('pk_ship.obj', function (object) {
            object.doubleSided = true;
            object3d.add(object);
        });
    });

    this.mesh = object3d;

    this.mesh.name = "enemy";
};