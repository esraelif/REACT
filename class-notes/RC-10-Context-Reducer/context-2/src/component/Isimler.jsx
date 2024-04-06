import React from 'react'

import AnaUser from './AnaUser'
import { useContext } from 'react'
import { KullanıcıContext } from '../context/KullaniciContext'

const Isimler = () => {
  const { users } = useContext(KullanıcıContext)

  return (
    <div>
      {/* diziden 4 kişinin ismini bastir */}
      {users.slice(0, 4).map((i) => (<div style={{ textAlign: "center", background: "pink" }}>
        {i.login}
      </div>))}

      <AnaUser users={users} />

    </div>
  )
}

export default Isimler