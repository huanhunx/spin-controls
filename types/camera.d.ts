import {
  Matrix4,
  Object3D,
  PerspectiveCamera,
  Vector3,
  MOUSE,
  EventDispatcher,
} from "three";

export class CameraControls extends EventDispatcher {
  domElement: Document | HTMLElement;
  enabled: boolean;
  object: PerspectiveCamera;
  targetObj: Object3D;
  target: Vector3;

  startTrackballScreenCenter: boolean;
  trackballToObject: Matrix4;

  // How far you can dolly in and out ( PerspectiveCamera only )
  // Will cause jumps if target is moved closer or further than limits
  minDistance: number;
  maxDistance: number;

  // How far you can zoom in and out ( OrthographicCamera only )
  minZoom: number;
  maxZoom: number;

  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop
  enableDamping: boolean;
  dampingFactor: number;

  // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming
  enableZoom: boolean;
  zoomSpeed: number;

  // Use setEnableRotate(isEnabled) function
  enableRotate: boolean;

  // Set to false to disable panning
  enablePan: boolean;
  panSpeed: number;
  screenSpacePanning: boolean; // if true, pan in screen-space
  keyPanSpeed: number; // pixels moved per arrow key push

  // Set to false to disable use of the keys
  enableKeys: boolean;

  // The four arrow keys
  keys: { LEFT: 37; UP: 38; RIGHT: 39; BOTTOM: 40 };

  // Mouse buttons
  mouseButtons: {
    LEFT: MOUSE.LEFT;
    MIDDLE: MOUSE.MIDDLE;
    RIGHT: MOUSE.RIGHT;
  };

  target0: Vector3;
  position0: Vector3;
  zoom0: number;

  constructor(
    camera: PerspectiveCamera,
    domElement?: Document | HTMLElement,
    isAutoMoveToFingersCenter?: boolean
  );

  setEnableRotate(isEnabled: boolean): void;
  saveState(): void;
  reset(): void;
  movedTarget(): void;
  setTargetPosition(positionVector: Vector3): void;
  update(): void;
  onWindowResize(): void;
  adjustTrackballRadius(): void;
  dispose(): void;
}
