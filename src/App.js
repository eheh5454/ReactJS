import React from "react";
import PropTypes from "prop-types";


// {}를 붙이면 인자를 바로 가져올 수 있음, 자바스크립트를 사용한다는 뜻
function PrintLike({name, picture, rating}){
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>  
}

// 함수의 인자를 특정 타입으로 제한한다. 
// 잘못된 자료가 들어가는 것을 방지한다. 
// isRequired는 필수라는 뜻(없어도 됨)
PrintLike.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const Objects = [
  {
    id:1,
    rating: 4.1,
    name: "saw",
    image: "https://firebasestorage.googleapis.com/v0/b/star-xr-c9c08.appspot.com/o/images%2F1.png?alt=media&token=f67f647c-2be0-4a96-8c2c-58f9588d79c8"
  },
  {
    id:2,
    rating: 4.2,
    name: "spatula",
    image: "https://firebasestorage.googleapis.com/v0/b/star-xr-c9c08.appspot.com/o/images%2F10.png?alt=media&token=74c7782d-5b43-465a-98e5-2e57cae382bd"
  },
  {
    id:3,
    rating: 4.3,
    name: "Axe",
    image: "https://firebasestorage.googleapis.com/v0/b/star-xr-c9c08.appspot.com/o/images%2F3.png?alt=media&token=ea593a7c-b2b6-4a2d-901f-f0230a166aa8"
  }
];

function renderObject(object){
  return <PrintLike name={object.name} picture={object.image} />
}

// key는 리액트 내부에서 사용하는 값
function App() {
  return (
    <div>  
      {Objects.map(object => (<PrintLike key={object.id} name ={object.name} picture={object.image} rating={object.rating} />))}
    </div>
    
  );
}

export default App;
