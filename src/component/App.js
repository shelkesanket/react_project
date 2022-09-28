import Header from "./Header";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

function App() {
  const contacts = [
    {
      id: 1,
      name: "Sanket",
    },
    {
      id: 2,
      name: "Sayali",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <ContactList />
      <ContactCard props={contacts} />
    </div>
  );
}

export default App;
