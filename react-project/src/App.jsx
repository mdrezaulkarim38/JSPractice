import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ title }) => {
  const [count,setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(()=>{
    console.log(`${title} has been liked: ${hasLiked}`);
  });
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{count}</p>
      <button onClick={()=>{
        setHasLiked(!hasLiked)
        setCount(count + 1);
        }} >
        {hasLiked ? 'Liked' : 'Like' }
      </button>
    </div>
  );
}

const App = () => {
  return (
    <div className="card-container">
      <div>
        <Card title="Star Wars" rating={5} isCoo={true} />
        <Card title="Avatar" />
        <Card title="The Lion King" />
      </div>
    </div>
  );
};

export default App