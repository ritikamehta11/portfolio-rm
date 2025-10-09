import React from 'react'
const projectData = [
  { id: 1, img: "/node-boutique.png", name: "Flower Shop", desc: "A full-stack floral e-commerce app where users can browse, filter, and order flower arrangements. Designed with a clean, responsive UI for a smooth shopping experience.", demo: "https://flower-shop-zsdd.vercel.app/", code:"https://github.com/ritikamehta11/flower-shop"},
  { id: 2, img: "/movieGuesser.png", name: "Movie Guesser", desc: "An interactive game where users guess movie titles from limited clues. Built to deliver engaging gameplay and quick feedback using dynamic React components.", demo: "https://movie-guesser-kohl.vercel.app/", code:"https://github.com/ritikamehta11/movie-guesser" },
  { id: 3, img: "/bookbeacon.png", name: "Book Recommendation", desc: "A website that recommends books based on user interests and preferences. Focused on intuitive design and personalized content delivery.", demo: null, code:"https://github.com/ritikamehta11/Book-Recommendation-web-app"},
  { id: 4, img: "/strideup.png", name: "E-commerce Wordpress", desc: "A WordPress-based online store featuring dynamic product listings and category pages. Highlights practical experience with CMS customization and e-commerce setup.", demo: "https://strideupshoes.wordpress.com/" , code:null},
  // { id: 4, img: "", name: " Shop", desc: "Lorem ipsum", link: "hh" },


];
export const Project = () => {
  return (
    <div className='container'>
  <h3>Projects</h3>
      <div className='projectsDiv'>
        {
          projectData.map((data) => (
            < div key={data.id} className='projectInfo'>
<div><img src={data.img} alt="" /></div>
              <h4>{data.name}</h4>
              <p className='infoPara'>{data.desc}</p>
              <div className='buttons'>
                 
                <button disabled={!data.demo} onClick={()=> data.demo && window.open(data.demo)}>
                  {/* <a href={data.demo}>Demo</a> */}
                  Demo
                </button>
                <button disabled={!data.code} onClick={()=> data.code && window.open(data.code)} >GitHub</button></div>

      </div>
          ))
        }
        
      </div>
    </div>
  )
}
