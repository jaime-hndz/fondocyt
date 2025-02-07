import { useState } from 'react';
import inprocess from '@/assets/img/inprocess.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router';

export const InProcessScreen = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='w-full p-10 flex flex-col gap-3 items-center justify-center'>
      <div className='transition-all transition-discrete h-80'>
        <img 
          width={400}
          src={inprocess} 
          onLoad={() => setLoaded(true)} 
          hidden={!loaded} 
          alt="En proceso" 
        />
      </div>

      <h2 className="text-3xl font-bold mb-12 text-coral-500">
        Ops... esta página aún no está lista.
      </h2>
      <Link to='/'>
        <Button variant='contained' style={{ backgroundColor: '#4983f7' }}>
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
};
