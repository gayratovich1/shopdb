import multer, { diskStorage } from 'multer'
import path, { extname } from 'path'
import { v4 } from 'uuid'

const formatImages = ['image/png', 'image/jpeg', 'image/gif', 'image/webp']

const storage = diskStorage({
<<<<<<< HEAD
    destination(_, _file, callback) {
        callback(null, path.join(__dirname, '../../uploads'))
    },
    filename(_, file, callback) {
        const format = file.mimetype
        if(!formatImages.includes(format)){
            return callback(new Error('File not supported'), "")
        }
        const uid = v4()
        const ext = extname(file.originalname)
=======
    destination(req, file, callback) {
        callback(null, path.join(__dirname, '../../uploads'))
    },
    filename(req, file, callback) {
        const format = file.mimetype
        if (!formatImages.includes(format)) {
            return callback(new Error('File not supported'), '')
        }

        const uid = v4()
        const ext = extname(file.originalname)

>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
        callback(null, uid + ext)
    },
})

const upload = multer({
<<<<<<< HEAD
  storage,
})

export default upload
=======
    storage,
})

export default upload
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
