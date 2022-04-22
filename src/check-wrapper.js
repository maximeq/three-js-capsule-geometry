import { CapsuleBufferGeometry } from "./exports.js";

function checkLib(libName, lib) {

    try {

        if (THREE[libName] === undefined) {
            THREE[libName] = lib;
            return;
        }

        if (THREE[libName] !== lib) {
            let message = `CapsuleBufferGeometry: ${libName} is duplicated. Your bundle includes ${libName} twice. Please repair your bundle.`
            throw message;
        }
    }
    catch {
        console.warn(`CapsuleBufferGeometry: THREE is not defined. Duplication check unavailable.`);
    }
}

checkLib("CapsuleBufferGeometry", CapsuleBufferGeometry);

export {
    CapsuleBufferGeometry,
}
