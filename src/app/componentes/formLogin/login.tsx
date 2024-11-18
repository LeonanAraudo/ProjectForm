'use client'
import Box from '@mui/material/Box';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme ({
    components: {
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'blue', 
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'green',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'red', 
              }
            }
          }
        }
      }
});

export default function Login(){
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    return(
    <>
    <p>Login</p>
    <ThemeProvider theme={theme}>
             <Box
                component="form"
                sx={{ m: 1, width: '35ch',display:'flex',flexDirection:'column' } }
                >
                <TextField id="standard-basic" label="Nome" variant="standard" />
                <FormControl sx={{ width: '35ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password" >Senha</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
                <button>Entrar</button>
             </Box>
    </ThemeProvider>
    </>
    )
}