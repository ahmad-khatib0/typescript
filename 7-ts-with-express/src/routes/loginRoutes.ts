import { Router, Request, Response, NextFunction } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.isLoggedIn) {
    next()
    return
  }
  res.status(403)
  res.send('not permitted')
}

const router = Router()

router.get('/', (req: Request, res: Response) => {
  // this left check is a type guard, in order to access isLoggedIn in the right check
  if (req.session && req.session.isLoggedIn) {
    res.send(`
       <div> 
           <div> You are logged in </div> 
           <a  href="/logout"> Logout </a>  
       </div> 
    `)
  } else {
    res.send(`
    <div> 
         <div> You are not logged in </div> 
         <a href="/login"> Login </a> 
    </div> 
   `)
  }
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined
  res.redirect('/')
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('welcome to protected route, logged in user')
})

export { router }
