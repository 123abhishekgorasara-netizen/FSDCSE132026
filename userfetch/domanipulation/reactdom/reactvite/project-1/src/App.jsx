import './App.css'
import ICardgallery from './component/ICardgallery'
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "24px",
        boxSizing: "border-box"
      }}
    >
      <ICardgallery />
    </div>
  )
}

export default App