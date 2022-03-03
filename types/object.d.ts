export class ObjectControls {
    constructor(object: any, trackBallRadius: any, camera: any, domElement: any);
    object: any;
    trackballRadius: any;
    camera: any;
    domElement: any;
    enabled: boolean;
    rotateSensitivity: number;
    relativelySpinOffTrackball: boolean;
    enableDamping: boolean;
    dampingFactor: number;
    POINTER_SPHERE_MAPPING: {
        SHOEMAKE: string;
        HOLROYD: string;
        AZIMUTHAL: string;
        RAYCAST: string;
    };
    offTrackBallVelocityGainMap: {
        shoemake: number;
        holroyd: number;
        azimuthal: number;
        raycast: number;
    };
    _pointerMapping: string;
    _offTrackBallVelocityGain: number | undefined;
    _pointerUpVelDamping: number;
    screen: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    update: () => void;
    updateAngularVelocity: (p1: any, p0: any, timeDelta: any) => void;
    applyVelocity: () => void;
    onWindowResize: () => void;
    resetInputAfterCameraMovement: () => void;
    getPointerInNdc: (pageX: any, pageY: any) => THREE.Vector2;
    onPointerDown: (pointerScreenX: any, pointerScreenY: any, time: any) => void;
    onPointerMove: (pointerScreenX: any, pointerScreenY: any, time: any) => void;
    setPointerToSphereMapping: (mappingTechnique: any) => void;
    handlePointerDown: (event: any) => void;
    handlePointerUp: (event: any) => void;
    cancelSpin: () => void;
    handleTouchStart: (event: any) => void;
    dispose: () => void;
}
import * as THREE from "three";
