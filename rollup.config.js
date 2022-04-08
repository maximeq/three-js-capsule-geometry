import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const MODULE_NAME = 'THREECapsuleBufferGeometry';
const MODULE_FILENAME = 'three-js-capsule-geometry';
const DIST = './dist';

// external libs which must not be bundled
const externals = [
    'three'
];

// globals where the external libs are expected (iife only)
const globals = {
    'three': 'THREE'
}

export default {
    input: './src/exports.js',
    plugins: [
        commonjs(), // handles requires in CJS dependancies
        resolve(), // resolves node_module dependancies
    ],
    external: externals,
    output: [
        // output options

        {   // for bundlers
            format: 'esm',
            file: `${DIST}/${MODULE_FILENAME}.mjs`,
        },
        {   // for browser (debug)
            format: 'iife',
            name: MODULE_NAME,
            globals: globals,
            file: `${DIST}/${MODULE_FILENAME}.js`,
            sourcemap: true, // for easier debugging in dev tools
        },
        {   // for browser (minified)
            format: 'iife',
            name: MODULE_NAME,
            globals: globals,
            file: `${DIST}/${MODULE_FILENAME}.min.js`,
            plugins: [
                terser(), // minify
            ]
        },
    ]
};
