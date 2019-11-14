import React from "react";
import classnames from "classnames";

import StockInfo from "../StockInfo/StockInfo";

const StockTable = props => {
  let data = props.stocks;
  let stocks = Object.keys(data).map(stock => {
    let rate = (
      ((data[stock]["price"] - data[stock]["prevClose"]) /
        data[stock]["prevClose"]) *
      100
    ).toFixed(2);
    return (
      <>
        <tr
          onClick={() => {
            props.open === stock
              ? props.onOpenInfo("")
              : props.onOpenInfo(stock);
          }}
          key={stock}
          className="bg-blue-900 h-12 border-b border-stock2"
        >
          <td className="font-semibold" data-th="Hisse">
            {stock}
          </td>
          <td
            data-th="Fiyat"
            className={classnames({
              "text-red-400": rate < 0,
              "text-green-400": rate >= 0
            })}
          >
            {data[stock]["price"]}
          </td>
          <td data-th="Düşük-Yüksek">{data[stock]["dayRange"]}</td>
          <td
            data-th="Fark"
            className={classnames("pr-2", {
              "text-red-400": rate < 0,
              "text-green-400": rate >= 0
            })}
          >
            %{Math.abs(rate)}
          </td>
        </tr>
        {props.open === stock ? <StockInfo stock={data[stock]} /> : null}
      </>
    );
  });
  return (
    <table className="w-full justify-center text-center">
      <thead>
        <tr className="bg-gray-900 text-gray-600 text-sm">
          <th />
          <th>Fiyat</th>
          <th>Düşük-Yüksek</th>
          <th>Fark</th>
        </tr>
        {stocks}
      </thead>
    </table>
  );
};

export default StockTable;
