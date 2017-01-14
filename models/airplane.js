/**
 * Created by thienphuc on 29/12/2016.
 */

/** define the pilot body object **/
PilotBody = function () {
    // create body geometry
    var bodyGeometry = new THREE.BoxGeometry(15, 15, 15);

    // create body material
    var bodyMaterial = new THREE.MeshPhongMaterial({
        color: Colors.brown,
        shading: THREE.FlatShading
    });

    // create body mesh
    this.mesh = new THREE.Mesh(bodyGeometry, bodyMaterial);

    this.mesh.name = "pilot_body";
};

/** define pilot head object **/
PilotHead = function () {
    // create head geometry
    var headGeometry = new THREE.BoxGeometry(10, 10, 10);

    // create head material
    var headMaterial = new THREE.MeshLambertMaterial({
        color: Colors.pink
    });

    // create head mesh
    this.mesh = new THREE.Mesh(headGeometry, headMaterial);

    this.mesh.name = "pilot_head";
};

/** define pilot glasses **/
PilotGlasses = function () {
    // create 3D object
    this.mesh = new THREE.Object3D();

    this.mesh.name = "glasses";

    // create glass geometry
    var glassGeometry = new THREE.BoxGeometry(5, 5, 5);

    // create glass material
    var glassMaterial = new THREE.MeshLambertMaterial({
        color: Colors.brown
    });

    // create left glass mesh
    var lGlassMesh = new THREE.Mesh(glassGeometry, glassMaterial);

    lGlassMesh.position.set(6, 0, -3);

    // create right glass mesh
    var rGlassMesh = new THREE.Mesh(glassGeometry, glassMaterial);

    rGlassMesh.position.set(6, 0, 3);

    // create aside glass
    var aGlassMesh = new THREE.Mesh(glassGeometry, glassMaterial);

    aGlassMesh.position.set(6, 0, 0);

    aGlassMesh.scale.set(2, 1, 2);

    this.mesh.add(lGlassMesh);
    this.mesh.add(rGlassMesh);
    this.mesh.add(aGlassMesh);
};

/** define pilot ears object **/
PilotEars = function () {
    // create object 3D
    this.mesh = new THREE.Object3D();

    this.mesh.name = "pilot_ears";

    // create ears geometry
    var earsGeometry = new THREE.BoxGeometry(2, 3, 2);

    // create ears material
    var earsMaterial = new THREE.MeshLambertMaterial({
        color: Colors.pink
    });

    // create left ear
    var lEarMesh = new THREE.Mesh(earsGeometry, earsMaterial);

    // set the position
    lEarMesh.position.set(0, 0, -6);

    // create right ear
    var rEarMesh = new THREE.Mesh(earsGeometry, earsMaterial);

    // set the position
    rEarMesh.position.set(0, 0, 6);

    // add the the mesh
    this.mesh.add(lEarMesh);
    this.mesh.add(rEarMesh);

};

