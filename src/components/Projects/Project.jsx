import React from 'react'
const projectData = [
  { id: 1, img: "/node-boutique.png", name: "Flower Shop", desc: "Lorem ipsum", demo: "https://flower-shop-zsdd.vercel.app/", code:"https://github.com/ritikamehta11/flower-shop"},
  { id: 2, img: "/movieGuesser.png", name: "Movie Guesser", desc: "Lorem ipsum", demo: "https://movie-guesser-kohl.vercel.app/", code:"https://github.com/ritikamehta11/movie-guesser" },
  { id: 3, img: "/bookbeacon.png", name: "Book Recommendation App", desc: "Lorem ipsum", demo: null, code:"https://github.com/ritikamehta11/Book-Recommendation-web-app"},
  { id: 4, img: "/strideup.png", name: "E-commerce Wordpress", desc: "Lorem ipsum", demo: "https://strideupshoes.wordpress.com/" , code:null},
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
