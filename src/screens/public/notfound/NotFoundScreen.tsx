import notfound from '@/assets/img/notfound.svg'
import { NavigateBefore } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Link } from 'react-router'

export const NotFoundScreen = () => {
  return (
    <div className='w-full p-10 flex flex-col gap-3 items-center justify-center'>
      <div className='transition-all transition-discrete h-80'>
        <img 
          width={400}
          src={notfound} 
          alt="En proceso" 
        />
      </div>

      <h2 className="text-3xl font-bold mb-12 text-coral-500">
        Ops... esta página no existe.
      </h2>
      <Link to='/'>
        <Button variant='contained' startIcon={<NavigateBefore />} style={{ backgroundColor: '#4983f7' }}>
          Volver al inicio
        </Button>
      </Link>
    </div>
  )
}