/**  define pilot hair object **/
PilotHair = function () {
    // create 3D object
    this.mesh = new THREE.Object3D();

    this.mesh.name = "pilot_hair";

    // create hair element
    var hairGeometry = new THREE.BoxGeometry(4, 4, 4);
    var hairMaterial = new THREE.MeshLambertMaterial({
        color: Colors.brown
    });

    // create hair element mesh
    var hairElementMesh = new THREE.Mesh(hairGeometry, hairMaterial);

    // align the shape of the hair to its bottom boundary
    // to make easier to scale
    hairElementMesh.applyMatrix(new THREE.Matrix4().makeTranslation(0, 2, 0));

    // create top hair
    var hairsTop = new THREE.Object3D();

    // create the hairs at the top of the head
    // and position them on a 3x4 grid
    for (var i = 0; i < 12; ++i) {
        var h = hairElementMesh.clone();
        var col = i % 3;
        var row =  Math.floor(i / 3);
        var startPosZ = -4;
        var startPosX = -4;
        h.position.set(startPosX + row * 4, 0, startPosZ + col * 4);
        hairsTop.add(h);
    }

    // add the hair top to the mesh
    this.mesh.add(hairsTop);

    // create the hairs at the side of the face
    // create hairs side geometry
    var hairsSideGeometry = new THREE.BoxGeometry(12, 4, 12);
    hairsSideGeometry.applyMatrix(new THREE.Matrix4().makeTranslation(-6, 0, 0));

    // create left hair side mesh
    var lHairsSideMesh = new THREE.Mesh(hairsSideGeometry, hairMaterial);

    // set the position
    lHairsSideMesh.position.set(8, -2, 6);

    // create right hair side mesh
    var rHairsSideMesh = new THREE.Mesh(hairsSideGeometry, hairMaterial);

    // set the position
    rHairsSideMesh.position.set(8, -2, -6);

    // add the hair side to the mesh
    this.mesh.add(lHairsSideMesh);
    this.mesh.add(rHairsSideMesh);

    // create back hair
    // create back hair geometry
    var hairsBackGeometry = new THREE.BoxGeometry(5, 5, 5);

    // create back hair mesh
    var hairsBackMesh = new THREE.Mesh(hairsBackGeometry, hairMaterial);

    // set the position
    hairsBackMesh.position.set(-1, -4, 0);
};

/** define Pilot object **/
Pilot = function () {
    // create 3d object
    this.mesh = new THREE.Object3D();

    this.mesh.name = "pilot";

    // create body
    var body = new PilotBody();

    //set the body position
    body.mesh.position.set(2,-12,0);

    // add to the mesh
    this.mesh.add(body.mesh);

    // create head
    var head = new PilotHead();

    // add to the mesh
    this.mesh.add(head.mesh);

    // create glasses
    var glass = new PilotGlasses();

    this.mesh.add(glass.mesh);

    // create ears
    var ears = new PilotEars();

    this.mesh.add(ears.mesh);

    // create hair
    var hair = new PilotHair();

    // set the position
    hair.mesh.position.set(-5, 5, 0);

    this.mesh.add(hair.mesh);
};

/** define airplane cabin object **/
PlaneCabin = function () {
    // create cabin geometry
    var cockpitGeometry = new THREE.BoxGeometry(60, 50, 50, 1, 1, 1);

    // access a specific vertex of shape through
    // the vertices array, then move its position
    cockpitGeometry.vertices[4].y -= 5;
    cockpitGeometry.vertices[4].z += 15;
    cockpitGeometry.vertices[5].y -= 5;
    cockpitGeometry.vertices[5].z -= 15;
    cockpitGeometry.vertices[6].y += 25;
    cockpitGeometry.vertices[6].z += 15;
    cockpitGeometry.vertices[7].y += 25;
    cockpitGeometry.vertices[7].z -= 15;

    // create cabin material
    var cockpitMaterial = new THREE.MeshPhongMaterial({
        color: Colors.red,
        shading: THREE.FlatShading
    });

    // create cabin mesh
    this.mesh = new THREE.Mesh(cockpitGeometry, cockpitMaterial);

    // activate cabin to cast and receive shadows
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    this.mesh.name = "plane_cabin";
};

/** define airplane engine object **/
PlaneEngine = function () {
    // create engine geometry
    var engineGeometry = new THREE.BoxGeometry(20, 50, 50, 1, 1, 1);

    // create engine material
    var engineMaterial = new THREE.MeshPhongMaterial({
        color: Colors.white,
        shading: THREE.FlatShading
    });

    // create engine mesh
    var engineMesh = new THREE.Mesh(engineGeometry, engineMaterial);

    // activate engine to cast and receive shadows
    engineMesh.castShadow = true;
    engineMesh.receiveShadow = true;

    this.mesh = engineMesh;

    this.mesh.name = "plane_engine";
};

