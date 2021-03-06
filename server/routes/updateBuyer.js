import express from 'express';
import Buyer from '../models/Buyer';

let router = express.Router();

router.post('/', (req, res) => {
    const {buyerId, id, fileTitle, fileImage, fileDescription, fileReadPrice, fileRightPrice, fileName} = req.body;

    return Buyer.forge({
        buyerId: buyerId,
        fileId: id,
        fileTitle: fileTitle,
        fileImage: fileImage,
        fileDescription: fileDescription,
        fileReadPrice: fileReadPrice,
        fileRightPrice: fileRightPrice,
        fileName: fileName
    }, {hasTimestamps: true}).save()
        .then(buyResource => res.json({buyResource: buyResource}))
        .catch(err => res.status(500).json({errors: {global: "something went wrong!"}}));
});

export default router;