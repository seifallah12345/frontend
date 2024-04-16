import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/auth/login.vue'
import signup from '../components/utilisateurs/adduser.vue'
import UI from '../components/utilisateurs/UI.vue'
import Deleteuser from '@/components/utilisateurs/deleteuser.vue'
import getuserbyid from '@/components/utilisateurs/getuserbyid.vue'
import getuserbyid2 from '@/components/utilisateurs/getuserbyid2.vue'
import getAllUsers from '@/components/utilisateurs/userlist.vue'
import updateUser from '@/components/utilisateurs/updateuser.vue'
import addTask from '@/components/task/addtask.vue'
import addRole from '@/components/roles/addrole.vue'
import Addreview from '@/components/reviews/addreview.vue'
import addProduct from '@/components/product/addprod.vue'
import addPermission from '@/components/permissions/addpermission.vue'
import addPayment from '@/components/payments/addpayment.vue'
import addOrder from '@/components/orders/addorder.vue'
import addCategory from '@/components/categories/addcat.vue'
import addAddress from '@/components/adress/addAdress.vue'
import deleteCategory from '@/components/categories/deletecat.vue'
import DeletePayment from '@/components/payments/deletepatment.vue';
import DeletePermission from '@/components/permissions/deleteper.vue';
import DeleteProduct from '@/components/product/deletprd.vue';
import DeleteReview from '@/components/reviews/deletereview.vue';
import DeleteAddress from '@/components/adress/deletadress.vue';
import DeleteTask from '@/components/task/deletetas.vue';
import DeleteRole from '@/components/roles/deletrole.vue';
import DeleteOrder from '@/components/orders/deleteorder.vue';
import getRoleById from '@/components/roles/getrolebyid.vue';
import getReviewById from '@/components/reviews/getrevbyid.vue';
import getProductById from '@/components/product/getprodbyid.vue';
import getPermissionById from '@/components/permissions/getperbyid.vue';
import getPaymentById from '@/components/payments/getpaymentbyid.vue';
import getOrderById from '@/components/orders/getorderbyid.vue';
import getCategoryById from '@/components/categories/getcatbyid.vue';
import getAddressById from '@/components/adress/getaddbyid.vue';
import Gettaskbyid from '@/components/task/gettaskbyid.vue'




import getRole from '@/components/roles/rolelis.vue';
import getReview from '@/components/reviews/revlist.vue';
import getProduct from '@/components/product/prodlist.vue';
import getPermission from '@/components/permissions/perlis.vue';
import getPayment from '@/components/payments/paymentlist.vue';
import getOrder from '@/components/orders/orderlist.vue';
import getCategory from '@/components/categories/listcat.vue';
import getAddress from '@/components/adress/addlist.vue';
import Gettask from '@/components/task/tasklist.vue';


