import React from 'react';
import ReactDOM from 'react-dom';

console.log('test');

const Home = ({history}) => {
    return (
        <div>
            <h2>홈</h2>
            <button onClick={() =>
                history.push('/about/javascript')
                }>자바스크립트를 사용하여 이동</button>
        </div>
    );
};

ReactDOM.render(Home, document.getElementById('root'));
export default Home