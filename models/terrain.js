/**
 * Created by PhucT on 1/6/2017.
 */

/** define Terrain object **/
Terrain = function () {
    // create 3d object
    var object3d = new THREE.Object3D();

    // load model
    // load mtl file
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath('models/obj/');
    var index = parseInt(1 + Math.random() * 3);
    var filename = 'MountValley' + index;

    mtlLoader.load(filename + '.mtl', function (materials) {
        materials.preload();

        // load obj file
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('models/obj/');
        objLoader.load(filename + '.obj', function (object) {
            object.doubleSided = true;
            object3d.add(object);
        });
    });

    this.mesh = object3d;

    this.mesh.name = "terrain";

    // var boxG = new THREE.BoxGeometry(10, 2, 2, 8, 8, 8);
    // var m = new THREE.MeshLambertMaterial({
    //     color: Colors.pink
    // });
    // var ms = new THREE.Mesh(boxG, m);
    // ms.position.set(-25, 0, 0);
    // ms.name = "collision_box";
    // this.mesh.add(ms);
};
