import React from "react";
import UserList from "../../../components/admin/userlist/UserList";
import Layout from "../../../components/admin/SideBarComponents/components/Layout";

function UserListPage() {
  console.log("this  user  list");
  return (
    <>
       <Layout>
       <UserList />
       </Layout>
      
    </>
  );
}

export default UserListPage;
