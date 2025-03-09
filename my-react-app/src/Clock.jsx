import ReactDOM from 'react-dom';


class Clock extends React.Component{
    render(){
        return (
        <h1 className='heading'>
            <span className='text'>Hello - {this.props.children} {new Date().toLocaleDateString(this.props.locale)}</span>
        </h1>
    );
}
    
}

export default render;


