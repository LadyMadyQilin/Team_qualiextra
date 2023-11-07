import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 48.856614,
      lng: 2.3522219
    },
    zoom: 12
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '50%', borderRadius: '2Rem', overflow: 'hidden' }}>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}