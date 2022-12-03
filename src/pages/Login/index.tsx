import { useState } from 'react';
import Button from '../../components/Button/button';
import Input from './components/Input';

const Login = () => {
  const [ra, setRa] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (e: any) => {
    const { value, name } = e.target;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-verde-insted grid gap-0 grid-cols-1 grid-rows-5 place-content-center rounded-xl h-3/5 w-4/5">
        <div className="bg-logo-insted bg-contain bg-center bg-no-repeat h-4/5 w-4/5 mx-auto mt-auto"></div>
        <div className="w-full justify-center flex mt-20">
          <Input type={'text'} placeholder={' Informe seu RA'} value={ra} />
        </div>
        <div className="w-full justify-center flex mt-10">
          <Input type={'password'} placeholder={' Informe sua senha'} value={password} />
        </div>
        <div className="w-full flex justify-center items-center mt-8 h-8">
          <a href="/home">
            <Button
              className="bg-white shadow-md font-semibold text-verde-insted text-xl h-12 w-40 rounded-3xl"
              label="LOGIN"
            />
          </a>
        </div>
        <div className="flex justify-center items-center w-full">
          <input type="checkbox" className="mx-1" />
          <label className="text-xs  text-slate-700 ml-0.5">Continuar conectado?</label>
          <h4 className="ml-3 text-slate-700 hover:underline text-xs">Esqueceu sua senha?</h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
