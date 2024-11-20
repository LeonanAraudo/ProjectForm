'use client';

import { Style } from '@mui/icons-material';
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
                    <Cadastro />
                    <button onClick={toggleForms}>Ir para Login</button>
                </div>
                <div className={`${style.form} ${style.formLogin}`}>
                    <div className={style.alingGalho}>
                        <div className={style.galho}></div>
                    </div>
                    <div className={style.alingLogin}>
                       <Login />
                       <button onClick={toggleForms}>Ir para Cadastro</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
