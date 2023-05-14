import React, { useState } from "react";

const Home = () => {
  let [button, setButton] = useState(null);
  if (isLogin == true) {
    button = <LogoutButton onClick={handleLogout} />;
  } else {
    button = <LoginButton onClick={handleLogin} />;
  }

  // const count = 0;
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  const reduceCount = () => {
    setCount(count + -1);
  };

  const handleClick = (type) => {
    setCount(type === "increment" ? count + 1 : count - 1);
  };
  return (
    <div>
      {button}
      <div>這是不管怎樣都會看到的</div>
      {count == 0 && <div>你會看到這個是因為count = 0</div>}
      {count != 0 && <div>{count}</div>}
      <button
        onClick={() => {
          handleClick("increment");
        }}
      >
        按一下讓count+1
      </button>

      {count != 0 && (
        <button
          onClick={() => {
            handleClick("descrement");
          }}
        >
          按一下讓count-1
        </button>
      )}
    </div>
  );
};

export default Home;
