import React from "react";

const StockInfo = props => {
  return (
    <tr>
      <td colSpan="10">
        <div className="flex justify-between px-4 py-1">
          <div className="flex-col">
            <div className="text-xs text-gray-600">52w High</div>
            <div className="text-sm text-white">{props.stock["52wHigh"]}</div>
          </div>
          <div className="flex-col">
            <div className="text-xs text-gray-600">52w Low</div>
            <div className="text-sm text-white">{props.stock["52wLow"]}</div>
          </div>
          <div className="flex-col">
            <div className="text-xs text-gray-600">Volume</div>
            <div className="text-sm text-white">{props.stock["volume"]}</div>
          </div>
          <div className="flex-col">
            <div className="text-xs text-gray-600">Dünün Kapanışı</div>
            <div className="text-sm text-white">{props.stock["prevClose"]}</div>
          </div>
        </div>
        <div className="flex justify-center px-4 py-1">
          <div className="flex-col">
            <div className="text-base text-stock4">
              Çok yakında metin kutuları eklenecek
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default StockInfo;
