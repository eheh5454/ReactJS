import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css"

// App 클래스는 React 컴포넌트에서 확장한 것(그래서 렌더 메소드가 기본으로 있다.)
class Home extends React.Component{
  // render 전에 호출 
  constructor(props){
    super(props);
    console.log("hello");
  }

  // 비동기로 영화 정보를 가져옴
  getMovies = async() => {
    const {data: {data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
    this.setState({movies, isLoading:false});
  }

  // render 후에 호출 
  componentDidMount(){
    this.getMovies();
  } 

  // setState가 호출되어 업데이트가 끝난 후 실행 
  componentDidUpdate() {
    console.log("Did Update");
  }

  // 컴포넌트가 죽을 때(페이지를 나감)
  componentWillUnmount() {
    console.log("component Unmount");
  }

  state = {
    count: 0,
    isLoading: true,
    movies: []
  };

  // setState를 써야 렌더가 호출된다!!
  // 펑션 방식으로 현재 스테이트의 카운트를 가져올 수 있음(this.state 안쓰고)
  add = () => {
    this.setState(current =>({count: current.count + 1}));
    console.log("add");
  };

  minus = () => {
    this.setState(current => ({count: current.count - 1}));
    console.log("minus");
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container">   
        {isLoading ?(
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div> 
        ): (
          <div className="movies">
          {movies.map(movie => (          
            <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} 
            poster={movie.medium_cover_image} genres={movie.genres} />
          ))}
          </div>
        )}
        
      </section>       
    );
  }
}

export default Home;