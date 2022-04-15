import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Ca = (x) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'+x.imagem} />
  <Card.Body>
    <Card.Title>{x.marca} - {x.modelo}</Card.Title>
    <Card.Text className='text-dark'>
      <strong className='text-dark'>idioma : </strong>{x.cor}
    </Card.Text>
    <Card.Text className='text-dark'>
      <strong className='text-dark'>Ano : </strong>{x.ano}
    </Card.Text>
    <Button variant={x.core ? x.core : 'danger'}><Link className='btn text-white' to={'/filmes/detalhe/'+x.id}>{x.nomebotao}{x.id}</Link></Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Ca
