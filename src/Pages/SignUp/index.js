import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import PetsSharpIcon from '@material-ui/icons/PetsSharp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useNavigate } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { signUp } from '../../actions/accountActions';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  image: {
    backgroundImage: 'url(/img/pet.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  avatar: {
    background: theme.palette.secondary.main,
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(2, 4),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" align="center" color="secondary">
      {'Copyright © '}
      <a
        color="inherit"
        href="https://www.linkedin.com/in/andrea-montoya-80a0471a8/"
      >
        Andrea Montoya
      </a>{'    '}
      {new Date().getFullYear()}
      <br></br>
      {'Copyright © '}
      <a
        color="inherit"
        href="https://www.linkedin.com/in/roselino-alvarado-abaa70160/"
      >
        Roselino Alvarado
      </a>{'   '}
      {new Date().getFullYear()}
    </Typography>
  );
}

function SignUp() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        direction="column"
        justifyConten="center"
        alignItems="center"
        md={7}
        className={classes.image}
      >
        <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }}>
          <strong>
          Pet Noticias!
          </strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: 'rgb(255,255,255, 0.7)',
            marginTop: 30,
            fontSize: 15,
            lineHeight: '30px',
          }}
        >
           Você encontra dicas, curiosidades e muito mais. Compartilhe!
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Avatar className={classes.avatar}>
          <PetsSharpIcon />
          </Avatar>
          <Typography variant="h5">Registrar</Typography>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              fullName: Yup.string()
                .max(255)
                .required('Favor informar o nome completo'),
              email: Yup.string()
                .email('Favor informar um email válido')
                .max(255)
                .required('Favor informar o email'),
              password: Yup.string()
                .max(255)
                .required('Favor informar o password'),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting },
            ) => {
              try {
                await dispatch(
                  signUp(values.fullName, values.email, values.password),
                );
                navigate('/');
              } catch (error) {
                const message =
                  (error.response && error.response.data.message) ||
                  'Alguma coisa aconteceu';

                setStatus({ success: false });
                setErrors({ submit: message });
                setSubmitting(false);
              }
            }}
          >
            {({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
              <form noValidate className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  color= "secondary"
                  required
                  fullWidth
                  id="fullName"
                  label="Nome completo"
                  name="fullName"
                  autoComplete="fullName"
                  autoFocus
                  error={Boolean(errors.fullName)}
                  value={values.fullName}
                  onChange={handleChange}
                  helperText={errors.fullName}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  color= "secondary"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={Boolean(errors.email)}
                  value={values.email}
                  onChange={handleChange}
                  helperText={errors.email}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  color= "secondary"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  type="submit"
                  disbled={isSubmitting}
                >
                  Registrar
                </Button>
                {errors.submit && (
                  <FormHelperText error>{errors.submit}</FormHelperText>
                )}
                <Grid container>
                  <Grid item>
                    <Link color= "secondary">Ja possui uma conta? Clique aqui</Link>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignUp;