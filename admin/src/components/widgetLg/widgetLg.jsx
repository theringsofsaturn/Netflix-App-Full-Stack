import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest subscribtions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQExzihqf54TOQ/profile-displayphoto-shrink_800_800/0/1623667159908?e=1642636800&v=beta&t=gi_7KC9TqhoDCbhSyGx5zIKArQPzkef6NJ5qfinGvDc"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Mo Zee</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">7.99€</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGn86FG0dYz1g/profile-displayphoto-shrink_800_800/0/1553778295833?e=1642636800&v=beta&t=D4UW2v2Lk5wquESXS6nenyJvLgzhszHImJvlDhdN4Yw"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Guillermo Fragachan</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">9.99€</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEK99hK8qeVXg/profile-displayphoto-shrink_800_800/0/1630495237278?e=1642636800&v=beta&t=7Ds894FoRx2GDWtCu4KyN8u05JO0TbK7JRBJt_ZoZ-0"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Lorenzo Giorgini</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">11.99€</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5103AQFpH6PRjTAGKw/profile-displayphoto-shrink_800_800/0/1517423403521?e=1642636800&v=beta&t=v7v748JjuX_Fdxni_gQhiF5zzIGqpKCOEpUaC7WUHPQ"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Bogdan Birau</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">9.99€</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
