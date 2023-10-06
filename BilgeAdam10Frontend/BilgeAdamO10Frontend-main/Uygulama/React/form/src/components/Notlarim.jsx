import React, { useState } from "react";
import { addNot } from "../service/notapi";

const Notlarim = () => {
  const [notlar, setNotlar] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      not: e.target.not.value,
    };
    addNot(data).then((response) => {
      setNotlar((prevState) => [...prevState, response]);
    });
  };
  return (
    <div className="main">
      <div className="notlarim">
        <h1>Notlarım</h1>

        <div class="not">
          <p>Birinci Not</p>
          <div>
            <button class="duzenle">Düzenle</button>
            <button class="sil">Sil</button>
          </div>
        </div>

        <div class="not">
          <p>İkinci Not</p>
          <div>
            <button class="duzenle">Düzenle</button>
            <button class="sil">Sil</button>
          </div>
        </div>

        <div class="not">
          <p>Üçüncü Not</p>
          <div>
            <button class="duzenle">Düzenle</button>
            <button class="sil">Sil</button>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <h1>Yeni Not Ekle</h1>
          <input type="text" placeholder="Notunuzu buraya girin..." />
          <button type="submit">Ekle</button>
        </form>
      </div>
    </div>
  );
};

export default Notlarim;
