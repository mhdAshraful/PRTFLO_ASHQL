import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer';
import { AppData } from '../ContextAPI';

const Details = () => {
  const { id } = useParams();
  const { state } = AppData();
  const { data } = state;

  let selected = data.filter((item) => item.id === Number(id));
  let item = selected[0];
  console.log('item', selected[0]);

  return (
    <main className="main_content_container">
      <div data-section id='details_page' className="section">
        <div className="details_wrapper">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div className="imgwrapper">
            <img src={`/assets/${item.gallery.pictures.details}`} alt={item.name} />
          </div>
        </div>
      </div>
    </main>

  )
}

export default Details