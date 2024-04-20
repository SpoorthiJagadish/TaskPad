import NoteList from "../../components/NoteList";
import Search from "../../components/Search";

function Home() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 min-h-screen background: url('../../assets/bg-blue-1.jpg')">
      <Search />
      <NoteList />
    </div>
  )
}

export default Home;
