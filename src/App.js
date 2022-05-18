import AnimateItem from "./splitnime/components/AnimateItem";
function App() {
  return (
    <div className="App">
      <AnimateItem type="word" delay={0.5} duration={600}>
        Splitnime
      </AnimateItem>
    </div>
  );
}

export default App;
