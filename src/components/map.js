import MarkerClusterGroup from '@changey/react-leaflet-markercluster'
import { Marker, TileLayer, MapContainer } from 'react-leaflet'
//////////////////////////////////////////////////

const TILE_LAYER_URL = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'

export const MapComponent = ({ position }) => (
  <MapContainer
    zoom={14}
    minZoom={1}
    maxZoom={16}
    scrollWheelZoom={false}
    style={{ height: '218px' }}
    center={position}
  >
    <TileLayer
      url={TILE_LAYER_URL}
    />
    <MarkerClusterGroup>
      <Marker position={position}>
      </Marker>
    </MarkerClusterGroup>
  </MapContainer>
)
