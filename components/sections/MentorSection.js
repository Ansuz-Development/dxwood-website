import React from "react";
import PropTypes from "prop-types";


const MentorSection = ({data}) => {

  // const [title, mentors] = data

  return <div style={{ backgroundColor: '#F3F5F6', height: '425px' }} >
    <h1 className="font-bold text-center" style={{ fontSize: '34px', marginBottom: '8px' }}>Danh sách mentor</h1>
    <div id="carouselExampleControls"className="carousel slide" 
data-ride="carousel"
 >
      <div className="carousel-inner">
        <div className="carousel-item active">

          <div className="flex " style={{ width: '1180px', height: '329px', backgroundColor: 'white', margin: '0 auto ' }}>
            <div style={{ marginLeft: '143px', marginRight: '56px' }}>
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                alt=""
                style={{ width: '160px', height: '160px', borderRadius: '50%', marginTop: '50%' }}
              />
            </div>
            <div>
              <h1 className="font-bold text-2xl" style={{ marginTop: '8%', marginBottom: '8px' }} >Phan Thanh Sơn</h1>
              <p className="text-base font-normal mb-8" style={{ color: '#3C3C3C' }}>bod fpt is</p>
              <p className="text-base font-normal" style={{ color: '#000000', width: '678px' }}>Habitasse cursus id ullamcorper amet. Tincidunt mi vulputate ut imperdiet elit justo. Blandit pretium vitae hendrerit tincidunt turpisvultricies. Dolor id pretium, vitae dictum curabitur vulputate id. Morbi nunc diam, suspendisse ut ultrices erat. Tristique pretium, rutrum ullamcorper ac feugiat id suspendisse feugiat vitae. Mauris, facilisis suspendisse ultricies morbi risus commodo mi. </p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" style={{ backgroundColor:'black', borderRadius:'50%',width:'48px',height:'48px',marginLeft:'18%',marginTop:'7%'}} >
        <span className="carousel-control-prev-icon" aria-hidden="true"  />
        <span className="sr-only" >Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"  style={{ backgroundColor:'black', borderRadius:'50%',width:'48px',height:'48px',marginRight:'18%',marginTop:'7%'}} >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>




  </div>;
};

MentorSection.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    mentors: PropTypes.array.isRequired
  }))
};

export default MentorSection;



// <div className="flex " style={{ width: '1180px', height: '329px', backgroundColor: 'white', margin: '0 auto ' }}>
//   <div style={{ marginLeft: '143px', marginRight: '56px' }}>
//     <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
//       alt=""
//       style={{ width: '160px', height: '160px', borderRadius: '50%', marginTop: '50%' }}
//     />
//   </div>
//   <div>
//     <h1 className="font-bold text-2xl" style={{ marginTop: '8%', marginBottom: '8px' }} >Phan Thanh Sơn</h1>
//     <p className="text-base font-normal mb-8" style={{ color: '#3C3C3C' }}>bod fpt is</p>
//     <p className="text-base font-normal" style={{ color: '#000000', width: '678px' }}>Habitasse cursus id ullamcorper amet. Tincidunt mi vulputate ut imperdiet elit justo. Blandit pretium vitae hendrerit tincidunt turpisvultricies. Dolor id pretium, vitae dictum curabitur vulputate id. Morbi nunc diam, suspendisse ut ultrices erat. Tristique pretium, rutrum ullamcorper ac feugiat id suspendisse feugiat vitae. Mauris, facilisis suspendisse ultricies morbi risus commodo mi. </p>
//   </div>
// </div>