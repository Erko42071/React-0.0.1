import './App.css';
import { InformationSection } from './InformationSection';
// import { Button } from './ButtonFile';

function App() {
const handleOnThisClick = (data) => {
  console.log(data);
}

  return (
    <div className="App">
      <h1>'Vepkhistkaosani'</h1>
      <img src="/assets/s-l500.png" alt ="Vepkistkaosani" />
      <p className="discription">ვეფხისტყაოსანი — XII საუკუნის ქართველი პოეტის, შოთა რუსთაველის ჩვენამდე მოღწეული ერთადერთი პოემა. შედგება პროლოგის, ძირითადი ნაწილისა და ეპილოგისაგან. შინაარსის მხრივ, ვეფხისტყაოსანი რთული ნაწარმოებია.</p>
      <InformationSection  headerName = 'პერსონაჟები' data = {['ტარიელი','ავთანდილი','თინათინი','შერმადინი','ნურადინ-ფრიდონი']} onClickGetHeader={handleOnThisClick} />
      {/* <Button text='BUTTON' type='liteblue' /> */}
    </div>
  );
}

export default App;
