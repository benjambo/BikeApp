import React from 'react'
import { Map, TileLayer} from 'react-leaflet'
import Routing from './Routing'

class MapComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      isMapInit: false,
    }
  }

  saveMap = (map) => {
    this.map = map
    this.setState({
      isMapInit: true,
    })
  }

  render() {
    const { lat, lng, zoom } = this.state
    const position = [lat, lng]

    return (
      <div className="pages">
        <div className="map-container">
          <Map center={position} zoom={zoom} ref={this.saveMap}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {this.state.isMapInit && <Routing map={this.map} />}
          </Map>
        </div>
      </div>
    )
  }
}

export default MapComponent
