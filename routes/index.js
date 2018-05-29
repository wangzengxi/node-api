const express = require('express');
const router = express.Router();

// 方法
const User = require('../sqlMap/user');
const Goods = require('../sqlMap/goods');
const Address = require('../sqlMap/address');
const Category = require('../sqlMap/category');
// User
router.post('/login', User.login);
router.post('/register', User.register);
router.post('/getUserInfo', User.getUserInfo)

// Goods
// router.post('/getGoodsInfo', Goods.getInfo)
router.get('/goods/get', Goods.get)
router.post('/goods/type', Goods.goodsTypeTitle)
router.get('/admin/goods/get', Goods.get)
router.post('/admin/goods/add', Goods.add)
router.get('/admin/goods/delete', Goods.remove)

// Category
router.get('/admin/category/get', Category.get)
router.post('/admin/category/add', Category.add)
router.post('/admin/category/update', Category.update)
router.get('/admin/category/remove', Category.remove)

// Address
router.get('/address/getList', Address.getList)
router.post('/address/add', Address.add)
router.post('/address/update', Address.update)
router.get('/address/delete', Address.delete)
module.exports = router;
