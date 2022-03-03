export class CameraControls {
    constructor(camera: any, domElement: any, isAutoMoveToFingersCenter?: boolean);
    domElement: any;
    enabled: boolean;
    object: any;
    targetObj: THREE.Object3D<THREE.Event>;
    target: THREE.Vector3;
    startTrackballScreenCenter: boolean;
    trackballToObject: THREE.Matrix4;
    minDistance: number;
    maxDistance: number;
    minZoom: number;
    maxZoom: number;
    enableDamping: boolean;
    dampingFactor: number;
    enableZoom: boolean;
    zoomSpeed: number;
    enableRotate: boolean;
    enablePan: boolean;
    panSpeed: number;
    screenSpacePanning: boolean;
    keyPanSpeed: number;
    enableKeys: boolean;
    keys: {
        LEFT: number;
        UP: number;
        RIGHT: number;
        BOTTOM: number;
    };
    mouseButtons: {
        LEFT: THREE.MOUSE;
        MIDDLE: THREE.MOUSE;
        RIGHT: THREE.MOUSE;
    };
    target0: THREE.Vector3;
    position0: any;
    zoom0: any;
    setEnableRotate: (isEnabled: any) => void;
    saveState: () => void;
    reset: () => void;
    movedTarget: () => void;
    setTargetPosition: (positionVector: any) => void;
    update: () => boolean;
    onWindowResize: () => void;
    adjustTrackballRadius: () => void;
    dispose: () => void;
    STATE: {
        NONE: number;
        ROTATE: number;
        DOLLY: number;
        PAN: number;
        TOUCH_DOLLY_PAN: number;
    };
    spinControl: SpinControls;
}
import * as THREE from "three";
import { ObjectControls as SpinControls } from "./object";
