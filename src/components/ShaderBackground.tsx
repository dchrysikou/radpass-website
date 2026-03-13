import { useEffect, useRef } from 'react';

export const ShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    updateCanvasSize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = canvas.height - e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateCanvasSize);

    const vertexShaderSource = `
      attribute vec3 aPosition;

      void main() {
        gl_Position = vec4(aPosition, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision highp float;

      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      uniform vec3 u_col1;
      uniform vec3 u_col2;
      uniform vec3 u_col3;

      float rand(vec2 co){
        return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
      }

      vec4 circle(vec2 st, vec2 center, float radius, float blur, vec3 col){
        float dist = distance(st, center) * 2.0;
        vec4 f_col = vec4(1.0 - smoothstep(radius, radius + blur, dist));
        f_col.r *= col.r;
        f_col.g *= col.g;
        f_col.b *= col.b;
        return f_col;
      }

      void main(){
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;

        vec2 pst = st * vec2(aspect, 1.);
        vec2 mst = st;

        vec2 m = u_mouse.xy / u_resolution.xy;

        vec3 col1 = u_col1 / 255.;
        vec3 col2 = u_col2 / 255.;
        vec3 col3 = u_col3 / 255.;

        vec2 purpleC = vec2(
          0.5 + sin(u_time * 0.12) * 0.3,
          0.5 + cos(u_time * 0.15) * 0.3
        );
        float purpleR = .75;
        float purpleB = .75;
        vec3 purpleCol = col1;

        vec2 mintC = vec2(.5 + sin(u_time * .4) * .5 * cos(u_time * .2) * .5,
                          .5 + sin(u_time * .3) * .5 * cos(u_time * .5) * .5);

        float mintR = 1.;
        float mintB = 1.;
        vec3 mintCol = col2; 

        vec2 greenC = vec2((.5 + cos(u_time * .5) * .5 * sin(u_time * .2) * .5) * aspect,
                           .5 + cos(u_time * .4) * (.5) * sin(u_time * .3) * .5);

        float greenR = 0.65;
        float greenB = 0.8;
        vec3 greenCol = col3;

        pst.x += sin(u_time * .15 + pst.x * 19.) * .37 * cos(u_time * .46 + pst.y * 25.) * .28;
        pst.y += cos(u_time * .27 + pst.x * 4.) * .45 * sin(u_time * .24 + pst.y * 8.) * .22;

        mst.x += cos(u_time * .37 + mst.x * 15.) * .21 * sin(u_time * .14 + mst.y * 7.) * .29;
        mst.y += sin(u_time * .15 + mst.x * 13.) * .37 * cos(u_time * .36 + mst.y * 5.) * .12;

       vec4 color = vec4(vec3(88.0,86.0,82.0)/255.0, 1.0);

        color += circle(pst, purpleC, purpleR, purpleB, purpleCol) * 0.9;
        color += circle(mst, mintC, mintR, mintB, mintCol) * 0.9;
        color += circle(pst, greenC, greenR, greenB, greenCol) * 0.9;

        float noise = rand(st * 10.) * .2;
        color.rgb *= 1. - vec3(noise);
        color.rgb = color.rgb / (.1 + color.rgb);

vec2 lightPos = vec2(0.9, 0.15); // top-right light
float light = distance(st, lightPos);

vec3 warmLight = vec3(245.0,245.0,245.0)/255.0;

color.rgb = mix(warmLight, color.rgb, smoothstep(0.2, 1.4, light));

        vec3 cream = vec3(246.0,240.0,228.0)/255.0;
        color.rgb = mix(cream, color.rgb, 0.8);
        gl_FragColor = vec4(color.rgb, 1.0);
      }
    `;

    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1, 0,
      1, -1, 0,
      -1, 1, 0,
      -1, 1, 0,
      1, -1, 0,
      1, 1, 0
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

    const col1Location = gl.getUniformLocation(program, 'u_col1');
    const col2Location = gl.getUniformLocation(program, 'u_col2');
    const col3Location = gl.getUniformLocation(program, 'u_col3');


gl.uniform3f(col2Location, 0, 0, 0);
gl.uniform3f(col1Location, 0, 0, 0);
gl.uniform3f(col3Location, 186, 180, 170);  

    function render(time: number) {
      if (!gl || !canvas) return;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform2f(mouseLocation, mouseRef.current.x, mouseRef.current.y);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameRef.current = requestAnimationFrame(render);
    }

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
};
