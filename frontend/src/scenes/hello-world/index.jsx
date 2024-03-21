import React from 'react';


const HelloWorld = () => {

  return (
    <div class="grid grid-cols-2">
    <div class="min-h-screen flex flex-col items-left justify-left mx-8 my-8">
    <h1 class="text-5xl text-black font-bold mb-8">
        Hello World!
    </h1>
    <p class="text-black text-lg mb-8">
        Our first lesson is on how to print "Hello World!" in Python. Using the built-in function (we'll get to what that is later) <code>print</code>, we can print to the console whatever we want.
    </p>
    <p class="text-black text-lg mb-8">
        Click the pen button to see the code, and click the down arrow, then "Run", to see the result. You can change the text within the parantheses and run the program again to see a different result printed.
    </p>
    <p class="text-black text-lg mb-8">
        Click <a href="/" className="text-blue-700">here</a> to go to the next lesson.
    </p>
    </div>

    <div class="min-h-screen flex flex-col items-left justify-left mx-8 my-24">
    <iframe src="https://trinket.io/embed/python/3abd13c7f0?start=result" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
    </div>
    </div>
  );
};

export default HelloWorld;
