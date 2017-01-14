/**
 * Created by thienphuc on 08/01/2017.
 */

/** define Coin object **/
Coin = function () {
    // create coin geometry
    var geometry = new THREE.TetrahedronGeometry(3, 1);

    // create material
    var material = new THREE.MeshPhongMaterial({
        color: Colors.cyan,
        shininess: 0,
        specular: 0xffffff,
        shading: THREE.FlatShading
    });

    // create coin mesh
    this.mesh = new THREE.Mesh(geometry, material);

    this.mesh.name = "coin";

    this.mesh.castShadow = true;
};

/** define CoinsHolder object **/
CoinsHolder = function (nCoin) {
    // create 3d object
    this.mesh = new THREE.Object3D();

    this.mesh.name = "coins_holder";

    // contain the coins
    this.coinsPool = [];

    for (var i = 0; i < nCoin; ++i) {
        var coin = new Coin();

        coin.mesh.position.x = 0;
        coin.mesh.position.y = -5 + i * 5;
        coin.mesh.position.z = 0;

        coin.mesh.scale.set(0.5, 0.5, 0.5);

        coin.mesh.visible = true;

        this.coinsPool.push(coin);

        this.mesh.add(coin.mesh);
    }
};


