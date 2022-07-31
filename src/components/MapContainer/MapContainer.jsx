import React from 'react';

const MapContainer = () => {
  return (
    <section className="map">
      <div className="container">
          <div className="map__main">
            <h2 className="map__title">Наши станции на карте</h2>
            <section className="map__yandex">
              <div className="map-frame">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A5919a4499abe294201804f138c5c39eb9519b5e6b5fd791b20adf349051d6dc3&amp;source=constructor"
                  width="90%"
                  height="450"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                >
                </iframe>
              </div>
            </section>
          </div>
        </div>
    </section>
  );
};

export default MapContainer;
