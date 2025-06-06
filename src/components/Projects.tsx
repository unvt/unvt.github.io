
export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>
        We have various projects under the UNVT because it is a toolkit for supporting web map publishers.
        There are different deployment arrangement for different data environments. Still we share software and documents as much as possible.
      </p>
      <h3>UNGSC deployment</h3>
      <p>Our priority project led by <a href="https://github.com/ubukawa" target="_blank" rel="noopener noreferrer">@ubukawa</a>.</p>
      <h4>Related programs</h4>
      <ul>
        <li><a href="https://github.com/un-vector-tile-toolkit/produce-320" target="_blank" rel="noopener noreferrer">produce-320</a> for production from planet.osm.pbf</li>
        <li><a href="https://github.com/un-vector-tile-toolkit/onyx" target="_blank" rel="noopener noreferrer">onyx</a> for serving from 4096 mbtiles.</li>
      </ul>
      <h3><a href="https://maps.gsi.go.jp/vector" target="_blank" rel="noopener noreferrer">GSI Maps Vector</a></h3>
      <ul>
        <li><a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel="noopener noreferrer">gsimaps-vector-experiment</a> is by GSI.</li>
        <li><a href="https://github.com/optgeo/toki" target="_blank" rel="noopener noreferrer">toki</a> is faster style.json for GSI Maps Vector Tiles</li>
      </ul>
      <h3>gh-pages series</h3>
      <ul>
        <li><a href="https://github.com/un-vector-tile-toolkit/ango-static" target="_blank" rel="noopener noreferrer">ango</a> - Natural disaster monuments in vector tiles</li>
        <li><a href="https://un-vector-tile-toolkit.github.io/inazo-static/" target="_blank" rel="noopener noreferrer">inazo</a> - EuroGlobalMap in vector tiles</li>
        <li><a href="https://github.com/un-vector-tile-toolkit/koji-static" target="_blank" rel="noopener noreferrer">koji</a> - 3D visualization of population density in vector tiles</li>
      </ul>
      <h3>Misora</h3>
      <p>Misora is UNVT Raspberry Pi implementation.</p>
      <h4>Misora ledger</h4>
      <p><a href="https://github.com/un-vector-tile-toolkit/tsukuba" target="_blank" rel="noopener noreferrer">tsukuba</a> is a Misora ledger.</p>
      <h3>equinox</h3>
      <p><a href="https://github.com/unvt/equinox" target="_blank" rel="noopener noreferrer">equinox</a> is UNVT one-line installer for Raspbian Lite.</p>
      <h3>nanban</h3>
      <p><a href="https://github.com/unvt/nanban" target="_blank" rel="noopener noreferrer">nanban</a> is a developer friendly UNVT Dockerfile.</p>
      <h3>Vector Tile Academy (VTA) and naru</h3>
      <p>
        <a href="https://unvt.github.io/vta" target="_blank" rel="noopener noreferrer">Vector Tile Academy (VTA)</a> is a technology transfer material of UNVT.
        We are also implementing <a href="https://github.com/unvt/naru" target="_blank" rel="noopener noreferrer">naru</a> which is the working file repository for VTA.
      </p>
    </section>
  );
}
