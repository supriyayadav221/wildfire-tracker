import GoogleMapReact from 'google-map-react'

const Map=({center,zoom})=> {
    return (
        <div className="map">
           <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBD-hAnqajLh1dg4vyrBEvRsBIjV82u5Xk'
          }}
          defaultCenter={center}
          defaultZoom={zoom}
        ></GoogleMapReact>
        </div>
    )
}
Map.defaultProps={
    center :{
        lat :30.0668,
        lng :79.0193
    },
    zoom:6
}
export default Map
