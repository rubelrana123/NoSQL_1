// const express = require('express')
import express, { Application, Request, Response } from 'express';
import usersService from './app/modulers/users/users.service';
import usersRouter from "./app/modulers/users/users.route";
import cors from 'cors'
// import usersService from './app/modulers/users/users.service';
const app: Application = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Application routes

app.use('/api/v1/users/', usersRouter)

//Testing
app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id :"666",
    password : "123456",
    role : "student"
  })
  res.send('Working Successfully')
})

export default app;
