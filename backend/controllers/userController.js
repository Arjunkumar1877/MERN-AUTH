import expressAsyncHandler from "express-async-handler"

export const  authUser = expressAsyncHandler(async(req, res)=>{
    try {
        res.status(200).json({messge: "Auth user"})
    } catch (error) {
        console.log(error.message)
    }
})