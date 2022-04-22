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

### Build ###

Build:
````
npm run build
````
Will update the browser/node/esm builds in `dist/`.

### Usage ###

You can use this library :
* directly in browser
* from node.js
* with your bundler

Distribution files can be found in `dist/`.
#### Browser ####

Include `dist/three-js-capsule-geometry.js` in your HTML :

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

This is an IIFE bundle.

#### Node ####

In a node shell or cjs file:
```
require("three-js-capsule-geometry")
```

Or if you want to perform duplication detection (see below):
```
THREE = require("three")
require("three-js-capsule-geometry")
```

This will require the CJS bunlde.

#### Bundlers ####

```
import {CapsuleBufferGeometry} from "three-js-capsule-geometry"
```

This will import the ESM entry point, for you to bundle directly from sources.

Duplication detection is available when THREE.js is set as external.

To avoid dependancy duplication, make sure you use the "dedupe" option of your bundler for THREE and CapsuleBufferGeometry.

### Duplication detection

This package performs duplication detection (useful for bundlers) by checking against the`THREE` global and assigning itself to it. It `THREE` is not defined, no detection will occur. 

### Dependencies ###

This library currently depends on THREE.js.

