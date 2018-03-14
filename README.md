# three-js-capsule-geometry

A CapsuleBufferGeometry as a new geometry primitive for THREE.JS.

A capsule shape is basically made of two spheres and a sliced cylinder. This definition can be extended using two spheres of different radius and a sliced cone.
However, connecting the cone and the spheres to ensure normal continuity is not as trivial as it may seem.

This class has been designed to create a consistant and smooth capsule geometry for THREE.JS. Normal continuity is ensured and the resulting geometry is one closed shell.

You can play with the parameters of this class [on the dualbox.com capsule-geometry webapp](https://dualbox.com/apps/capsule-geometry/production)

More on the extended capsule geometry :

![alt text](https://github.com/maximeq/three-js-capsule-geometry/blob/master/What_Is_A_Capsule.jpg "Extended Capsule Geometry definition")


