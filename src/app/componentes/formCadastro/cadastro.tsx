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
import { montserrat } from '../../fonts'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffffff', 
      },
      secondary:{
        main: '#111111'
      }
    },
    typography:{
      fontFamily: montserrat.style.fontFamily
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '4px 55px', 
            fontSize: '16px', 
            textTransform: 'none'
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ffffff',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#90caf9', 
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ffffff', 
            },
            color: '#ffffff', 
          },
        },
      },
      
    },
  });
export default function Cadastro(){
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    return(
    <div className='h-[100%] flex items-center justify-center pt-20'>
      <div>
    <div className={`w-[100%] ${montserrat.className}`}>
      <strong className='mt-4 mb-4 text-lg'>Cadastro</strong>
    </div>
    <ThemeProvider theme={theme}>

             <Box
                component="form"
                sx={{ m: 1, width: '38ch',display:'flex',flexDirection:'column',gap:'30px' } }
                >
                <TextField id="standard-basic" label="Name" variant="standard" />
                <FormControl sx={{ width: '38ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
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
                <FormControl sx={{ width: '38ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
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
                <Stack  direction="row" sx={{display:'flex', alingItens:'center', justifyContent:'center',marginTop:'10px'}}>
                  <Button variant="contained" color='secondary'>Cadastrar</Button>
                </Stack>
             </Box>
    </ThemeProvider>
        </div>
         
    </div>
    )
}