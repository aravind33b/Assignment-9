import React from 'react';
import Card from '../Cards/card';
import FB from '../../Images/facebook.png';
import LinkedIn from '../../Images/linkedin.png';
import Twitter from '../../Images/twitter.png';

function Jobs() {
  const colors=[{"id": "1", "image":FB},{"id": "2", "image":LinkedIn},{"id": "3", "image":Twitter}]
  return(
    <div>
      <h2 style={{textAlign: 'center' }}>Jobs</h2>
      <div style={{ textAlign: 'center' }}>
      {colors.map((selectedColor) => (<Card key={selectedColor.id} image={selectedColor.image}></Card>))}
      </div>
    </div>
  );
}

export default Jobs;