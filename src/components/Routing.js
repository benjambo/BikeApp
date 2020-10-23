import { MapLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-routing-machine'
import { withLeaflet } from 'react-leaflet'

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props
    let leafletElement = L.Routing.control({
      waypoints: [L.latLng(60.176123, 24.946), L.latLng(60.174325, 24.952123)],
    }).addTo(map.leafletElement)
    return leafletElement.getPlan()
  }
}
export default withLeaflet(Routing)
