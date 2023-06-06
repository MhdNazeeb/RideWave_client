import React from "react";
import Userlist from "../../../components/admin/userlist/userlist";
import Layout from "../../../components/admin/SideBarComponents/components/Layout";

function UserList() {
  console.log("this  user  list");
  return (
    <>
       <Layout>
       <Userlist />
       </Layout>
      
    </>
  );
}

export default UserList;