import updateAddress from '@/components/adress/updateadress.vue';
import updateRole from '@/components/roles/updaterole.vue';
import updateReview from '@/components/reviews/updaterev.vue';
import updateProduct from '@/components/product/updateprod.vue';
import updatePermission from '@/components/permissions/updateper.vue';
import updatePayment from '@/components/payments/updatepayment.vue';
import updateOrder from '@/components/orders/updateorder.vue';
import updateCategory from '@/components/categories/updatecat.vue';
import updatetask from '@/components/task/updatetask.vue'





 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/delete-order',
      name: 'DeleteOrder',
      component: DeleteOrder
    },
    {
      path: '/delete-payment',
      name: 'DeletePayment',
      component: DeletePayment
    },
    {
      path: '/delete-permission',
      name: 'DeletePermission',
      component: DeletePermission
    },
    {
      path: '/delete-product',
      name: 'DeleteProduct',
      component: DeleteProduct
    },
    {
      path: '/delete-review',
      name: 'DeleteReview',
      component: DeleteReview
    },
    {
      path: '/delete-adress',
      name: 'DeleteAddress',
      component: DeleteAddress
    },
    {
      path: '/delete-task',
      name: 'DeleteTask',
      component: DeleteTask
    },
    {
      path: '/delete-category',
      name: 'delete-category',
      component: deleteCategory,
    },
    {
      path: '/delete-role',
      name: 'DeleteRole',
      component: DeleteRole,
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup

    },
    {
      path: '/UI',
      name: 'UI',
      component: UI,
    },
    {
      path: '/user-del',
      name: 'delete-user',
      component: Deleteuser,
    },
    {
      path: '/get-user-by-id',
      name: 'getuserbyid',
      component : getuserbyid,
    },
    {
      path: '/get-user-by-id/:userId',
      name: 'getuserbyid2',
      component : getuserbyid2,
      props: true
    },
    {
      path: '/show-userlist',
      name: 'show-all-users',
      component: getAllUsers,
    },
    {
      path: '/update-user/',
      name: 'update-user',
      component: updateUser,
    },
    //task
    {
      path: '/add-task',
      name: 'add-task',
      component: addTask,
    },
    //roles
    {
      path: '/add-role',
      name: 'add-role',
      component: addRole,
    },
    {
      path: '/add-review',
      name: 'add-review',
      component: Addreview,
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: addProduct,
    },
    {
      path: '/add-permission',
      name: 'add-permission',
      component: addPermission,
    },
    {
      path: '/add-permission',
      name: 'add-permission',
      component: addPermission,
    },
    {
      path: '/add-payment',
      name: 'add-payment',
      component: addPayment,
    },
    {
      path: '/add-order',
      name: 'add-order',
      component: addOrder,
    },
    {
      path: '/add-category',
      name: 'add-category',
      component: addCategory,
    },
    {
      path: '/add-adress',
      name: 'add-adress',
      component: addAddress,
    },
    { path: '/get-role-by-id', name: 'get-role-by-id', component: getRoleById },
    { path: '/get-review-by-id', name: 'get-review-by-id', component: getReviewById },
    { path: '/get-product-by-id', name: 'get-product-by-id', component: getProductById },
    { path: '/get-permission-by-id', name: 'get-permission-by-id', component: getPermissionById },
    { path: '/get-payment-by-id', name: 'get-payment-by-id', component: getPaymentById },
    { path: '/get-order-by-id', name: 'get-order-by-id', component: getOrderById },
    { path: '/get-category-by-id', name: 'get-category-by-id', component: getCategoryById },
    { path: '/get-adress-by-id', name: 'get-address-by-id', component: getAddressById },
    {path: '/get-task-by-id',name:'get-task-by-id',component: Gettaskbyid},

    { path: '/show-rolelist', name: 'get-role', component: getRole },
    { path: '/show-reviewlist', name: 'get-review', component: getReview },
    { path: '/show-productlist', name: 'get-product', component: getProduct },
    { path: '/show-permissionlist', name: 'get-permission', component: getPermission },
    { path: '/show-paymentlist', name: 'get-payment', component: getPayment },
    { path: '/show-orderlist', name: 'get-order', component: getOrder },
    { path: '/show-categorylist', name: 'show-categorylist', component: getCategory },
    { path: '/show-adresslist', name: 'get-address', component: getAddress },
    {path: '/show-tasklist',name:'get-task',component: Gettask},


    { path: '/update-adress', name: 'update-adress', component: updateAddress },
    { path: '/update-role', name: 'update-role', component: updateRole },
    { path: '/update-review', name: 'update-review', component: updateReview },
    { path: '/update-product', name: 'update-product', component: updateProduct },
    { path: '/update-permission', name: 'update-permission', component: updatePermission },
    { path: '/update-payment', name: 'update-payment', component: updatePayment },
    { path: '/update-order', name: 'update-order', component: updateOrder },
    { path: '/update-category"', name: 'update-category"', component: updateCategory },
    {path: '/update-task',name:'update-task',component: updatetask},

  
    

    
    
  ]
})

export default router
