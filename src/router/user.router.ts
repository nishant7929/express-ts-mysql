import { Router } from "express";
import userController from "../controllers/user.controller";

const userRouter = Router();


userRouter.get('/', userController.findAll.bind(userController));
userRouter.post('/', userController.create.bind(userController));
userRouter.get('/:id', userController.findOne.bind(userController));
userRouter.put('/:id', userController.update.bind(userController));
userRouter.delete('/:id', userController.delete.bind(userController));

export default userRouter;
