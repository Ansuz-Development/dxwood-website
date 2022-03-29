import React from "react";
import PropTypes from "prop-types";



const AboutSection = ({data}) => {

  const {title,description,image} = data
 

  return (
    <div style={{marginBottom:'50px'}}>
      <h2 className="font-bold text-center" style={{color:'#212529', fontSize:'34px',marginBottom:'23px'}}>{title}</h2>
      <p style={{margin:'0 auto 15px', width:'850px'}} className=",font-normal text-base">{description}</p>
      <img style={{borderRadius:'15px', width:'1116px',height:'627px',margin:'0 auto'}} src={image}  />
    </div>
  )
};

AboutSection.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired
  }))};

export default AboutSection;
