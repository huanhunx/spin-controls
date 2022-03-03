import {
  EventDispatcher,
  Object3D,
  PerspectiveCamera,
  Vector2,
  Vector3,
} from "three";

export class ObjectControls extends EventDispatcher {
  object: Object3D;
  trackballRadius: number;
  camera: PerspectiveCamera;
  domElement: Document;

  enabled: boolean;
  rotateSensitivity: number;
  relativelySpinOffTrackball: boolean;
  enableDamping: boolean;
  dampingFactor: boolean;
  spinAxisConstraint?: Vector3;

  POINTER_SPHERE_MAPPING: {
    SHOEMAKE: "shoemake";
    HOLROYD: "holroyd";
    AZIMUTHAL: "azimuthal";
    RAYCAST: "raycast";
  };

  offTrackBallVelocityGainMap: {
    shoemake: 20;
    holroyd: 8;
    azimuthal: 8;
    raycast: 20;
  };

  screen: {
    left: number;
    top: number;
    width: number;
    height: number;
  };

  constructor(
    object: Object3D,
    trackBallRadius: number,
    camera: PerspectiveCamera,
    domElement?: Document | HTMLElement
  );

  update(): void;

  updateAngularVelocity(p1: Vector3, p0: Vector3, timeDelta: number): void;

  applyVelocity(): void;

  onWindowResize(): void;

  resetInputAfterCameraMovement(): void;

  getPointerInNdc(pageX: number, pageY: number): Vector2;

  //   onPointerDown(
  //     pointerScreenX: number,
  //     pointerScreenY: number,
  //     time: number
  //   ): void;

  //   onPointerMove(
  //     pointerScreenX: number,
  //     pointerScreenY: number,
  //     time: number
  //   ): void;

  setPointerToSphereMapping(mappingTechnique: string): void;

  cancelSpin(): void;

  dispose(): void;

  //   handlePointerDown(event: MouseEvent | TouchEvent): void;
  //   handlePointerUp(event: MouseEvent | TouchEvent): void;
  //   onMouseDown(event: MouseEvent | TouchEvent): void;
  //   onMouseMove(event: MouseEvent | TouchEvent): void;
  //   onMouseUp(event: MouseEvent | TouchEvent): void;
}
