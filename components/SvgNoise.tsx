const SvgNoise = () => {
  return (
    <svg
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        overflow: "clip",
      }}
    >
      <defs>
        <filter
          id="noiseFilter"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1"
            numOctaves="1"
            seed="2"
            stitchTiles="stitch"
            result="turbulence"
          ></feTurbulence>
          <feSpecularLighting
            surfaceScale="25"
            specularConstant="0.5"
            specularExponent="2"
            lightingColor="#484848"
            in="turbulence"
          >
            <feDistantLight azimuth="3" elevation="100"></feDistantLight>
          </feSpecularLighting>
          <feComponentTransfer in="lit" result="litOpaque">
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feComposite in="litOpaque" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>
    </svg>


  );
};

export default SvgNoise;
