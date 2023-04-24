const { Router } = require('express');
const router = Router();

const productService = require('../services/productService');

// [사용자] 카테고리 조회 - 카테고리 목록 조회
router.get('/categories', productService.getCategories); // (카테고리 목록 페이지), (상품 관리 페이지)

// [관리자] 카테고리 추가 - 카테고리 등록
// 그냥 입력한 카테고리만 넣고 나머지 필드는 없이 만들고, 나머지 라우터에서 조회할때는 필드 있는거만 조회되게 하자
router.post('/admin/category', productService.createCategory);

// [관리자] 카테고리 수정 - 카테고리 수정 (해당하는 모든 책에 반영)
router.patch('/admin/category', productService.updateCategory); // (카테고리 관리 페이지)

// [관리자] 카테고리 삭제 - 카테고리 삭제
// 삭제되면 카테고리에 해당하는 책까지 다 삭제 해야함
router.delete('/admin/category', productService.deleteCategory);

// [관리자] 상품 추가 - 책 정보 등록
// productId는 서버에서 새로 생성함
// category는 카테고리 조회 라우터에서 카테고리 리스트 받아서 사용자 선택한 값 보내야함
router.post('/admin', productService.createProduct); // (상품 관리 페이지)

// [관리자] 상품 수정 - 책 정보 수정
router.patch('/admin/:productId', productService.updateProduct); // (상품 관리 페이지)

// [관리자] 상품 삭제 - 책 정보 삭제
router.delete('/admin/:productId', productService.deleteProduct); // (상품 관리 페이지)

// [사용자] 상품 목록 - 전체 책 조회
router.get('/', productService.getAllProducts); // (메인 페이지)

// [사용자] 상품 목록 - 카테고리별 책 목록 조회
router.get('/categories/:category', productService.getProductsByCategory); // (카테고리 관리 페이지)

// [사용자] 상품 목록 - 베스트셀러 책 목록 조회
router.get('/bestSellers', productService.getProductsByBestSeller);

// [사용자] 상품 목록 - 신간도서 책 목록 조회
router.get('/newBooks', productService.getProductsByNewBook);

// [사용자] 상품 목록 - 추천도서 책 목록 조회
router.get('/recommendedBooks', productService.getProductsByRecommended);

// [사용자] 상품 상세 - 선택한 책의 상세정보 조회
router.get('/:productId', productService.getProductByProductId); // (책 상세 페이지)

module.exports = router;
