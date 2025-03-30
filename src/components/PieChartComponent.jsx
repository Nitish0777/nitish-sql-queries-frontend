import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import productData from "../assets/json/product.json";

const PieChartComponent = () => {
  const chartData = productData.slice(0, 3).map((product) => ({
    title: product.productName,
    value: product.unitsInStock,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  }));

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h4>Product Stock Distribution</h4>
      <PieChart
        data={chartData}
        style={{ height: "300px" }}
        label={({ dataEntry }) => `${dataEntry.title} (${dataEntry.value})`}
        labelStyle={{
          fontSize: "4px",
          fontFamily: "sans-serif",
        }}
      />
    </div>
  );
};

export default PieChartComponent;
