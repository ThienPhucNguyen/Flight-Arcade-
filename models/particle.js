/**
 * Created by thienphuc on 09/01/2017.
 */

/** define Particle object **/
Particle = function () {
    // create particle geometry
    var geometry = new THREE.TetrahedronGeometry(3, 0);

    // create material
    var material = new THREE.MeshPhongMaterial({
        color: Colors.cyan,
        shininess: 0,
        specular: 0xffffff,
        shading: THREE.FlatShading
    });

    // create Particle mesh
    this.mesh = new THREE.Mesh(geometry, material);

    this.name = "particle";
};

ParticlesHolder = function (pos, density, scale, color) {
    // create 3d object
    this.mesh = new THREE.Object3D();

    this.particlesPool = [];

    var nParticles = density;
    for (var i = 0; i < nParticles; ++i) {
        var particle = new Particle();

        this.mesh.add(particle.mesh);

        particle.mesh.position.y = pos.y;
        particle.mesh.position.x = pos.x;

        this.particlesPool.push(particle);

        this.mesh.add(particle.mesh);
    }

    this.scale = scale;

    this.color = color;

    this.mesh.visible = false;

    this.mesh.name = "particles_holder";
};

ParticlesHolder.prototype.explode = function () {
    this.mesh.material.color = new THREE.Color(this.color);

    this.mesh.material.needsUpdate = true;

    this.mesh.scale.set(this.scale, this.scale, this.scale);

    this.mesh.visible = true;

    var targetX = pos.x + (-1 + Math.random() * 2) * 50;
    var targetY = pos.y + (-1 + Math.random() * 2) * 50;
    var speed = .6 + Math.random() * .2;

    TweenMax.to(this.mesh.rotation, speed, { x: Math.random() * 12, y: Math.random() * 12 });
    TweenMax.to(this.mesh.scale, speed, { x: .1, y: .1, z: .1 });

    var _this = this;

    TweenMax.to(this.mesh.position, speed, {
        x: targetX,
        y: targetY,
        delay: Math.random() * .1,
        ease: Power2.easeOut,
        onComplete: function() {
            _this.mesh.scale.set(1, 1, 1);

            _this.mesh.visible = false;
        }
    });
};


