// const express = require('express')
import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
app.use(cors())

app.use(express.           json())
app.use(express.urlencoded({    extended: true }))

app.get('/', (req: Request, res: any, next: NextFunction) => {
  res.send('Hello World!')
})

export default app
