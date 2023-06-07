import React from 'react'
import Layout from '../../../components/admin/SideBarComponents/components/Layout'
import DriverList from '../../../components/admin/driverList/driverList'

function DriverListPage() {
  console.log('this is driver ListPage');
  return (
    <div>
        <Layout>
            <DriverList />
        </Layout>
      
    </div>
  )
}

export default DriverListPage
