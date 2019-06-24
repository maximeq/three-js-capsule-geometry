# three-js-capsule-geometry

A CapsuleBufferGeometry as a new geometry primitive for THREE.JS.

A capsule shape is basically made of two spheres and a sliced cylinder. This definition can be extended using two spheres of different radius and a sliced cone.
However, connecting the cone and the spheres to ensure normal continuity is not as trivial as it may seem.

This class has been designed to create a consistant and smooth capsule geometry for THREE.JS. Normal continuity is ensured and the resulting geometry is one closed shell.

You can play with the parameters of this class [on the dualbox.com capsule-geometry webapp](https://dualbox.com/apps/capsule-geometry/production)

More on the extended capsule geometry :

![alt text](https://github.com/maximeq/three-js-capsule-geometry/blob/master/What_Is_A_Capsule.jpg "Extended Capsule Geometry definition")

### Setup ###

Assuming that npm and node are already installed.

Clone the current repository. Then in the repository folder :
````
npm install
````
This should install all required dependencies for build and development.

### Usage ###

You can use this library directly in browser or from node.js.

#### Browser ####

Distribution files can be found in ./dist/browser, to be included in your HTML :

````
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>THREE CapsuleBufferGeometry</title>
    </head>
    <body>
        <!-- Don't forget to include THREE, its is not shipped with the lib -->
        <script src="three.js"></script>
        <script src="dist/browser/three-js-capsule-geometry.js"></script>
        <script>
            alert('Checking definition of CapsuleBufferGeometry : ' + THREE.CapsuleBufferGeometry !== undefined)
        </script>
    </body>
</html>
````

#### Node ####

May come one day on npm.

### Repository Commands ###

Build:
````
npm run build
````
Will update the browser build in dist.

### Dependencies ###

#### Node Dependencies ####
This library currently depends on node module three-full which is packaging all THREE.JS sources, including extras like examples.
It can work with only THREE, but for convenience we rely on three-full.

#### Browser Dependencies ####
In browser, only THREE is required.
