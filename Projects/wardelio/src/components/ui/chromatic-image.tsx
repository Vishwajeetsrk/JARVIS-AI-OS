"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const vertexShaderSource = `
  attribute vec2 position;
  attribute vec2 texCoord;
  varying vec2 vTexCoord;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
    vTexCoord = texCoord;
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  varying vec2 vTexCoord;
  uniform sampler2D uImage;
  uniform float uAberration;
  uniform float uTime;

  void main() {
    float amount = uAberration * 0.01;
    vec4 r = texture2D(uImage, vec2(vTexCoord.x + amount, vTexCoord.y));
    vec4 g = texture2D(uImage, vTexCoord);
    vec4 b = texture2D(uImage, vec2(vTexCoord.x - amount, vTexCoord.y));
    gl_FragColor = vec4(r.r, g.g, b.b, g.a);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource)!;
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource)!;
  const program = gl.createProgram()!;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    return null;
  }
  return program;
}

export const ChromaticImage = ({
  src,
  alt = "chromatic image",
  className,
  aberration = 5,
  hoverAberration = 12,
}: {
  src: string;
  alt?: string;
  className?: string;
  aberration?: number;
  hoverAberration?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const rafRef = useRef<number>(0);
  const aberrationRef = useRef(aberration);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false }) as WebGLRenderingContext | null;
    if (!gl) return;

    const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
    if (!program) return;

    const positionAttributeLocation = gl.getAttribLocation(program, "position");
    const texCoordAttributeLocation = gl.getAttribLocation(program, "texCoord");
    const imageLocation = gl.getUniformLocation(program, "uImage");
    const aberrationLocation = gl.getUniformLocation(program, "uAberration");
    const timeLocation = gl.getUniformLocation(program, "uTime");

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0]),
      gl.STATIC_DRAW,
    );

    const texture = gl.createTexture();
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = src;
    imageRef.current = image;

    let textureLoaded = false;

    image.onload = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = image.width * dpr;
      canvas.height = image.height * dpr;
      canvas.style.width = image.width + "px";
      canvas.style.height = image.height + "px";
      gl.viewport(0, 0, canvas.width, canvas.height);

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      textureLoaded = true;
    };

    const render = (time: number) => {
      if (!textureLoaded) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);

      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.enableVertexAttribArray(texCoordAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.vertexAttribPointer(texCoordAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(imageLocation, 0);
      gl.uniform1f(aberrationLocation, aberrationRef.current);
      gl.uniform1f(timeLocation, time * 0.001);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    const handleMouseEnter = () => {
      aberrationRef.current = hoverAberration;
    };
    const handleMouseLeave = () => {
      aberrationRef.current = aberration;
    };
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [src, aberration, hoverAberration]);

  return (
    <div className={cn("relative inline-block overflow-hidden rounded-xl", className)}>
      <canvas ref={canvasRef} className="block max-w-full" />
      {/* fallback alt text for accessibility */}
      <span className="sr-only">{alt}</span>
    </div>
  );
};

export default ChromaticImage;
