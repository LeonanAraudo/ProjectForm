'use client';
import Cadastro from './componentes/formCadastro/cadastro';
import Login from './componentes/formLogin/login';
import style from './style.module.css';
import { useState } from 'react';

export default function Home() {
    const [isCadastro, setIsCadastro] = useState(false);

    const toggleForms = () => {
        setIsCadastro((prev) => !prev);
    };

    return (
        <div className={`${style.container} ${isCadastro ? style.formCadastroActive : ''}`}>
            <div className={style.imagem}></div>
            <div className={style.formContainer}>
        
                <div className={`${style.form} ${style.formCadastro}`}>
                <div className={style.containerButtons}>
                    <div className={style.buttons}>                                        
                        <button className={style.buttonSpace1} onClick={toggleForms}>Sign Up</button>
                        <div className='bg-gray-500 h-full w-[1px]'></div>
                        <button className={style.buttonSpace} onClick={toggleForms} >Sign In</button>                                       
                    </div>
                </div>
                    <Cadastro />
                    <div className='flex items-center justify-center flex-row '>
                        <img width="50"  height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/pet-commands-train.png" alt="pet-commands-train"/>
                        <img width="30" height="30" className='mt-4' src="https://img.icons8.com/ios-glyphs/30/FFFFFF/orchid.png" alt="orchid"/>
                        <img width="50" className="scale-x-[-1] ml-6" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/pet-commands-stay.png" alt="pet-commands-stay"/>
                    </div>
                </div>
                <div className={`${style.form} ${style.formLogin}`}>
                <div className={style.containerButtons}>
                    <div className={style.buttons}>                                        
                        <button className={style.buttonSpace1} onClick={toggleForms}>Sign Up</button>
                        <div className='bg-gray-500 h-full w-[1px]'></div>
                        <button className={style.buttonSpace} onClick={toggleForms} >Sign In</button>                                       
                    </div>
                </div>
                    <div className={style.alingGalho}>
                        <div className={style.galho}></div>
                    </div>
                    <div className={style.alingLogin}>
                       <Login />
                    </div>
                </div>
            </div>
        </div>
    );
}
