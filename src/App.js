import AnimateText from "./splitnime/components/AnimateText";
function App() {
  return (
    <div className="App">
      <AnimateText type="word" delay={0.5} duration={600}>
        Splitnime
      </AnimateText>
    </div>
  );
}

export default App;
