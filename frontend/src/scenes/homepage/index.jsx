import React from "react";

const Homepage = () => {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-5xl text-black font-bold mb-8 animate-pulse">
        This is Code Journey.
      </h1>
      <p class="text-black text-lg mb-8">The future of learning Python.</p>
      <button>
        <a href="/signup">Learn more</a>
      </button>
    </div>
  );
};

export default Homepage;
