import Features from "./components/Features";

function App() {
  return (
    <body className="bg-black font-sans">
      <div className="h-80"></div>

      <div className="flex flex-col items-center border-y border-gray-100 border-opacity-10 md:py-16">
        <Features />
      </div>

      <div className="h-80"></div>
    </body>
  );
}

export default App;
