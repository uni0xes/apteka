import './seo.scss'
import React, { useState } from "react";
import { deliveryData } from './seo.js'
export default function Seoo(){
    const [expanded, setExpanded] = useState(false);

    return(
        <>
            <section className="delivery-seo">
      {/* Блок самовывоза */}
      <div className="pickup-section">
        <h2>Самовывоз в Москве и области</h2>
        <p className="subtitle">Доставка заказов в пределах МКАД</p>
        <table className="pickup-table">
          <thead>
            <tr>
              <th>Список аптек</th>
              <th>Выдача товаров</th>
              <th>Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {deliveryData.pickupPoints.map((point) => (
              <tr key={point.id}>
                <td>{point.name}</td>
                <td>{point.issueTime}</td>
                <td>{point.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="/" className="delivery-conditions">
          ➤ Все условия доставки
        </a>
      </div>

      {/* Блок SEO-текста */}
      <div className="seo-section">
        <h2>SEO текст</h2>
        <div className={`seo-text ${expanded ? "expanded" : "collapsed"}`}>
          {deliveryData.seoText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <button className="toggle-button" onClick={() => setExpanded(!expanded)}>
          ➤ {expanded ? "Скрыть текст" : "Показать весь текст"}
        </button>
      </div>
    </section>
        </>
    )
}