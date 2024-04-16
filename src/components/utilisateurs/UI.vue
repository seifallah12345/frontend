<template>
  <div>
    <header>
      <nav>
        <ul class="menu-list">
          <li class="dropdown">
            <span class="dropbtn">User Actions</span>
            <div class="dropdown-content">
              <router-link to="/signup">Add User <br></router-link>
              <router-link to="/user-del">Delete User<br></router-link>
              <router-link to="/update-user">Update User<br></router-link>
              <router-link to="/show-userlist">Show Userlist<br></router-link>
              <router-link to="/get-user-by-id">Get User by ID<br></router-link>
            </div>
          </li>
          <li class="dropdown">
            <span class="dropbtn">roles Actions</span>
            <div class="dropdown-content">
              <router-link to="/add-role">Add roles <br></router-link>
              <router-link to="/delete-role">Delete roles<br></router-link>
              <router-link to="/update-role">Update roles<br></router-link>
              <router-link to="/show-rolelist">Show roleslist<br></router-link>
              <router-link to="/get-role-by-id">Get role by ID<br></router-link>
            </div>
          </li>
      
        <li class="dropdown">
            <span class="dropbtn">Categories Actions</span>
            <div class="dropdown-content">
              <router-link to="/add-category">Add Category <br></router-link>
              <router-link to="/delete-category">Delete Category<br></router-link>
              <router-link to="/update-category">Update Category<br></router-link>
              <router-link to="/show-categorylist">Show Categorylist<br></router-link>
              <router-link to="/get-category-by-id">Get Category by ID<br></router-link>
            </div>
          </li>
          <li class="dropdown">
            <span class="dropbtn">Orders Actions</span>
            <div class="dropdown-content">
              <router-link to="/add-order">Add Order <br></router-link>
              <router-link to="/delete-order">Delete Order<br></router-link>
              <router-link to="/update-order">Update Order<br></router-link>
              <router-link to="/show-orderlist">Show Orderlist<br></router-link>
              <router-link to="/get-order-by-id">Get Order by ID<br></router-link>
            </div>
          </li>
          <li class="dropdown">
            <span class="dropbtn">Payments Actions</span>
            <div class="dropdown-content">
              <router-link to="/add-payment">Add Payment <br></router-link>
              <router-link to="/delete-payment">Delete Payment<br></router-link>
              <router-link to="/update-payment">Update Payment<br></router-link>
              <router-link to="/show-paymentlist">Show Paymentlist<br></router-link>
              <router-link to="/get-payment-by-id">Get Payment by ID<br></router-link>
            </div>
          </li>
          <li class="dropdown">
            <span class="dropbtn">Permissions Actions</span>
            <div class="dropdown-content">
              <router-link to="/add-permission">Add Permission <br></router-link>
              <router-link to="/delete-permission">Delete Permission<br></router-link>
              <router-link to="/update-permission">Update Permission<br></router-link>
              <router-link to="/show-permissionlist">Show Permissionlist<br></router-link>
              <router-link to="/get-permission-by-id">Get Permission by ID<br></router-link>
            </div>
          </li>
          <li class="dropdown">
            <span class="dropbtn">Products Actions</span>
            <div class="dropdown-content">
              <router-link to="/add-product">Add Product <br></router-link>
              <router-link to="/delete-product">Delete Product<br></router-link>
              <router-link to="/update-product">Update Product<br></router-link>
              <router-link to="/show-productlist">Show Productlist<br></router-link>
              <router-link to="/get-product-by-id">Get Product by ID<br></router-link>
            </div>
          </li>
          <li class="dropdown">
            <span class="dropbtn">Reviews Actions</span>
            <div class="dropdown-content">
              <router-link to="/add-review">Add Review <br></router-link>
              <router-link to="/delete-review">Delete Review<br></router-link>
              <router-link to="/update-review">Update Review<br></router-link>
              <router-link to="/show-reviewlist">Show Reviewlist<br></router-link>
              <router-link to="/get-review-by-id">Get Review by ID<br></router-link>
            </div>
          </li>
          <li class="dropdown">
            <span class="dropbtn">adress Actions</span>
            <div class="dropdown-content">
              <router-link to="/add-adress">Add adress <br></router-link>
              <router-link to="/delete-adress">Delete adress<br></router-link>
              <router-link to="/update-adress">Update adress<br></router-link>
              <router-link to="/show-adresslist">Show adresslist<br></router-link>
              <router-link to="/get-adress-by-id">Get adress by ID<br></router-link>
            </div>
          </li>
          <li class="dropdown">
            <span class="dropbtn">Task Actions</span>
            <div class="dropdown-content">
              <router-link to="/add-task">Add Task <br></router-link>
              <router-link to="/delete-task">Delete Task<br></router-link>
              <router-link to="/update-task">Update Task<br></router-link>
              <router-link to="/show-tasklist">Show Tasklist<br></router-link>
              <router-link to="/get-task-by-id">Get Task by ID<br></router-link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <main class="main-content">
      <div class="welcome-message">
        <h1>Welcome to the Management Dashboard</h1>
        <p>Quickly manage users, roles, and more from one place.</p>
      </div>
      <div class="dashboard-widgets">
        <div class="widget">
          <h2>320</h2>
          <p>Registered Users</p>
        </div>
        <div class="widget">
          <h2>15</h2>
          <p>Active Roles</p>
        </div>
        <div class="widget">
          <h2>78</h2>
          <p>Open Tasks</p>
        </div>
        <div class="widget">
          <h2>24</h2>
          <p>Projects</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'UserInterface'
}
</script>

<style scoped>
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  background: url('/backgrounds/light-geometry.png'); /* subtle background pattern */
}

header {
  background-color: #34568B; /* rich blue */
  padding: 10px 20px;
  color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}

nav .dropdown {
  position: relative;
}

nav .dropbtn {
  background-color: #F7C59F; /* light coral */
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

nav .dropbtn img {
  margin-right: 8px; /* space between icon and text */
  width: 24px; /* uniform icon size */
}

nav .dropbtn:hover, nav .dropbtn:focus {
  background-color: #FF6F61; /* darker shade of coral */
}

nav .dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  border-radius: 5px;
  top: 40px;
}

nav .dropdown-content a {
  color: #555;
  padding: 8px 10px;
  text-decoration: none;
  display: block;
  transition: color 0.3s;
}

nav .dropdown-content a:hover {
  color: #FF6F61;
}

nav .dropdown:hover .dropdown-content {
  display: block;
}
.main-content {
  text-align: center;
  margin-top: 20px;
}

.welcome-message h1 {
  color: #34568B;
  font-size: 2.5em;
  margin-bottom: 0.5em;
}

.welcome-message p {
  font-size: 1.2em;
  color: #666;
}

.dashboard-widgets {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap; /* Ensures responsiveness */
}

.widget {
  background-color: #F7C59F;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin: 10px;
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.widget h2 {
  font-size: 2em;
  margin: 0;
}

.widget p {
  font-weight: bold;
}
</style>

