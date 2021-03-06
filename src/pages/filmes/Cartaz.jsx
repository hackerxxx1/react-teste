import React,{useState, useEffect} from 'react'
import tmdb from '../../services/tmdb'
import{Row , Col} from "react-bootstrap"
import Ca from "../../components/card/Ca"
const Cartaz = () => {
  // declaração de state 
  
  let [filmes,setFilmes] = useState([])
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('/movie/upcoming?language=pt-BR');
      const data= pega.data.results
 
      setFilmes(data)
    }
    data();
  },[])
  return (
    <div>
        <Row xs={1} md={4} >
      
      {filmes.map(item=>(
         <Col className='mb-3'>   
        <Ca id={item.id} marca={item.title} modelo={item.original_title} imagem={item.poster_path} cor={item.original_language} ano={item.release_date} nomebotao='Mais detalhes' />
        </Col>
      ))}
      
      </Row>
        
    </div>
  )
}

export default Cartaz