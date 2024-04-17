import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { News } from "./components/News/News"
import { SectionNews } from "./components/SectionNews/SectionNews"
import { Home } from "./components/pages/Home/Home"
import { news} from "./Scripts/app"
import { FirstNew } from "./components/FirstNew/FirstNew"


function App() {
  
  return (
    <>
      <Home>
        <Header />
        
        <Main>
        <SectionNews>
            <FirstNew />
        </SectionNews>
          <SectionNews>
            {
              news.map(item =>
                <News 
                key={item.id}
                date={item.date}
                description={item.description}
                img={item.img} 
                />
              )
            }
          </SectionNews>
      </Main>  
      </Home>
        
    </>
  )
}

export default App
