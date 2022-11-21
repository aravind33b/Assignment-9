import React from 'react';
import Card from '../Cards/card';
import Ronaldo from '../../Images/ronaldo.jpeg';
import Rafa from '../../Images/rafa.png';
import Dravid from '../../Images/dravid.jpeg';

function Contact() {
  const colors=[{"id": "1", "image":Ronaldo},{"id": "2", "image":Rafa},{"id": "3", "image":Dravid}]
  return(
    <div>
      <h2 style={{textAlign: 'center' }}>Contact</h2>
      <div style={{ textAlign: 'center' }}>
      {colors.map((selectedColor) => (<Card key={selectedColor.id} image={selectedColor.image}></Card>))}
      </div>
    </div>
  );
}

export default Contact;