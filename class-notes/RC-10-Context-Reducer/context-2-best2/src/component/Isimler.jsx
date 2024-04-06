import React from 'react'

import AnaUser from './AnaUser'
import { useKullaniciCntx } from '../context/KullaniciProvider'


const Isimler = () => {
  const { users } = useKullaniciCntx()

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