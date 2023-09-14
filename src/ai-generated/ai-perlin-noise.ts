class PerlinNoise2D {
    private perm: number[];
  
    constructor() {
      // Generate a random permutation table
      this.perm = [...Array(512)].map(() => Math.floor(Math.random() * 255));
      this.perm = this.perm.concat(this.perm); // Duplicate for wrapping
    }
  
    private fade(t: number): number {
      return t * t * t * (t * (t * 6 - 15) + 10);
    }
  
    private lerp(t: number, a: number, b: number): number {
      return a + t * (b - a);
    }
  
    private grad(hash: number, x: number, y: number): number {
      const h = hash & 7; // Convert low 3 bits of hash code into 8 gradient directions
      const u = h < 4 ? x : y;
      const v = h < 4 ? y : x;
      const grad = (h & 1 ? -u : u) + (h & 2 ? -2.0 * v : 2.0 * v);
      return grad;
    }
  
    noise(x: number, y: number): number {
      // Calculate grid cell coordinates
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
  
      // Relative x and y coordinate in grid cell
      x -= Math.floor(x);
      y -= Math.floor(y);
  
      // Fade curves for x and y
      const u = this.fade(x);
      const v = this.fade(y);
  
      // Hash coordinates of the 4 grid corners
      const A = this.perm[X] + Y;
      const B = this.perm[X + 1] + Y;
  
      // Blend the gradients at each corner
      const n00 = this.lerp(u, this.grad(this.perm[A], x, y), this.grad(this.perm[B], x - 1, y));
      const n01 = this.lerp(u, this.grad(this.perm[A + 1], x, y - 1), this.grad(this.perm[B + 1], x - 1, y - 1));
  
      // Interpolate the results along the y-axis
      return this.lerp(v, n00, n01);
    }
  }

  //Added typing that ChatGPT missed
  
  function renderPerlinNoise() {
    const canvas = document.getElementById("perlinCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const perlin2D = new PerlinNoise2D();
    const scaleSlider = document.getElementById("scaleSlider") as HTMLInputElement;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
  
    // Function to update the canvas when the scale slider changes
    function updateCanvas() {
      const scale = parseFloat(scaleSlider.value);
      
      for (let x = 0; x < canvasWidth; x++) {
        for (let y = 0; y < canvasHeight; y++) {
          // Generate Perlin noise value at (x, y) and map it to grayscale
          const value = perlin2D.noise(x * scale, y * scale);
          const colorValue = Math.floor((value + 1) * 128); // Map to [0, 255]
          ctx.fillStyle = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  
    // Add an event listener to the scale slider
    scaleSlider.addEventListener("input", updateCanvas);
  
    // Call updateCanvas to initially render the noise
    updateCanvas();
  }
  
  // Call the renderPerlinNoise function when the page loads
  window.onload = renderPerlinNoise;