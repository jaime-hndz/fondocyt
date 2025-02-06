import notfound from '@/assets/img/notfound.svg'
import { Button } from '@mui/material'
import { Link } from 'react-router'

export const NotFoundScreen = () => {
  return (
    <div className='w-full  p-10 flex flex-col gap-5 items-center justify-center'>
      <img width={400} src={notfound} />
      <h2 className="text-3xl font-bold mb-12 text-coral-500">
      Ops... esta página no existe
      </h2>
      <Link to='/'>
      <Button variant='contained' style={{backgroundColor: '#4983f7'}}>Volver al inicio</Button>
      </Link>
    </div>
  )
}
