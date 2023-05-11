import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer';
import { AppData } from '../ContextAPI';
import { IoIosArrowRoundBack } from "react-icons/io";

const Details = () => {
  const { id } = useParams();
  const { state } = AppData();
  const { data } = state;
  const navigate = useNavigate()
  let selected = data.filter((item) => item.id === Number(id));
  let item = selected[0];
  console.log('item', selected[0]);

  return (
    <main className="main_content_container">
      <div data-section id='details_page' className="detail_section">
        <div className="details_wrapper">
          <IoIosArrowRoundBack className='backbtn' onClick={() => navigate(-1)} />
          <div className="top_info">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <div className="imgwrapper">
            <img src={`/assets/${item.gallery.pictures.details}`} alt={item.name} />
          </div>
        </div>
      </div>
    </main>

  )
}

export default Details