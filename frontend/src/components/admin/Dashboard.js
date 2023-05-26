import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Doughnut, Line } from "react-chartjs-2";
import Header from "../layout/Header/Header.js";
import SignInHeader from "../layout/Header/SignInHeader.js";
import { Helmet } from "react-helmet";
import Footer from "../layout/Footer/Footer.js";
import { Typography } from "@mui/material";
import { ArcElement } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {  getAdminProducts } from "../../action/productAction.js";
import { getAllOrders } from "../../action/orderAction.js";
import { getAllUsers } from "../../action/userAction.js";
import { Toaster } from "react-hot-toast";

const Dashboard = (props) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
  const dispatch = useDispatch();

    const {products } = useSelector((state) => state.products);

    const { orders } = useSelector((state) => state.allOrders);

    const { users } = useSelector((state) => state.allUsers);

    let outOfStock = 0;

    products &&
      products.forEach((item) => {
        if (item.Stock === 0) {
          outOfStock += 1;
        }
      });

    let totalAmount = 0;
    orders &&
      orders.forEach((item) => {
        totalAmount += item.totalPrice;
      });

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 4000],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length-outOfStock],
      },
    ],
  };

  return (
    <>
      <Toaster reverseOrder={false} position="top-center" />
      <Helmet>
        <title>Dashbaord-Admin</title>
      </Helmet>
      {props.isAuthenticated ? (
        <Header
          user={props.user}
          isAuthenticated={props.isAuthenticated}
          flag={false}
        />
      ) : (
        <SignInHeader flag={false} />
      )}
      <div className="dashboard">
        <Sidebar />

        <div className="dashboardContainer">
          <Typography component="h1">Dashboard</Typography>

          <div className="dashboardSummary">
            <div>
              <p>
                Total Amount <br /> ₹{totalAmount}
              </p>
            </div>
            <div className="dashboardSummaryBox2">
              <Link to="/admin/products">
                <p>Product</p>
                <p>{products && products.length}</p>
              </Link>
              <Link to="/admin/orders">
                <p>Orders</p>
                <p>{orders && orders.length}</p>
              </Link>
              <Link to="/admin/users">
                <p>Users</p>
                <p>{users && users.length}</p>
              </Link>
            </div>
          </div>

          <div className="lineChart">
            <Line data={lineState} />
          </div>

          <div className="doughnutChart">
            <Doughnut data={doughnutState} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
