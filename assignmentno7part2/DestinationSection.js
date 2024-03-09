import React from 'react';

function DestinationsSection() {
  return (
    <section id="destinations" className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination">
        <img src="destination1.jpg" alt="Destination 1" />
        <p>Description of Destination 1</p>
      </div>
      <div className="destination">
        <img src="destination2.jpg" alt="Destination 2" />
        <p>Description of Destination 2</p>
      </div>
      {/* Add more destinations as needed */}
    </section>
  );
}

export default DestinationsSection;
