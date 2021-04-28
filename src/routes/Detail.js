import React from "react";



class Detail extends React.Component{
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined){
            // 홈으로 리다이렉트함(영화를 클릭해야 무비 디테일 확인 가능)
            history.push("/");            
        }
        console.log(location.state);
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        }
        else {
            return null;
        }
      
    }
}

export default Detail;
