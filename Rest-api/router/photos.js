const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { photoController, postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', photoController.getPhotos);
router.post('/', auth(), photoController.addPhoto);

router.get('/:photoId', photoController.getPhoto);
router.post('/:themeId', auth(), postController.createPost);
//router.put('/:themeId', auth(), themeController.subscribe);
router.put('/:themeId/posts/:postId', auth(), postController.editPost);
router.delete('/:themeId/posts/:postId', auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router