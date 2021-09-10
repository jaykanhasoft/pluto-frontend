import React, { useState } from 'react'
import { 
    Grid, Card, TextField, Button, makeStyles,
    FormControl,Select,MenuItem, InputLabel
 } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/action/auth/authAction';
import logo from '../../assets/images/logo.svg'
import { getOrganization } from '../../store/action';
import { useEffect } from 'react';

const useStyle = makeStyles({
    loginContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#2b68a4",
        flexDirection: "column"
    },
    loginCard: {
        width: "100%",
        maxWidth: 480,
        padding: "36px 24px 24px",
        background: "#dceeff",
        boxShadow: "0 1px 35px rgba(11, 48, 86, 0.50)",
    },
    form: {
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },
    textField: {
        marginBottom: 24,
        color:"#000",
        "& input":{
            paddingLeft:12
        },
        "& svg": {
            color: "#2b68a4"
        }
    },
    forgotCont:{
        display:"flex",
        justifyContent:"flex-end",
        marginBottom:24,
    },
    forgotText:{
        color:"#2b68a4",
        fontSize:13,
        borderBottom:"1px dashed #2b68a4"
    },
    loginBtn:{
        width:140,
        borderRadius: "4px",
        margin:"0 auto",
        background:"#ff8b46",
        "&:hover":{
            background:"#ff8b46"
        }
    }
})

const Login = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const {getOrglist , loding} = useSelector(state => state.organization)

    const [data, setData] = useState({
        email: "",
        password: "",
        organization_id:""
    })

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault()
        dispatch(login(data))
    }
   
    useEffect(() => {
        dispatch(getOrganization())
    },[])
    return (
        <Grid className={classes.loginContainer}>
            <div className="mb-16">
                    <img src={logo} alt="" />
                </div>
        <Card className={classes.loginCard}>
            <form className={classes.form} onSubmit={(e) => loginSubmit(e)} autoComplete="off">
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    autoComplete="off"
                    variant="outlined"
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: <MailIcon />
                    }}
                    className={classes.textField}
                />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    autoComplete="new-password"
                    onChange={handleChange}
                    type="password"
                    InputProps={{
                        startAdornment: <LockIcon />
                    }}
                    className={classes.textField}
                />

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>Select Organization</InputLabel>
                    <Select
                        value={data.organization_id}
                        label="Select Organization"
                        onChange={handleChange}
                        name="organization_id"
                    >
                        <MenuItem value="">
                            Select a shift time
                        </MenuItem>
                        {
                            getOrglist?.data && getOrglist?.data.map((list, index) => {
                                return (
                                    <MenuItem value={list.id} key={index}>{list.organization_name}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
                <div className={classes.forgotCont}>
                    <Link to="forgotten-password" className={classes.forgotText}>Forgotten your password?</Link>
                </div>
                <Button variant="contained" color="primary" className={classes.loginBtn} type="submit" formNoValidate>
                    login
                </Button>
            </form>
        </Card>
    </Grid>
    );
};

export default Login;