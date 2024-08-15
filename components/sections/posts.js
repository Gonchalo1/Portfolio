import React from 'react';
import '../../App.css'; // Asegúrate de tener un archivo CSS importado

const Posts = () => {
  return (
    <div className="posts-container">
      <h2>Posts</h2>
      <div className="linkedin-posts">
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7225289645817831424" 
      height="551" 
      width="504" 
      frameborder="0"
       allowfullscreen=""
        title="Publicación integrada"></iframe>
        {/* Añade más iframes para otros posts si es necesario */}
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7218252494433374208" 
        height="687" 
        width="504" 
        frameborder="0" 
        allowfullscreen="" 
        title="Publicación integrada"></iframe>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7216521943355695104"
         height="423" 
         width="504" 
         frameborder="0" 
         allowfullscreen="" 
         title="Publicación integrada"></iframe>
      </div>
    </div>
  );
};

export default Posts;
