import { useState } from 'react';
import { CORE_CONCEPTS} from './data-with-examples.js'
import { EXAMPLES} from './data-with-examples.js'
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import Card from './components/Card.jsx';


function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    // console.info(selectedButton)
  }

  let content = <p>Please select a topic</p>
  if(selectedTopic){
    content = <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>(
              <CoreConcept key={conceptItem.title} {...conceptItem}/>
            )
            )}

          </ul>
        </section>
      <section id="examples">
        <menu>
          <TabButton isSelected={selectedTopic ==="components"} onSelect={()=>{handleClick("components")}}>Components</TabButton>
          <TabButton isSelected={selectedTopic ==="jsx"} onSelect={()=>{handleClick("jsx")}}>JSX</TabButton>
          <TabButton isSelected={selectedTopic ==="props"} onSelect={()=>{handleClick("props")}}>Props</TabButton>
          <TabButton isSelected={selectedTopic ==="state"} onSelect={()=>{handleClick("state")}}>States</TabButton>
        </menu>
        {content}
      </section>
      </main>
     
    </div>
  );
}

export default App;