/** define airplane tail object **/
PlaneTail = function () {
    // create tail geometry
    var tailGeometry = new THREE.BoxGeometry(15, 20, 5, 1, 1, 1);

    // create tail material
    var tailMaterial = new THREE.MeshPhongMaterial({
        color: Colors.red,
        shading: THREE.FlatShading
    });

    // create tail mesh
    this.mesh = new THREE.Mesh(tailGeometry, tailMaterial);

    // activate tail to cast and receive shadows
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    this.mesh.name = "plane_tail";
};

/** define airplane wing object **/
PlaneWing = function () {
    // create wing geometry
    var sideWingGeometry = new THREE.BoxGeometry(40, 15, 130, 1, 1, 1);

    // create wing material
    var sideWingMaterial = new THREE.MeshPhongMaterial({
        color: Colors.red,
        shading: THREE.FlatShading
    });


    // create wing mesh
    this.mesh = new THREE.Mesh(sideWingGeometry, sideWingMaterial);

    // activate the wing to cast and receive shadows
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    this.mesh.name = "plane_wing";
};

/** define airplane propeller **/
PlanePropeller = function () {
    // create propeller geometry
    var propellerGeometry = new THREE.BoxGeometry(20, 10, 10, 1, 1, 1);

    // create propeller material {
    var propellerMaterial = new THREE.MeshPhongMaterial({
        color: Colors.brown,
        shading: THREE.FlatShading
    });

    // create propeller mesh
    this.mesh = new THREE.Mesh(propellerGeometry, propellerMaterial);

    // activate propeller to cast and receive shadows
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    this.mesh.name = "plane_propeller";
};

/** define airplane blades **/
PlaneBlades = function () {
    // create blades geometry
    var bladesGeometry = new THREE.BoxGeometry(1, 100, 20, 1, 1, 1);

    // create blades material
    var bladesMaterial = new THREE.MeshPhongMaterial({
        color: Colors.brownDark,
        shading: THREE.FlatShading
    });

    // create blades mesh
    this.mesh = new THREE.Mesh(bladesGeometry, bladesMaterial);

    // activate engine to cast and receive shadows
    this.mesh.castShadow =  true;
    this.mesh.receiveShadow = true;

    this.mesh.name = "plane_blades";
};

/** define airplane object **/
AirPlane = function () {
    // create 3D object
    this.mesh = new THREE.Object3D();

    this.mesh.name = "air_plane";

    // create the cabin
    var cabin = new PlaneCabin();

    // add to the plane mesh
    this.mesh.add(cabin.mesh);

    // create the engine
    var engine = new PlaneEngine();

    // set engine position
    engine.mesh.position.x = 40;

    // add to the mesh
    this.mesh.add(engine.mesh);

    // create the tail
    var tail = new PlaneTail();

    // set position
    tail.mesh.position.set(-35, 25, 0);

    // add to the mesh
    this.mesh.add(tail.mesh);

    // create the wing
    var wing = new PlaneWing();

    // add to the mesh
    this.mesh.add(wing.mesh);

    // create the blades
    var blades = new PlaneBlades();

    // set position
    blades.mesh.position.set(8, 0, 0);

    // create the propeller
    var propeller = new PlanePropeller();

    // set position
    propeller.mesh.position.set(50, 0, 0);

    // add the blades to the propeller
    propeller.mesh.add(blades.mesh);

    // add to the mesh
    this.mesh.add(propeller.mesh);

    // create a pilot
    var pilot = new Pilot();

    pilot.mesh.position.set(6, 35, 0);

    // add to the mesh
    this.mesh.add(pilot.mesh);

    // var boxG = new THREE.BoxGeometry(100, 100, 100, 8, 8, 8);
    // var m = new THREE.MeshLambertMaterial({
    //     color: Colors.pink
    // });
    // var ms = new THREE.Mesh(boxG, m);
    // ms.position.set(0, 0, 0);
    // ms.name = "collision_box";
    // this.mesh.add(ms);
};
